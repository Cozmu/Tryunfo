import React from 'react';
import PropTypes from 'prop-types';
import '../style/Form.css';
import icone from '../images/insert_link_24px.png';

class Form extends React.Component {
  calculateRemainingAttributes = () => {
    const { maxAtributes, cardAttr1, cardAttr2, cardAttr3 } = this.props;
    const sumAtributes = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);
    return maxAtributes - sumAtributes;
  };

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <form className="form">
        <label htmlFor="card-name">
          Nome
          <br />
          <input
            id="card-name"
            className="card-name"
            type="text"
            data-testid="name-input"
            value={ cardName }
            name="cardName"
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="description">
          Descrição
          <textarea
            id="description"
            className="description"
            data-testid="description-input"
            value={ cardDescription }
            name="cardDescription"
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attr1">
          ATK
          <input
            placeholder="MAX : 90"
            id="attr1"
            className="attr1"
            type="number"
            data-testid="attr1-input"
            value={ cardAttr1 }
            name="cardAttr1"
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attr2">
          DEF
          <input
            placeholder="MAX : 90"
            id="attr2"
            className="attr2"
            type="number"
            data-testid="attr2-input"
            value={ cardAttr2 }
            name="cardAttr2"
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attr3">
          PWR
          <input
            placeholder="MAX : 90"
            id="attr3"
            className="attr3"
            type="number"
            data-testid="attr3-input"
            value={ cardAttr3 }
            name="cardAttr3"
            onChange={ onInputChange }
          />
        </label>
        <span className="calculate-remaining-attributes">
          {`Pontos restantes : ${this.calculateRemainingAttributes()}`}
        </span>
        <label className="img" htmlFor="card-image">
          <span>Imagem</span>
          <section className="img-container">
            <input
              id="card-image"
              className="card-image"
              type="text"
              data-testid="image-input"
              value={ cardImage }
              name="cardImage"
              placeholder="Colar link"
              onChange={ onInputChange }
            />
            <div className="adereco-container">
              <img src={ icone } alt="" />
            </div>
          </section>
        </label>
        <label htmlFor="rarity">
          Raridade
          <select
            name="cardRare"
            id="rarity"
            className="rarity"
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="selecione">Selecionar</option>
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <section className="submite-container">
          <label htmlFor="Super-Trunfo">
            {hasTrunfo && <p>Você já tem um Super Trunfo em seu baralho</p>}
            {!hasTrunfo
            && (
              <div>
                <input
                  id="Super-Trunfo"
                  className="Super-Trunfo"
                  type="checkbox"
                  data-testid="trunfo-input"
                  checked={ cardTrunfo }
                  name="cardTrunfo"
                  onChange={ onInputChange }
                />
                <span>Super Trunfo</span>
              </div>)}
          </label>
          <button
            id="save"
            className="save"
            type="button"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </section>

      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
}.isRequired;

export default Form;

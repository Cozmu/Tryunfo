import React from 'react';

class Form extends React.Component {
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
      <form>
        <label htmlFor="card-name">
          <input
            id="card-name"
            type="text"
            data-testid="name-input"
            value={ cardName }
            name="cardName"
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="description">
          <textarea
            id="description"
            data-testid="description-input"
            value={ cardDescription }
            name="cardDescription"
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attr1">
          <input
            id="attr1"
            type="number"
            data-testid="attr1-input"
            value={ cardAttr1 }
            name="cardAttr1"
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attr2">
          <input
            id="attr2"
            type="number"
            data-testid="attr2-input"
            value={ cardAttr2 }
            name="cardAttr2"
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attr3">
          <input
            id="attr3"
            type="number"
            data-testid="attr3-input"
            value={ cardAttr3 }
            name="cardAttr3"
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="card-image">
          <input
            id="card-image"
            type="text"
            data-testid="image-input"
            value={ cardImage }
            name="cardImage"
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="rarity">
          <select
            name="cardRare"
            id="rarity"
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="Super-Trunfo">
          <input
            id="Super-Trunfo"
            type="checkbox"
            data-testid="trunfo-input"
            checked={ cardTrunfo }
            name="cardTrunfo"
            onChange={ onInputChange }
          />
        </label>
        <button
          id="save"
          type="button"
          data-testid="save-button"
          disabled={ !isSaveButtonDisabled() }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

/* Form.propTypes = {
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
}.isRequired; */

export default Form;

/* eslint-disable react/jsx-max-depth */
import React from 'react';
import PropTypes from 'prop-types';
import '../style/Card.css';
import logoVAVA from '../images/vava1.png';

class Card extends React.Component {
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
    } = this.props;
    return (
      <div>
        <section className="animation-container">
          <div className="Card-container">
            <h2 className="name" data-testid="name-card">{cardName}</h2>
            <p className="raridade" data-testid="rare-card">{cardRare}</p>
            <img
              className="foto"
              src={ cardImage }
              alt={ cardName }
              data-testid="image-card"
            />
            <p className="descricao" data-testid="description-card">{cardDescription}</p>
            <div className="attr">
              <section className="attr-container">
                <p>ATK</p>
                <p data-testid="attr1-card">{cardAttr1}</p>
              </section>
              <section className="attr-container">
                <p>DEF</p>
                <p data-testid="attr2-card">{cardAttr2}</p>
              </section>
              <section className="attr-container">
                <p>PWR</p>
                <p data-testid="attr3-card">{cardAttr3}</p>
              </section>
            </div>
            { cardTrunfo && <img className="logo-trunfo" src={ logoVAVA } alt="" />}
          </div>
        </section>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.number,
  cardAttr2: PropTypes.number,
  cardAttr3: PropTypes.number,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
}.isRequired;

export default Card;
// <p className="trunfo-card" data-testid="trunfo-card">Super Trunfo</p>

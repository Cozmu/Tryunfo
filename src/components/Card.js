import React from 'react';

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
      <div className="Card-container">
        <h2 data-testid="name-card">{cardName}</h2>
        <p data-testid="rare-card">{cardRare}</p>
        <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        <p data-testid="description-card">{cardDescription}</p>
        <section className="attr1-container">
          <p>ATK</p>
          <p data-testid="attr1-card">{cardAttr1}</p>
        </section>
        <section className="attr2-container">
          <p>DEF</p>
          <p data-testid="attr2-card">{cardAttr2}</p>
        </section>
        <section className="attr3-container">
          <p>PWR</p>
          <p data-testid="attr3-card">{cardAttr3}</p>
        </section>
        { cardTrunfo && <p data-testid="trunfo-card">Super Trunfo</p> }
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropType.string.isRequired,
  cardDescription: PropType.string.isRequired,
  cardAttr1: PropType.string.isRequired,
  cardAttr2: PropType.string.isRequired,
  cardAttr3: PropType.string.isRequired,
  cardImage: PropType.string.isRequired,
  cardRare: PropType.string.isRequired,
  cardTrunfo: PropType.bool.isRequired,
};

export default Card;

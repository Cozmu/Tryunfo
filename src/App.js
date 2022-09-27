import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: 0,
    cardAttr2: 0,
    cardAttr3: 0,
    cardImage: '',
    cardRare: '',
    cardTrunfo: false,
    hasTrunfo: false,
    savedCard: [],
    buttonBlocker: false,
  };

  isSaveButtonDisabled = () => {
    const { cardName, cardDescription, cardImage, cardRare } = this.state;
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const MaxLeagth = 90;
    const max = 210;
    const sum = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);
    const atributoUm = cardAttr1 > MaxLeagth || cardAttr1 < 0;
    const atributoDois = cardAttr2 > MaxLeagth || cardAttr2 < 0;
    const atributoTres = cardAttr3 > MaxLeagth || cardAttr3 < 0;
    if (sum > max) {
      return false;
    }
    if (atributoUm || atributoDois || atributoTres) {
      return false;
    }
    if (cardName && cardDescription && cardImage && cardRare) {
      return true;
    }
  };

  onInputChange = (e) => {
    const { name, type, checked } = e.target;
    const value = type === 'checkbox' ? checked : e.target.value;
    this.setState({ [name]: value });
  };

  onSaveButtonClick = (e) => {
    e.preventDefault();
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
      buttonBlocker,
    } = this.state;
    const newCard = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      buttonBlocker,
    };
    this.setState((prev) => ({
      savedCard: [...prev.savedCard, newCard],
    }));
    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: true,
      buttonBlocker: true,
    });
  };

  /*  buttonBlocker = () => {
    const { hasTrunfo, savedCard } = this.state;

  }; */

  render() {
    return (
      <div>
        <h1>INICIANDO PROJETO</h1>
        <Form
          { ...this.state }
          onInputChange={ this.onInputChange }
          isSaveButtonDisabled={ this.isSaveButtonDisabled }
          onSaveButtonClick={ this.onSaveButtonClick }
          buttonBlocker={ this.buttonBlocker }
        />
        <Card { ...this.state } />
      </div>
    );
  }
}

export default App;

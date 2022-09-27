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
  };

  isSaveButtonDisabled = () => {
    const { cardName, cardDescription, cardImage, cardRare } = this.state;
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const MaxLeagth = 90;
    const max = 210;
    // const sum = number(cardAttr1) + number(cardAttr2) + number(cardAttr3);
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

  render() {
    return (
      <div>
        <h1>INICIANDO PROJETO</h1>
        <Form
          { ...this.state }
          onInputChange={ this.onInputChange }
          isSaveButtonDisabled={ this.isSaveButtonDisabled }
        />
        <Card { ...this.state } />
      </div>
    );
  }
}

export default App;

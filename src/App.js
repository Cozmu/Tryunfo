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
    searchValue: '',
    raridade: 'todas',
    trunfoFilter: false,
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
      return true;
    }
    if (atributoUm || atributoDois || atributoTres) {
      return true;
    }
    if (cardName.length > 0
      && cardDescription.length > 0
      && cardImage.length > 0
      && cardRare.length > 0) {
      return false;
    }
    return true;
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
    };
    this.setState((prev) => ({
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      savedCard: [...prev.savedCard, newCard],
      hasTrunfo: [...prev.savedCard, newCard].some((card) => card.cardTrunfo),
    }));
  };

  HandleRemoveCards = (nome) => {
    const { savedCard } = this.state;
    const cards = savedCard.filter(({ cardName }) => cardName !== nome);
    const reset = savedCard.some(({ hasTrunfo }) => hasTrunfo !== false); // bug aqui :(
    this.setState({ savedCard: cards, hasTrunfo: reset });
  };

  handleSearchValue = (e) => {
    this.setState({ searchValue: e.target.value });
  };

  render() {
    const { savedCard, searchValue, raridade, trunfoFilter } = this.state;
    const lower = searchValue.toLocaleLowerCase();
    return (
      <>
        <h1>INICIANDO PROJETO</h1>
        <Form
          { ...this.state }
          onInputChange={ this.onInputChange }
          isSaveButtonDisabled={ this.isSaveButtonDisabled() }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card { ...this.state } />
        <section className="filter-container">
          <label htmlFor="pesquisa">
            <input
              id="pesquisa"
              type="text"
              data-testid="name-filter"
              value={ searchValue }
              onChange={ this.handleSearchValue }
              disabled={ trunfoFilter }
            />
          </label>
          <label htmlFor="rare-filter">
            <select
              onChange={ this.onInputChange }
              name="raridade"
              id="rare-filter"
              data-testid="rare-filter"
              disabled={ trunfoFilter }
            >
              <option value="todas">Todas</option>
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito Raro</option>
            </select>
          </label>
          <label htmlFor="trunfo-filter">
            Super Trunfo
            <input
              id="trunfo-filter"
              type="checkbox"
              data-testid="trunfo-filter"
              name="trunfoFilter"
              checked={ trunfoFilter }
              onChange={ this.onInputChange }
            />
          </label>
        </section>
        <section id="remove-pai" className="Cards">
          {savedCard.filter((card) => card.cardName.toLowerCase().includes(lower)
          && (raridade === 'todas' || raridade === card.cardRare)
          && (trunfoFilter === false || card.cardTrunfo === trunfoFilter))
            .map((element, index) => (
              <article key={ index }>
                <Card
                  { ...element }
                />
                <button
                  data-testid="delete-button"
                  type="button"
                  onClick={ () => this.HandleRemoveCards(element.cardName) }
                >
                  Excluir
                </button>
              </article>
            ))}
        </section>
      </>
    );
  }
}

export default App;

import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="card-name">
          <input id="card-name" type="text" data-testid="name-input" />
        </label>
        <label htmlFor="description">
          <input id="description" type="textarea" data-testid="description-input" />
        </label>
        <label htmlFor="attr1">
          <input id="attr1" type="number" data-testid="attr1-input" />
        </label>
        <label htmlFor="attr2">
          <input id="attr2" type="number" data-testid="attr2-input" />
        </label>
        <label htmlFor="attr3">
          <input id="attr3" type="number" data-testid="attr3-input" />
        </label>
        <label htmlFor="card-image">
          <input id="card-image" type="text" data-testid="image-input" />
        </label>
        <label htmlFor="rarity">
          <select name="rarity" id="rarity" data-testid="rare-input">
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="Super-Trunfo">
          <input id="Super-Trunfo" type="checkbox" data-testid="trunfo-input" />
        </label>
        <button id="save" type="button" data-testid="save-button">Salvar</button>
      </form>
    );
  }
}

export default Form;

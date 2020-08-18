import React, { Component } from 'react';
import { runInThisContext } from 'vm';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
    //console.log(this.state);
  }

  render() {
    return (
      <form className="input-group">
        <input
          placeholder="5일 간의 기상정보를 받아보세요"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </span>
      </form>
    );
  }
}

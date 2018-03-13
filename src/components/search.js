import React, { Component } from 'react';
import { Button, FormGroup, ControlLabel, FormControl  } from 'react-bootstrap';
import '../App.css';


class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {asins: ''};
  }

  handleChange = (event) => {
    this.setState({asins: event.target.value});
  };

  handleClick = () => {
    let rawAsins = this.state.asins.split("\n");
    console.log('rawAsins', rawAsins);
    this.props.searchFunc(rawAsins);
  };

  render() {
    return (
      <div>
        <FormGroup controlId="formControlsTextarea" className="App-input">
          <ControlLabel className="input-txt">Input Data</ControlLabel>
          <div className="input-eg-txt">(Eg. "B073C4H9RT<br />B07373WJ5T<br />B072JBC1GM")</div>
          <FormControl componentClass="textarea" placeholder="Insert query here..."
                       value={this.state.value} onChange={this.handleChange} />
        </FormGroup>
        <Button bsStyle="primary" bsSize="large" onClick={this.handleClick}>Search</Button>
    </div>
    );
  }
}

export default Search;

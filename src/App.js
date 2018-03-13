import React, { Component } from 'react';
import './App.css';
import Search from './components/search'
import Datatable from './components/datatable'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { asins: [], data: [] };
  }

  handleSearch = (values) => {
    this.setState({ asins: values }, this.fetchAzRatingData);
  }

  fetchAzRatingData() {
    var that = this;
    var asinArr = this.state.asins;
    Promise.all(asinArr.map(asin => {
      return this.fetchAzRatingDataPromise(asin)
    }))
    .then(function(values) {
      console.log(values);
      that.setState({
        data: values
      });
    });
  }

  fetchAzRatingDataPromise = asin => {
    return new Promise((resolve, reject) => {
      fetch('http://ec2-13-58-184-238.us-east-2.compute.amazonaws.com:4001/reviews/asin/'+asin, {
        mode: "cors",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      })
      .then(result => {
        if(result.status === 200){
          resolve(result.json());
        } else {
          resolve({asin: asin, name: 'Not found', url: 'https://www.amazon.com/dp/'+asin});
        }
      })
      .catch(err => {
        reject(err)
      })
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Search searchFunc={this.handleSearch} />
        <Datatable data={this.state.data} />
      </div>
    );
  }
}

export default App;

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
      let newVal = []
      values.forEach(val => {
        console.log(val);
        if(val.review_count5 && val.review_count4){
          if(val.review_count5 < val.review_count4){
            val.rcnote4 = 'count_inc';
          }
          if(val.overall_rating5 < val.overall_rating4){
            val.ornote4 = 'inc';
          } else if(val.overall_rating5 > val.overall_rating4){
            val.ornote4 = 'dec';
          }
        }
        if(val.review_count4 && val.review_count3){
          if(val.review_count4 < val.review_count3){
            val.rcnote3 = 'count_inc';
          }
          if(val.overall_rating4 < val.overall_rating3){
            val.ornote3 = 'inc';
          } else if(val.overall_rating4 > val.overall_rating3){
            val.ornote3 = 'dec';
          }
        }
        if(val.review_count3 && val.review_count2){
          if(val.review_count3 < val.review_count2){
            val.rcnote2 = 'count_inc';
          }
          if(val.overall_rating3 < val.overall_rating2){
            val.ornote2 = 'inc';
          } else if(val.overall_rating3 > val.overall_rating2){
            val.ornote2 = 'dec';
          }
        }
        if(val.review_count2 && val.review_count){
          if(val.review_count2 < val.review_count){
            val.rcnote = 'count_inc';
          }
          if(val.overall_rating2 < val.overall_rating){
            val.ornote = 'inc';
          } else if(val.overall_rating2 > val.overall_rating){
            val.ornote = 'dec';
          }
        }
        newVal.push(val);
      });
      console.log(newVal);
      that.setState({
        data: newVal
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

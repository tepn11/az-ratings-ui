import React, { Component } from 'react';
import {Table, Column, Cell} from 'fixed-data-table-2';
import 'fixed-data-table-2/dist/fixed-data-table.css';

class TextCell extends React.PureComponent {
  render() {
    const {data, rowIndex, columnKey, ...props} = this.props;
    return (
      <Cell {...props}>
        {data[rowIndex][columnKey]}
      </Cell>
    );
  }
};

class Datatable extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [], formattedData: [] };
    this.fetchAzRatingData = this.fetchAzRatingData.bind(this);
  }

  fetchAzRatingData() {
    var that = this;
    Promise.all([
      this.fetchAzRatingDataPromise('B073C4H9RT'), 
      this.fetchAzRatingDataPromise('B07373WJ5T'),

      this.fetchAzRatingDataPromise('B072JBC1GM'), 
      this.fetchAzRatingDataPromise('B072JBC1GM'),
      this.fetchAzRatingDataPromise('B072HMPPH2'),
      this.fetchAzRatingDataPromise('B01FRGGNCU'),
      this.fetchAzRatingDataPromise('B01NBRB8B6'),
      this.fetchAzRatingDataPromise('B01N1416SN'),

      this.fetchAzRatingDataPromise('B074V4CJJK'),
      this.fetchAzRatingDataPromise('B073NN58DQ'),
      this.fetchAzRatingDataPromise('B073KLVNVX'),
      this.fetchAzRatingDataPromise('B073DCW3WR'),
      this.fetchAzRatingDataPromise('B077J56SB7'),
      this.fetchAzRatingDataPromise('B077J5X5NZ'),

      this.fetchAzRatingDataPromise('B010PB26Z0'),
      this.fetchAzRatingDataPromise('B01LVZC319'),
      this.fetchAzRatingDataPromise('B01LW9L9YR'),
      this.fetchAzRatingDataPromise('B01GIV6E4A'),
      this.fetchAzRatingDataPromise('B01GJ1NEGK'),
      this.fetchAzRatingDataPromise('B01GJ1NFSW'),
      this.fetchAzRatingDataPromise('B01GJ1N9V0'),
      this.fetchAzRatingDataPromise('B01GJ1NEEM'),
      this.fetchAzRatingDataPromise('B01GJ1ND5C'),
      this.fetchAzRatingDataPromise('B01F7RKTII'),
      this.fetchAzRatingDataPromise('B00ZQDJTOE'),

      this.fetchAzRatingDataPromise('B0761PRC72'),
      this.fetchAzRatingDataPromise('B075SWX5W8'),
      this.fetchAzRatingDataPromise('B075SS5H1C'),
      this.fetchAzRatingDataPromise('B075SZJD5Y')
    ])
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
        resolve(result.json());
      })
      .catch(err => {
        reject(err)
      })
    })
  }

  componentDidMount() {
    this.fetchAzRatingData()
  }


  render() {
    return (
      <Table
        rowHeight={50}
        rowsCount={this.state.data.length}
        width={1300}
        height={5000}
        headerHeight={70}>
        <Column
          header={<Cell>Url</Cell>}
          columnKey="url"
          cell={<TextCell data={this.state.data} />}
          width={300}
        />
        <Column
          header={<Cell>Name</Cell>}
          columnKey="name"
          cell={<TextCell data={this.state.data} />}
          width={400}
        />
        <Column
          header={<Cell>Asin</Cell>}
          columnKey="asin"
          cell={<TextCell data={this.state.data} />}
          width={100}
        />
        <Column
          header={<Cell>Review count 2 days ago</Cell>}
          columnKey="review_count3"
          cell={<TextCell data={this.state.data} />}
          width={70}
        />
        <Column
          header={<Cell>Overall rating 2 days ago</Cell>}
          columnKey="overall_rating3"
          cell={<TextCell data={this.state.data} />}
          width={70}
        />
        <Column
          header={<Cell>Review count a day ago</Cell>}
          columnKey="review_count2"
          cell={<TextCell data={this.state.data} />}
          width={70}
        />
        <Column
          header={<Cell>Overall rating a day ago</Cell>}
          columnKey="overall_rating2"
          cell={<TextCell data={this.state.data} />}
          width={70}
        />
        <Column
          header={<Cell>Review count</Cell>}
          columnKey="review_count"
          cell={<TextCell data={this.state.data} />}
          width={70}
        />
        <Column
          header={<Cell>Overall rating</Cell>}
          columnKey="overall_rating"
          cell={<TextCell data={this.state.data} />}
          width={70}
        />
      </Table>
    )
  }
}

export default Datatable;
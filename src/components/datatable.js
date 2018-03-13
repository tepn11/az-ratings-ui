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
    console.log(props.data);
    this.state = { data: props.data, formattedData: [] };
  }

  render() {
    return (
      <Table
        rowHeight={50}
        rowsCount={this.props.data.length}
        width={1300}
        height={5000}
        headerHeight={70}>
        <Column
          header={<Cell>Url</Cell>}
          columnKey="url"
          cell={<TextCell data={this.props.data} />}
          width={300}
        />
        <Column
          header={<Cell>Name</Cell>}
          columnKey="name"
          cell={<TextCell data={this.props.data} />}
          width={400}
        />
        <Column
          header={<Cell>Asin</Cell>}
          columnKey="asin"
          cell={<TextCell data={this.props.data} />}
          width={100}
        />
        <Column
          header={<Cell>Review count 2 days ago</Cell>}
          columnKey="review_count3"
          cell={<TextCell data={this.props.data} />}
          width={70}
        />
        <Column
          header={<Cell>Overall rating 2 days ago</Cell>}
          columnKey="overall_rating3"
          cell={<TextCell data={this.props.data} />}
          width={70}
        />
        <Column
          header={<Cell>Review count a day ago</Cell>}
          columnKey="review_count2"
          cell={<TextCell data={this.props.data} />}
          width={70}
        />
        <Column
          header={<Cell>Overall rating a day ago</Cell>}
          columnKey="overall_rating2"
          cell={<TextCell data={this.props.data} />}
          width={70}
        />
        <Column
          header={<Cell>Review count</Cell>}
          columnKey="review_count"
          cell={<TextCell data={this.props.data} />}
          width={70}
        />
        <Column
          header={<Cell>Overall rating</Cell>}
          columnKey="overall_rating"
          cell={<TextCell data={this.props.data} />}
          width={70}
        />
      </Table>
    )
  }
}

export default Datatable;
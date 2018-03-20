import React, { Component } from 'react';
import {Table, Column, ColumnGroup, Cell} from 'fixed-data-table-2';
import 'fixed-data-table-2/dist/fixed-data-table.css';

class TextCell extends React.PureComponent {
  render() {
    const {data, rowIndex, columnKey, ...props} = this.props;
    return (
      <Cell {...props} className={data[rowIndex][this.props.cn]}>
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
        groupHeaderHeight={30}
        rowsCount={this.props.data.length}
        width={1800}
        height={5000}
        overflowX={'auto'}
        headerHeight={70}>
        <ColumnGroup
          header={<Cell>Details</Cell>}>
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
        </ColumnGroup>
        <ColumnGroup
          header={<Cell>4 days ago</Cell>}>
          <Column
            header={<Cell>Count</Cell>}
            columnKey="review_count5"
            cell={<TextCell data={this.props.data} />}
            width={60}
          />
          <Column
            header={<Cell>Rating</Cell>}
            columnKey="overall_rating5"
            cell={<TextCell data={this.props.data} />}
            width={60}
          />
          <Column
            header={<Cell>TS</Cell>}
            columnKey="ts5"
            cell={<TextCell data={this.props.data} />}
            width={70}
          />
        </ColumnGroup>
        <ColumnGroup
          header={<Cell>3 days ago</Cell>}>
          <Column
            header={<Cell>Count</Cell>}
            columnKey="review_count4"
            cell={<TextCell data={this.props.data} cn="rcnote4" />}
            width={60}
          />
          <Column
            header={<Cell>Rating</Cell>}
            columnKey="overall_rating4"
            cell={<TextCell data={this.props.data} cn="ornote4" />}
            width={60}
          />
          <Column
            header={<Cell>TS</Cell>}
            columnKey="ts4"
            cell={<TextCell data={this.props.data} />}
            width={70}
          />
        </ColumnGroup>
        <ColumnGroup
          header={<Cell>2 days ago</Cell>}>
          <Column
            header={<Cell>Count</Cell>}
            columnKey="review_count3"
            cell={<TextCell data={this.props.data} cn="rcnote3" />}
            width={60}
          />
          <Column
            header={<Cell>Rating</Cell>}
            columnKey="overall_rating3"
            cell={<TextCell data={this.props.data} cn="ornote3" />}
            width={60}
          />
          <Column
            header={<Cell>TS</Cell>}
            columnKey="ts3"
            cell={<TextCell data={this.props.data} />}
            width={70}
          />
        </ColumnGroup>
        <ColumnGroup
          header={<Cell>1 day ago</Cell>}>
          <Column
            header={<Cell>Count</Cell>}
            columnKey="review_count2"
            cell={<TextCell data={this.props.data} cn="rcnote2" />}
            width={60}
          />
          <Column
            header={<Cell>Rating</Cell>}
            columnKey="overall_rating2"
            cell={<TextCell data={this.props.data} cn="ornote2" />}
            width={60}
          />
          <Column
            header={<Cell>TS</Cell>}
            columnKey="ts2"
            cell={<TextCell data={this.props.data} />}
            width={70}
          />
        </ColumnGroup>
        <ColumnGroup
          header={<Cell>Latest</Cell>}>
          <Column
            header={<Cell>Count</Cell>}
            columnKey="review_count"
            cell={<TextCell data={this.props.data} cn="rcnote" />}
            width={60}
          />
          <Column
            header={<Cell>Rating</Cell>}
            columnKey="overall_rating"
            cell={<TextCell data={this.props.data} cn="ornote" />}
            width={60}
          />
          <Column
            header={<Cell>TS</Cell>}
            columnKey="ts"
            cell={<TextCell data={this.props.data} />}
            width={70}
          />
        </ColumnGroup>
      </Table>
    )
  }
}

export default Datatable;
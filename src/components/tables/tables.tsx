import React from 'react';
import { Table, Spin } from 'antd';
import { Resizable } from 'react-resizable';
import { tableData, columns, TableData} from '../../state/makeData';

import './styles.css';

const ResizableTitle = (props: any) => {
    const { onResize, width, ...restProps } = props;
  
    if (!width) {
      return <th {...restProps} />;
    }
  
    return (
      <Resizable
        width={width}
        height={0}
        handle={
          <span
            className="react-resizable-handle"
            onClick={e => {
              e.stopPropagation();
            }}
          />
        }
        onResize={onResize}
        draggableOpts={{ enableUserSelectHack: false }}
      >
        <th {...restProps} />
      </Resizable>
    );
  };
  
export class Tables extends React.Component<ITableProps, ITableState> {
  state = {
    selectedRowKeys: [],
    columns: columns,
    width: 1600,
  };

  components = {
    header: {
      cell: ResizableTitle,
    },
  };

  onSelectChange = (selectedRowKeys: any[]) => {
    this.setState({ selectedRowKeys });
  };


  handleResize = (index: number) => (e: Event, { size } : {size: any}) => {
    this.setState(({ columns }) => {
      const nextColumns: any[] = [...columns];
      nextColumns[index] = {
        ...nextColumns[index],
        width: size.width,
      };
      return { columns: nextColumns };
    });
  };

  render() {

    const { filters, loadStatus} = this.props;

    let width: number = 70;

    const columns: any[] = this.state.columns.map((col: any, index: number) => {
        width = width + col.width;
        return ({
            ...col,
            onHeaderCell: (column: any) => ({
            width: column.width,
            onResize: this.handleResize(index),
            }),
      })
    });


    const { selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
      selections: [
        Table.SELECTION_ALL,
        Table.SELECTION_INVERT,
        Table.SELECTION_NONE,
      ],
    };

    const data: TableData[]= tableData.filter( (el: TableData) => {
        if (filters?.geo?.length) {
            return filters?.geo.includes(el.date);
        } else {
            return true;
        }
    });

    return (        
            <Spin size="large" spinning={loadStatus}>
                <Table components={this.components} rowSelection={rowSelection} columns={columns} dataSource={data} scroll={{ y: 800, x: width }} pagination={false} bordered size="small" tableLayout='auto'/>
            </Spin>
    )
  }
}

interface ITableProps {
  loadStatus: boolean;
  filters: any; // статус фильтров пока не описан полностью 
}

interface ITableState {
  selectedRowKeys: any[]; 
  columns: any[]; // данные о колонках не описаны
  width: number;
}
import React from 'react';
import moment from 'moment';
import { Table, Spin } from 'antd';
import { Resizable } from 'react-resizable';

import './styles.css';

const geo = [
    'AR', 'BG', 'CK', 'TR', 'MX', 'RO', 'PT', 'ID', 'GN'
];
  

const columns = [
  {
    title: 'Date',
    dataIndex: 'date',
    editable: true,
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.date - b.date,
    width: 80,
  },
  {
    title: 'Total',
    dataIndex: 'total',
    ellipsis: true,
    align: 'right',
    width: 40,
  },
  {
    title: 'Valid',
    dataIndex: 'valid',
    ellipsis: true,
    align: 'right',
    width: 40,
  },
  {
    title: 'Valid%',
    dataIndex: 'validP',
    ellipsis: true,
    className: 'color_1',
    align: 'right',
    width: 55,
  },
  {
    title: 'Unproc',
    dataIndex: 'unproc',
    ellipsis: true,
    align: 'right',
    width: 60,
  },
  {
    title: 'App hour',
    dataIndex: 'appHour',
    ellipsis: true,
    align: 'right',
    width: 70,
  },
  {
    title: 'Unproc%',
    dataIndex: 'unprocP',
    ellipsis: true,
    className: 'color_1',
    align: 'right',
    width: 70,
  },
  {
    title: 'Proc.',
    dataIndex: 'proc',
    ellipsis: true,
    className: 'color_2',
    align: 'right',
    width: 45,
  },
  {
    title: 'Drt. app.',
    dataIndex: 'drtApp',
    ellipsis: true,
    className: 'color_2',
    align: 'right',
    width: 70,
  },
  {
    title: 'Cln App',
    dataIndex: 'clnApp',
    ellipsis: true,
    className: 'color_3',
    align: 'right',
    width: 60,
  },
  {
    title: 'Work App.%',
    dataIndex: 'workApp',
    ellipsis: true,
    className: 'color_1',
    align: 'right',
    width: 90,
  },
  {
    title: 'Plan Avg. check',
    dataIndex: 'planAvgCheck',
    ellipsis: true,
    className: 'text_bold',
    align: 'right',
    width: 115,
  },
  {
    title: 'Ups',
    dataIndex: 'ups',
    ellipsis: true,
    className: 'color_1',
    align: 'right',
    width: 40,
  },
  {
    title: 'Ups%',
    dataIndex: 'upsP',
    ellipsis: true,
    align: 'right',
    width: 50,
  },
  {
    title: 'Cross',
    dataIndex: 'cross',
    ellipsis: true,
    align: 'right',
    width: 50,
  },
  {
    title: 'Cross%',
    dataIndex: 'crossP',
    ellipsis: true,
    align: 'right',
    width: 60,
  },
  {
    title: 'Rej.',
    dataIndex: 'rej',
    ellipsis: true,
    className: 'color_4',
    align: 'right',
    width: 38,
  },
  {
    title: 'Rej%',
    dataIndex: 'rejP',
    ellipsis: true,
    className: 'color_4',
    align: 'right',
    width: 45,
  },
  {
    title: 'Decl',
    dataIndex: 'decl',
    ellipsis: true,
    className: 'color_5',
    align: 'right',
    width: 40,
  },
  {
    title: 'Decl%',
    dataIndex: 'declP',
    ellipsis: true,
    className: 'color_5',
    align: 'right',
    width: 55,
  },
  {
    title: 'Decl_dbl',
    dataIndex: 'declDbl',
    ellipsis: true,
    align: 'right',
    width: 70,
  },
  {
    title: 'Decl_dbl%',
    dataIndex: 'declDblP',
    ellipsis: true,
    align: 'right',
    width: 80,
  },
  {
    title: 'Num of connected',
    dataIndex: 'numOfConnected',
    ellipsis: true,
    align: 'right',
    width: 130,
  },
  {
    title: 'Connected',
    dataIndex: 'connected',
    ellipsis: true,
    align: 'right',
    width: 85,
  },
];

const data = [];
for (let i = 0; i < 9; i++) {
  data.push({
    key: i,
    date: geo[i],
    total: 1000,
    valid: 600,
    validP: '50%',
    unproc: 100,
    appHour: 2,
    unprocP: '10%',
    proc: 76,
    drtApp: '23%',
    clnApp: '34%',
    workApp: '16%',
    planAvgCheck: '2323,45',
    ups: 4,
    upsP: '23%',
    cross: 65,
    crossP: '33%',
    rej: 22,
    rejP: '85%',
    decl: 56,
    declP: '12%',
    declDbl: 322,
    declDblP: '34%',
    numOfConnected: 344,
    connected: '23%',
    children: [
        {
            key: i,
            date: moment([2021, 6, 23]).format('DD.MM.YYYY'),
            total: 600,
            valid: 200,
            validP: '30%',
            unproc: 63,
            appHour: 1,
            unprocP: '10%',
            proc: 46,
            drtApp: '23%',
            clnApp: '34%',
            workApp: '16%',
            planAvgCheck: '2323,45',
            ups: 4,
            upsP: '23%',
            cross: 65,
            crossP: '33%',
            rej: 22,
            rejP: '85%',
            decl: 56,
            declP: '12%',
            declDbl: 322,
            declDblP: '34%',
            numOfConnected: 344,
            connected: '23%',
        },
        {
            key: i,
            date: moment([2021, 6, 21]).format('DD.MM.YYYY'),
            total: 400,
            valid: 400,
            validP: '20%',
            unproc: 46,
            appHour: 1,
            unprocP: '10%',
            proc: 30,
            drtApp: '23%',
            clnApp: '34%',
            workApp: '16%',
            planAvgCheck: '2323,45',
            ups: 4,
            upsP: '23%',
            cross: 65,
            crossP: '33%',
            rej: 22,
            rejP: '85%',
            decl: 56,
            declP: '12%',
            declDbl: 322,
            declDblP: '34%',
            numOfConnected: 344,
            connected: '23%',
        }
    ]
  });
}

const ResizableTitle = props => {
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
export class Tables extends React.Component {
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

  onSelectChange = selectedRowKeys => {
    this.setState({ selectedRowKeys });
  };


  handleResize = index => (e, { size }) => {
    this.setState(({ columns }) => {
      const nextColumns = [...columns];
      nextColumns[index] = {
        ...nextColumns[index],
        width: size.width,
      };
      return { columns: nextColumns };
    });
  };

  render() {

    let width = 70;

    const columns = this.state.columns.map((col, index) => {
        width = width + col.width;
        return ({
            ...col,
            onHeaderCell: column => ({
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
        {
          key: 'odd',
          text: 'Select Odd Row',
          onSelect: changableRowKeys => {
            let newSelectedRowKeys = [];
            newSelectedRowKeys = changableRowKeys.filter((key, index) => {
              if (index % 2 !== 0) {
                return false;
              }
              return true;
            });
            this.setState({ selectedRowKeys: newSelectedRowKeys });
          },
        },
        {
          key: 'even',
          text: 'Select Even Row',
          onSelect: changableRowKeys => {
            let newSelectedRowKeys = [];
            newSelectedRowKeys = changableRowKeys.filter((key, index) => {
              if (index % 2 !== 0) {
                return true;
              }
              return false;
            });
            this.setState({ selectedRowKeys: newSelectedRowKeys });
          },
        },
      ],
    };

    const tableData = data.filter( el => {
        if (this.props?.filters?.geo?.length) {
            console.log(this.props?.filters?.geo);
            return this.props?.filters?.geo.includes(el.date);
        } else {
            return true;

        }
    });

    return (        
            <Spin size="large" spinning={this.props.loadStatus}>
                <Table components={this.components} rowSelection={rowSelection} columns={columns} dataSource={tableData} scroll={{ y: 800, x: width }} pagination={false} bordered size="small" tableLayout='auto'/>
            </Spin>
    )
  }
}

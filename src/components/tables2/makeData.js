import namor from 'namor'
import moment from 'moment';

const range = len => {
  const arr = []
  for (let i = 0; i < len; i++) {
    arr.push(i)
  }
  return arr
}

const newPerson = () => {
  const statusChance = Math.random()
  return {
    firstName: namor.generate({ words: 1, numbers: 0 }),
    lastName: namor.generate({ words: 1, numbers: 0 }),
    age: Math.floor(Math.random() * 30),
    visits: Math.floor(Math.random() * 100),
    progress: Math.floor(Math.random() * 100),
    status:
      statusChance > 0.66
        ? 'relationship'
        : statusChance > 0.33
        ? 'complicated'
        : 'single',
  }
}

export default function makeData(...lens) {
  const makeDataLevel = (depth = 0) => {
    const len = lens[depth]
    return range(len).map(d => {
      return {
        ...newPerson(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
      }
    })
  }

  return makeDataLevel()
}


export const dataColumns = [
  {
    // Header: 'Date',
    // accessor: 'date',
    // editable: true,
    // defaultSortOrder: 'descend',
    // sorter: (a, b) => a.date - b.date,
    Header: 'Date',
    accessor: 'date',
    minWidth: 40, 
    width: 40, 
    maxWidth: 200,
  },
  {
    // Header: 'Total',
    // accessor: 'total',
    // ellipsis: true,
    // align: 'right',
    Header: 'Total',
    accessor: 'total',
    minWidth: 40, 
    width: 40, 
    maxWidth: 200,
  },
  {
    // Header: 'Valid',
    // accessor: 'valid',
    // ellipsis: true,
    // align: 'right',
    Header: 'Valid',
    accessor: 'valid',
    minWidth: 40, 
    width: 40, 
    maxWidth: 200,
  },
  {
    // Header: 'Valid%',
    // accessor: 'validP',
    // ellipsis: true,
    // className: 'color_1',
    // align: 'right',
    Header: 'Valid%',
    accessor: 'validP',
    minWidth: 50, 
    width: 50, 
    maxWidth: 200,
  },
  {
    // Header: 'Unproc',
    // accessor: 'unproc',
    // ellipsis: true,
    // align: 'right',
    Header: 'Unproc',
    accessor: 'unproc',
    minWidth: 60, 
    width: 60, 
    maxWidth: 200,
  },
  {
    // Header: 'App hour',
    // accessor: 'appHour',
    // ellipsis: true,
    // align: 'right',
    Header: 'App hour',
    accessor: 'appHour',
    minWidth: 70, 
    width: 70, 
    maxWidth: 200,
  },
  {
    // Header: 'Unproc%',
    // accessor: 'unprocP',
    // ellipsis: true,
    // className: 'color_1',
    // align: 'right',
    Header: 'Unproc%',
    accessor: 'unprocP',
    minWidth: 70, 
    width: 70, 
    maxWidth: 200,
  },
  {
    // Header: 'Proc.',
    // accessor: 'proc',
    // ellipsis: true,
    // className: 'color_2',
    // align: 'right',
    Header: 'Proc.',
    accessor: 'proc',
    minWidth: 40, 
    width: 40, 
    maxWidth: 200,
  },
  {
    Header: 'Drt. app.',
    accessor: 'drtApp',
    ellipsis: true,
    className: 'color_2',
    align: 'right',
    minWidth: 65, 
    width: 65, 
    maxWidth: 200,
  },
  {
    Header: 'Cln App',
    accessor: 'clnApp',
    ellipsis: true,
    className: 'color_3',
    align: 'right',
    minWidth: 60, 
    width: 60, 
    maxWidth: 200,
  },
  {
    Header: 'Work App.%',
    accessor: 'workApp',
    ellipsis: true,
    className: 'color_1',
    align: 'right',
    minWidth: 90, 
    width: 90, 
    maxWidth: 200,
  },
  {
    Header: 'Plan Avg. check',
    accessor: 'planAvgCheck',
    ellipsis: true,
    className: 'text_bold',
    align: 'right',
    minWidth: 110, 
    width: 110, 
    maxWidth: 200,
  },
  {
    Header: 'Ups',
    accessor: 'ups',
    ellipsis: true,
    className: 'color_1',
    align: 'right',
    minWidth: 35, 
    width: 35, 
    maxWidth: 200,
  },
  {
    Header: 'Ups%',
    accessor: 'upsP',
    ellipsis: true,
    align: 'right',
    minWidth: 50, 
    width: 50, 
    maxWidth: 200,
  },
  {
    Header: 'Cross',
    accessor: 'cross',
    ellipsis: true,
    align: 'right',
    minWidth: 50, 
    width: 50, 
    maxWidth: 200,
  },
  {
    Header: 'Cross%',
    accessor: 'crossP',
    ellipsis: true,
    align: 'right',
    minWidth: 60, 
    width: 60, 
    maxWidth: 200,
  },
  {
    Header: 'Rej.',
    accessor: 'rej',
    ellipsis: true,
    className: 'color_4',
    align: 'right',
    minWidth: 35, 
    width: 35, 
    maxWidth: 200,
  },
  {
    Header: 'Rej%',
    accessor: 'rejP',
    ellipsis: true,
    className: 'color_4',
    align: 'right',
    minWidth: 45, 
    width: 45, 
    maxWidth: 200,
  },
  {
    Header: 'Decl',
    accessor: 'decl',
    ellipsis: true,
    className: 'color_5',
    align: 'right',
    minWidth: 40, 
    width: 40, 
    maxWidth: 200,
  },
  {
    Header: 'Decl%',
    accessor: 'declP',
    ellipsis: true,
    className: 'color_5',
    align: 'right',
    minWidth: 50, 
    width: 50, 
    maxWidth: 200,
  },
  {
    Header: 'Decl_dbl',
    accessor: 'declDbl',
    ellipsis: true,
    align: 'right',
    minWidth: 70, 
    width: 70, 
    maxWidth: 200,
  },
  {
    Header: 'Decl_dbl%',
    accessor: 'declDblP',
    ellipsis: true,
    align: 'right',
    minWidth: 80, 
    width: 80, 
    maxWidth: 200,
  },
  {
    Header: 'Num of connected',
    accessor: 'numOfConnected',
    ellipsis: true,
    align: 'right',
    minWidth: 130, 
    width: 130, 
    maxWidth: 200,
  },
  {
    Header: 'Connected',
    accessor: 'connected',
    ellipsis: true,
    align: 'right',
    minWidth: 80, 
    width: 80, 
    maxWidth: 200,
  },
];

const geo = [
  'AR', 'BG', 'CK', 'TR', 'MX', 'RO', 'PT', 'ID', 'GN'
];

const tableData = [];

for (let i = 0; i < 9; i++) {
  tableData.push({
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
    subRows: [
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

export { tableData };
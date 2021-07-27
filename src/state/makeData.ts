import moment from 'moment';

export const geo: string[] = [
  'AR', 'BG', 'CK', 'TR', 'MX', 'RO', 'PT', 'ID', 'GN'
];

export interface TableData {
  key: number;
  date: string;
  total: number;
  valid: number;
  validP: string;
  unproc: number;
  appHour: number;
  unprocP: string;
  proc: number;
  drtApp: string;
  clnApp: string;
  workApp: string;
  planAvgCheck: string;
  ups: number;
  upsP: string;
  cross: number;
  crossP: string;
  rej: number;
  rejP: string;
  decl: number;
  declP: string;
  declDbl: number;
  declDblP: string;
  numOfConnected: number;
  connected: string;
  children?: TableData[];
}

export const columns = [
{
  title: 'Date',
  dataIndex: 'date',
  defaultSortOrder: 'descend',
  sorter: (a: any, b: any) => a.date - b.date,
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

const tableData: TableData[] = [];

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

export { tableData };

export const offers: string[] = [
  'BG 10Bar Watch',
  'BG CBDol',
  'BG Bracelet Starry Sky',
  'BG Combidress',
  'RO Starryy Sky Watch',
  'RO XTactical Watch',
  'BG 10Bard Watch',
  'BG CBDolf',
  'BG Braceletr Starry Sky',
  'BG Combidressg',
  'RO Starry Sky Watch',
  'RO XTacticall Watch',
  'BG 10Barv Watch',
  'BG CBDol4',
  'BG Bracelett Starry Sky',
  'BG Combidresse',
  'RO Starryd Sky Watch',
  'RO XTacticaly Watch',
  'BG 10Bars Watch',
  'BG CBDol7',
  'BG Braceleto Starry Sky',
  'BG Combidressa',
  'RO Starryd Sky Watch',
  'RO XTacticalz Watch',
  'BG 10Bar5 Watch',
  'BG CBDolh',
  'BG Braceletdf Starry Sky',
  'BG Combidresss',
  'RO Starrya Sky Watch',
  'RO XTacticalx Watch',
  'BG 10Barz Watch',
  'BG CBDolk',
  'BG Braceletf Starry Sky',
  'BG Combidressm',
  'RO Starryl Sky Watch',
  'RO XTacticalp Watch',
];
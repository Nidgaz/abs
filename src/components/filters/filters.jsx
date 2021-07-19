import React, { useState, useEffect } from 'react';
import { Form, Row, Col, Input, Button, DatePicker, Select, Modal, Table, Divider } from 'antd';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import moment from 'moment';
import './styles.css';
import {debounce} from 'lodash';

const { Option } = Select;

const offers = [
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

export const Filters = ({onLoad}) => {
  const [expand, setExpand] = useState(false);
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    onLoad(true);
    setTimeout(() => {
      onLoad(false);
    }, 1500);
  };

  return (
    <Form
      form={form}
      name="advanced_search"
      className="ant-advanced-search-form"
      onFinish={onFinish}
      layout="vertical"
    >
      <Row gutter={24}>
        <Row1 />
        {expand && <Row2/>}
      </Row>
      <Row>
        <Col span={24} style={{ textAlign: 'right' }}>
          <Button type="primary" htmlType="submit">
            Execute  query
          </Button>
          <Button
            style={{ margin: '0 8px' }}
            onClick={() => {
              form.resetFields();
            }}
          >
            Reset view settings
          </Button>
          <a
            style={{ fontSize: 12 }}
            onClick={() => {
              setExpand(!expand);
            }}
          >
            {expand ? <UpOutlined /> : <DownOutlined />} Collapse
          </a>
        </Col>
      </Row>
    </Form>
  );
};


// row 1 

const Row1 = () => {
  const [loadOffer, onLoadOffer] = useState(true);

  useEffect(() =>{
    setTimeout(() => {
      onLoadOffer(false);
    }, 1000)
  }, [])

  return ([
        <Col span={4} >
            <Form.Item
              name={`date`}
              label={`Date:`}
            >
              <DateFilter/>
            </Form.Item>
        </Col>,
        <Col span={4} >
            <Form.Item
              name={`geo`}
              label={`Geo:`}
            >
              <Geo />
            </Form.Item>
        </Col>,
        <Col span={4} >
            <Form.Item
              name={`offer`}
              label={`Offer:`}
            >
             <Offers />
            </Form.Item>
        </Col>,
        <Col span={4} >
            <Form.Item
              name={`productSubType`}
              label={`Product sub type:`}
            >
              <Select defaultValue="N/A">
                <Option value="jack">N/A</Option>
                <Option value="jack">Physics</Option>
                <Option value="lucy">Internal</Option>
              </Select>
            </Form.Item>
        </Col>,
        <Col span={4} >
            <Form.Item
              name={`currencyType`}
              label={`Currency type:`}
            >
              <Select defaultValue="Local Currency" allowClear>
                <Option value="jack">Local Currency</Option>
                <Option value="lucy">Euro</Option>
              </Select>
            </Form.Item>
        </Col>,
        <Col span={4} >
            <Form.Item
              name={`leadType`}
              label={`Lead type:`}
            >
              <Select defaultValue="ALL" allowClear>
                <Option value="jack">ALL</Option>
                <Option value="lucy">Common</Option>
              </Select>
            </Form.Item>
        </Col>
])
};

// row2 

const Row2 = () => ([
  <Col span={4} >
      <Form.Item
        name={`office`}
        label={`Office:`}
      >
        <Select defaultValue="N/A" allowClear>
          <Option value="jack">Bogota</Option>
          <Option value="lucy">Moscow</Option>
        </Select>
      </Form.Item>
  </Col>,
  <Col span={4} >
      <Form.Item
        name={`fficeType`}
        label={`Office type:`}
      >
        <Select defaultValue="By Lead" allowClear>
          <Option value="jack">By Lead</Option>
          <Option value="lucy">By Operator</Option>
        </Select>
      </Form.Item>
  </Col>,
  <Col span={4} >
      <Form.Item
        name={`webmaster`}
        label={`Webmaster:`}
      >
        <Select
          mode="multiple"
          allowClear
          placeholder="Please select"
          maxTagCount="responsive"
        >
          {offers.map( el => <Option key={el}>{el}</Option>)}
        </Select>
      </Form.Item>
  </Col>,
  <Col span={4} >
      <Form.Item
        name={`webmasterType`}
        label={`Webmaster type:`}
      >
        <Select defaultValue="All">
          <Option value="jack">Buyer</Option>
          <Option value="jack">External</Option>
          <Option value="jack">All</Option>
        </Select>
      </Form.Item>
  </Col>,
  <Col span={4} >
      <Form.Item
        name={`user`}
        label={`Mon, Sup, S.OP:`}
      >
        <Input placeholder='N/A'/>
      </Form.Item>
  </Col>,
  <Col span={4} >
      <Form.Item
        name={`TimeZone`}
        label={`Time zone:`}
      >
        <Select defaultValue="Moscow time" allowClear>
          <Option value="jack">Moscow time</Option>
          <Option value="lucy">Geo time</Option>
        </Select>
      </Form.Item>
  </Col>
]);


// Date Pick
const { RangePicker } = DatePicker;

function onChange(dates, dateStrings) {
  console.log('From: ', dates[0], ', to: ', dates[1]);
  console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
}

const dateFormat = 'DD.MM.YYYY';


const DateFilter = () => (
    <RangePicker
      defaultValue={[moment('12.07.2021', dateFormat), moment('12.07.2021', dateFormat)]}
      format={dateFormat}
    />
);


const geo = [
  'AR', 'BG', 'CK', 'TR', 'MX', 'RO', 'PT', 'ID', 'GN'
];

const Geo = () => {
  const [defaultValue, setDefaultValue] = useState([]);

  const onSelect = (value) => {
    if (value.includes('all')) {
      setDefaultValue(geo);
    } else {
      setDefaultValue(value);
    }
  }

  return (<Select
      mode="multiple"
      allowClear
      placeholder="Please select"
      maxTagCount="responsive"
      onChange={onSelect}
      listHeight={500}
      defaultActiveFirstOption={false}
      value={defaultValue}
    >
      <Option value="all" label="All" className="select_all">
          All
      </Option>
      {geo.map( el => <Option key={el}>{el}</Option>)}
    </Select>
  )
}


const Offers = ({loadOffer}) => {
  const [visible, setVisible] = useState(false);
  const [values, setValues] = useState([]);

  const onSelect = value => {
    setValues(value);
  }

  const onOpen = value => {
    setVisible(true);
  }

  const onClear = () => {
    setValues([]);
  }

  return (
    <Select
      mode="multiple"
      allowClear
      placeholder="Please select"
      maxTagCount="responsive"
      listHeight={0}
      loading={loadOffer}
      onDropdownVisibleChange={onOpen}
      value={values.map(el => el.name)}
      onClear={onClear}
      dropdownStyle={{display: 'none'}}
      dropdownRender={child => {
        return(
          <SelectModal visible={visible} setVisible={setVisible} onSelect={onSelect} values={values}/>
        )
      }}
    >
    {offers.map( el => <Option key={el}>{el}</Option>)}
  </Select>
  )
}

const { Search } = Input;

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    align: 'left',
  },
]

const data = offers.map((el, index) => (
    {
      key: index,
      name: el,
    }
  )
);

const replaceWord = (str,index,tag) => {
  return str.substr(0,index)+str.substr(index).replace(/\w+/,"<"+tag+">$&</"+tag+">");
}

const SelectModal = ({visible, setVisible, onSelect, values}) => {

  const [tableData, filterTableData] = useState(data);
  const [search, setSearch] = useState(false);
  const [selectedRowKeys, setSelectedRowKeys] = useState(values.map(el => el.key));

  useEffect(() => {
    setSelectedRowKeys(values.map(el => el.key));
  },[values]);

  const [searchStatus, setSearchStatus] = useState(false);
  const rowSelection = {
    selectedRowKeys,
    onSelectAll: (selected, selectedRows) => {
      setSelectedRowKeys(selected ? searchStatus ? selectedRows.map(el => el.key) : data.map(el => el.key) : []);
    },
    onSelect: (record, selected, selectedRows) => {
      setSelectedRowKeys(selectedRows.map(el => el.key));
    }
  };

  const onSelectData = () => {
    onSelect(selectedRowKeys.map(key => data.find(el => el.key === key)));
    setVisible(false);
  }

  const onSearch = debounce(e => {
    searchTableItem(e.target.value);
  }, 500)

  const searchTableItem = value => {
    let _d = [];
    if (value) {
      setSearchStatus(true);
      _d = data.filter( el => el.name.toLowerCase().indexOf(value) !== -1);
    } else {
      setSearchStatus(false);
      _d = data;
    }

    filterTableData(_d);
  }

  return(
    <Modal
          title="Offer"
          visible={visible}
          onOk={() => onSelectData()}
          onCancel={() => setVisible(false)}
        >
          <Search
            placeholder="Text to search" 
            loading={search}
            onChange={onSearch}
          />
          <Divider />
          <Table
            rowSelection={rowSelection}
            columns={columns}
            dataSource={tableData}
            bordered size="small" 
            tableLayout='auto'
          />
          
        </Modal>
  )
}
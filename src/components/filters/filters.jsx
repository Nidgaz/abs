import React, { useState, useEffect } from 'react';
import { Form, Row, Col, Input, Button, DatePicker, Select, Modal, Table, Divider, Dropdown, Menu, Checkbox, Badge } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import moment from 'moment';
import './styles.css';
import { debounce } from 'lodash';

const { Option } = Select;

// Date Pick
const { RangePicker } = DatePicker;

const dateFormat = 'DD.MM.YYYY';

const DateFilter = () => (
    <RangePicker
      defaultValue={[moment('12.07.2021', dateFormat), moment('12.07.2021', dateFormat)]}
      format={dateFormat}
    />
);

// filter fields
const fields = [
  {
    name: 'date',
    label: 'Date',
    show: true,
    component: () => <DateFilter />,
  },
  {
    name: 'geo',
    label: 'Geo',
    show: true,
    component: props => (<Geo {...props}/>),
  },
  {
    name: 'offer',
    label: 'Offer',
    show: true,
    component: () => <Offers />,
  },
  {
    name: 'productSubType',
    label: 'Product sub type',
    show: true,
    component: () => (
      <Select defaultValue="N/A">
        <Option value="jack">N/A</Option>
        <Option value="jack">Physics</Option>
        <Option value="lucy">Internal</Option>
      </Select>
    ),
  },
  {
    name: 'currencyType',
    label: 'Currency type',
    show: true,
    component: () => (
      <Select defaultValue="Local Currency" allowClear>
                <Option value="jack">Local Currency</Option>
                <Option value="lucy">Euro</Option>
              </Select>
    ),
  },
  {
    name: 'leadType',
    label: 'Lead type',
    show: false,
    component: () => (
      <Select defaultValue="ALL" allowClear>
        <Option value="jack">ALL</Option>
        <Option value="lucy">Common</Option>
      </Select>
    ),
  },
  {
    name: 'office',
    label: 'Office',
    show: false,
    component: () => (
      <Select defaultValue="N/A" allowClear>
          <Option value="jack">Bogota</Option>
          <Option value="lucy">Moscow</Option>
        </Select>
    ),
  },
  {
    name: 'officeType',
    label: 'Office type',
    show: false,
    component: () => (
      <Select defaultValue="By Lead" allowClear>
          <Option value="jack">By Lead</Option>
          <Option value="lucy">By Operator</Option>
        </Select>
    ),
  },
  {
    name: 'webmaster',
    label: 'Webmaster',
    show: false,
    component: () => (
      <Select defaultValue="All">
        <Option value="jack">Buyer</Option>
        <Option value="jack">External</Option>
        <Option value="jack">All</Option>
    </Select>
    ),
  },
  
  {
    name: 'TimeZone',
    label: 'Time zone',
    show: false,
    component: () => (
      <Select defaultValue="Moscow time" allowClear>
          <Option value="jack">Moscow time</Option>
          <Option value="lucy">Geo time</Option>
        </Select>
    ),
  },
]

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

const FieldsSelect = ({filterFields, toggleFields}) => {
  const onChange = (e, indx) => {
    toggleFields(e.target.checked, indx);
  }

  return(
    <Menu>
      {filterFields.map( (el, indx) => (
        <Menu.Item>
        <Checkbox onChange={e => onChange(e, indx)} checked={el.show}>{el.label}</Checkbox>
      </Menu.Item>
      ))}
    </Menu>
)};

export const Filters = ({onLoad, setFilters}) => {
  const [form] = Form.useForm();
  const [filterState, setFilterState] = useState({});
  const [filterFields, changeFields] = useState(fields);


  const toggleFields = (status, indx) => {
    console.log(status, indx);
    changeFields(filterFields.map((el, i) => {
      if (i === indx) el.show = status;
      return el;
    }))
  }

  const onFinish = () => {
    onLoad(true);
    setTimeout(() => {
      setFilters(filterState);
      onLoad(false);
    }, 1000);
  };

  return (
    <Form
      form={form}
      name="advanced_search"
      className="ant-advanced-search-form"
      onFinish={onFinish}
      layout="vertical"
    >
      <Row gutter={16}>
        {filterFields.map(el => (
          el.show && 
          <Col span={5} >
            <Form.Item
              name={el.name}
              label={el.label}
            >
              {el.component({setFilterState})}
            </Form.Item>
        </Col>
        ))}
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
          <Dropdown overlay={() => <FieldsSelect toggleFields={toggleFields} filterFields={filterFields}/>} arrow={true}>
          <Badge count={filterFields.filter(el=>!el.show).length}>
            <Button>
              Show fields <DownOutlined/>
            </Button>
            </Badge>
          </Dropdown>
        </Col>
      </Row>
    </Form>
  );
};


const geo = [
  'AR', 'BG', 'CK', 'TR', 'MX', 'RO', 'PT', 'ID', 'GN'
];

const Geo = ({setFilterState}) => {
  const [defaultValue, setDefaultValue] = useState([]);

  const onSelect = (value) => {
    const _value = value.includes('all') ? geo : value;

    setDefaultValue(_value);
    setFilterState({geo: _value})
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
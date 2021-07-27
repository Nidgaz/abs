import { useState, useEffect } from 'react';
import * as _ from 'lodash';
import { Form, Row, Col, Input, Button, Select, Modal, Table, Divider, Dropdown, Menu, Checkbox, Badge } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import { geo, offers } from '../../state/makeData';
import { DateFilter } from '../dateFilter';

import './styles.css';

const { Option }: any = Select;

// выбор фильтров
type Field = {
  name: string;
  label: string;
  show: boolean;
  component: (...props: any) => JSX.Element;
}

const fields: Field[] = [
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
    component: props => <Geo {...props}/>,
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

const FieldsSelect = ({filterFields, toggleFields}: {filterFields: Field[], toggleFields: (status: boolean, indx: number) => void}) => {
  return(
  
    <Menu>
      {filterFields.map( (el, indx) => (
        <Menu.Item>
        <Checkbox onChange={e => toggleFields(e.target.checked, indx)} checked={el.show}>{el.label}</Checkbox>
      </Menu.Item>
      ))}
    </Menu>
)};

export const Filters = ({onLoad, setFilters}: {onLoad: any, setFilters: any}) => {
  const [form] = Form.useForm();
  const [filterState, setFilterState] = useState({});
  const [filterFields, changeFields] = useState(fields);


  const toggleFields = (status: boolean, indx: number) => {
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

// выбор гео
const Geo = ({setFilterState} : {setFilterState: any}) => {
  const [defaultValue, setDefaultValue] = useState([]);

  const onSelect = (value: string[] ) => {
    const _value: any = value.includes('all') ? geo : value;

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

// выбор оффера
const Offers = (): JSX.Element => {
  const [visible, setVisible] = useState(false);
  const [values, setValues] = useState([]);

  const onSelect = (value: []) => {
    setValues(value);
  }

  const onOpen = () => {
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
      onDropdownVisibleChange={onOpen}
      value={values.map((el:OfferData) => el.name)}
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

interface IOfferColumns {
  title: string;
  dataIndex: string;
}

const columns: Array<IOfferColumns> = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
]

type OfferData = {
  key: number;
  name: string;
}

const data: OfferData[] = offers.map((el, index) => (
    {
      key: index,
      name: el,
    }
  )
);

const SelectModal = ({visible, setVisible, onSelect, values}: {visible: boolean, setVisible: any, onSelect: any, values: OfferData[]}): JSX.Element => {

  const [tableData, filterTableData] = useState(data);
  const [search, setSearch] = useState(false);
  const [selectedRowKeys, setSelectedRowKeys] = useState(values.map(el => el.key));

  useEffect(() => {
    setSelectedRowKeys(values.map(el => el.key));
  },[values]);

  const [searchStatus, setSearchStatus] = useState(false);
  const rowSelection = {
    selectedRowKeys,
    onSelectAll: (selected: boolean, selectedRows: OfferData[]) => {
      setSelectedRowKeys(selected ? searchStatus ? selectedRows.map(el => el.key) : data.map(el => el.key) : []);
    },
    onSelect: (record: any, selected: boolean, selectedRows: OfferData[]) => {
      setSelectedRowKeys(selectedRows.map(el => el.key));
    }
  };

  const onSelectData = () => {
    onSelect(selectedRowKeys.map(key => data.find(el => el.key === key)));
    setVisible(false);
  }

  const onSearch = _.debounce(e => {
    searchTableItem(e.target.value);
  }, 500)

  const searchTableItem = (value: string) => {
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


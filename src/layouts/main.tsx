import React, { useState, FC } from 'react';
import { Layout, Typography } from 'antd';
import 'antd/dist/antd.css';
import { Filters } from '../components/filters';
import { Tables } from '../components/tables';

const { Header, Content, Footer } = Layout;
const { Title } = Typography;


export const MainLayout: FC = () => {
  const [loadStatus, onLoad] = useState(false);
  const [filters, setFilters] = useState({});

  return (
    <Layout>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo" />
    </Header>
    <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
      <div className="site-layout-background" style={{ padding: 24, minHeight: 380, backgroundColor: '#fff'}}>
        <Title level={4}>Geo Statistics</Title>
        <Filters onLoad={onLoad} setFilters={setFilters}/>
        <br />
        <Tables loadStatus={loadStatus} filters={filters}/>
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Absolut</Footer>
  </Layout>
  );
}

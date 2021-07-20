import { useState } from 'react';
import { Layout, Typography } from 'antd';
import 'antd/dist/antd.css';
import { Filters } from './components/filters';
import { Tables } from './components/tables';
// import { Tables as Tables2 } from './components/tables2';
import './App.css';

const { Header, Content, Footer } = Layout;
const { Title } = Typography;


function App() {
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
        {/* <Tables2 /> */}
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Absolut</Footer>
  </Layout>
  );
}

export default App;

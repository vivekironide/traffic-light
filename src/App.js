
import './App.css';
import { Layout, Menu, theme }                     from 'antd';
import { Footer }                                              from "antd/es/layout/layout";
import React                                                   from 'react';
import { ClockCircleOutlined, PieChartOutlined }   from '@ant-design/icons';
import { Route, Routes, useNavigate } from "react-router-dom";
import TrafficLight                                from "./components/traffic-light/traffic-light";

const { Header, Sider } = Layout;

function App() {
  const { token: { colorBgContainer }, } = theme.useToken()
  const navigate = useNavigate();
  const menus = [
    {
      key: '/',
      label: 'Tutorial',
      icon: <PieChartOutlined />,
      children: [
        {
          key: 'traffic-light',
          label: 'Traffic Light',
          icon: <ClockCircleOutlined />,
        },
      ],
    }
  ]
  
  const handleMenuClick = ({ key }) => {
    if (key) {
      navigate(key);
    }
  };
  
  return (
    <Layout style={{ minHeight: '100vh', }}>
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}  />
      </Header>
      <Layout>
        <Sider width={200} style={{ background: colorBgContainer }}>
          <Menu
            mode="inline"
            defaultOpenKeys={['/']}
            style={{ height: '100%', borderRight: 0 }}
            items={menus}
            theme={"dark"}
            onClick={handleMenuClick}
          />
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Routes>
            <Route path={'/traffic-light'} element={<TrafficLight />}></Route>
          </Routes>
          
          <Footer
            style={{
              textAlign: 'center',
            }}
          >
          Ant Design ©2023 Created by Ant UED
        </Footer>
        </Layout>
      </Layout>
    </Layout>
    
  );
}

export default App;

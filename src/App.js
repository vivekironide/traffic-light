
import './App.css';
import { Button, Col, ConfigProvider, Dropdown, Layout, Menu, Row, theme, Typography } from 'antd';
import { Footer }                                                                      from "antd/es/layout/layout";
import React                                                                           from 'react';
import { ClockCircleOutlined, PieChartOutlined, LoginOutlined }                        from '@ant-design/icons';
import { useSelector }                                                                 from "react-redux";
import { Route, Routes, useNavigate }                                                  from "react-router-dom";
import Form                                                                            from "./components/form/form";
import Login                                                                           from "./components/login/login";
import StarwarsDetail                                                                  from "./components/starwars/starwars-detail";
import StarwarsList                                                                    from "./components/starwars/starwars-list";
import TrafficLight                                                                    from "./components/traffic-light/traffic-light";

const { Header, Sider } = Layout;
const { darkAlgorithm } = theme;

function App() {
  const navigate = useNavigate();
  const { title, favorites } = useSelector((state) => state.starwars)
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
        {
          key: 'login',
          label: 'Login',
          icon: <LoginOutlined />,
        },
        {
          key: 'starwars',
          label: 'Starwars',
          icon: <LoginOutlined />,
        },
        {
          key: 'form',
          label: 'Form',
          icon: <LoginOutlined />,
        },
      ],
    }
  ]
  const configTheme = {
    token: {
      colorPrimary: '#344250',
      colorBgContainer: '#111'
    },
    components: {
      Button: {
        borderRadius: 3,
        paddingContentHorizontal: 30
      },
      Menu: {
        colorItemBg: '#111',
        colorItemBgHover: '#000',
        colorItemBgSelected: '#000',
        colorSubItemBg: '#111',
      },
    },
    algorithm: darkAlgorithm,
  }
  
  const items = favorites.length > 0 ? favorites : [{ key: '1', label: 'No Favorites'}];
  
  const handleMenuClick = ({ key }) => {
    if (key) {
      navigate(key);
    }
  };
  
  return (
    <ConfigProvider theme={configTheme}>
      <Layout style={{ minHeight: '100vh', }}>
        <Header className={"header"} style={{height: 'inherit'}}>
          <Row justify={"space-between"}>
            <Col>
            
            </Col>
            
            <Col>
              <Typography.Title level={2}>{title}</Typography.Title>
            </Col>
            
            <Col style={{marginTop: '1rem'}}>
              <Dropdown menu={{ items }} placement="bottomLeft">
                <Button type="primary" htmlType="submit">Favorites ({favorites.length})</Button>
              </Dropdown>
              
            </Col>
          </Row>
        </Header>
        <Layout>
          <Sider width={200}>
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
              <Route path={'/login'} element={<Login />}></Route>
              <Route path={'/starwars'} element={<StarwarsList />}></Route>
              <Route path={'/starwars/:id'} element={<StarwarsDetail />}></Route>
              <Route path={'/form'} element={<Form />}></Route>
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
    </ConfigProvider>
    
  );
}

export default App;

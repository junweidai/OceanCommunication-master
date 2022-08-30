import React, { useState } from 'react';
import { withRouter } from 'react-router-dom'
import { Layout, Menu, Breadcrumb, Button, BackTop } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import logo from './logo.png';
import logo1 from './logo1.png';
import logo2 from './logo2.png';
import logo3 from './logo3.png';
import logo4 from './logo4.png';
import {adminRoutes} from '../../routes'
import { withConfigConsumer } from 'antd/lib/config-provider/context';
import Title from 'antd/lib/skeleton/Title';
const { Header, Content, Sider } = Layout;

// 过滤
const routes = adminRoutes.filter(route => route.isShow)


function index(props) {
  return (
    <Layout>
          <Header className="header" style={{ backgroundColor: "#428bca", marginLeft: 0, height: "50px", width: "1800px" }}>
      <div className="logo">
                  <img src={logo} style={{ height: "50px", width: "300px",marginTop: -15, marginLeft: -5 }}></img>
      </div>
    </Header>
          <Layout>
              <Sider width={240} className="site-layout-background" style={{ marginTop:0 }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
                      style={{
                          height: '100%', background:"white",
                 borderRight: 0
           }}>
              {routes.map(route => {
                  return (
                      <>
                    <Menu.Item 
                          key={route.path}
                          onClick={p => props.history.push(p.key)}
                          >                          
                              { route.logo}
                          </Menu.Item>
                       </>
                  )
                })}
          </Menu>
      </Sider>
      <Layout
        style={{
          padding: '0 24px 24px',
        }}
      >
        <Breadcrumb
          style={{
            margin: '15px',
          }}
        >
          {/* <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item> */}
        </Breadcrumb>
        <Content
          className="site-layout-background"
          style={{
            padding: 0,
            margin: 0,
            minHeight: 280,
            background: "white"
          }}
        >
          {props.children}
        </Content>
      </Layout>
    </Layout>
  </Layout>
  )
}

export default withRouter(index)
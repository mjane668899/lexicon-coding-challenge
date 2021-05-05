import React from "react";
import "antd/dist/antd.css";
import "./page.css";
//Ant Design
import { Layout, Menu } from "antd";
import { Typography } from "antd";
const { Title } = Typography;
const { Header, Content, Footer } = Layout;

// This is a Page
export default function Page({ children, ...restProps }) {
  return (
    <Layout className="Layout" {...restProps}>
      {children}
    </Layout>
  );
}

// This is a Header
Page.Header = function PageHeader({ children, ...restProps }) {
  return <Header {...restProps}>{children}</Header>;
};

// This is a Header Menu
Page.Menu = function PageMenu({ children, ...restProps }) {
  return (
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={["2"]}
      {...restProps}
    >
      {children}
    </Menu>
  );
};

// This is a Menu Item
Page.MenuItem = function PageMenuItem({ children, ...restProps }) {
  return (
    <Menu.Item key="1" {...restProps}>
      {children}
    </Menu.Item>
  );
};

// This is a Footer
Page.Footer = function PageFooter({ children, ...restProps }) {
  return (
    <Footer style={{ textAlign: "center" }} {...restProps}>
      {children}
    </Footer>
  );
};

// This is a contant container
Page.Content = function PageContent({ children, ...restProps }) {
  return (
    <Content className="container-container" {...restProps}>
      {children}
    </Content>
  );
};
// This is a basic DIV
Page.Div = function PageDiv({ children, ...restProps }) {
  return <div {...restProps}>{children}</div>;
};

// This is a customise Text
Page.Title = function PageTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

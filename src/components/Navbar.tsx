import React from 'react';
import {Layout, Menu, Row} from "antd";
import {useNavigate} from "react-router-dom";
import {RouteNames} from "../routes";

const Navbar = () => {
  const navigate = useNavigate();
  const auth = false;

  return (
    <Layout.Header>
      <Row justify='end'>
        {auth
          ?
          <>
            <div>Black Mathers</div>
            <Menu theme='dark' mode='horizontal' selectable={false}>
              <Menu.Item onClick={() => navigate(RouteNames.LOGIN)} key={1}>Выйти</Menu.Item>
            </Menu>
          </>
          :
          <Menu theme='dark' mode='horizontal' selectable={false}>
            <Menu.Item onClick={() => navigate(RouteNames.EVENT)} key={1}>Логин</Menu.Item>
          </Menu>
        }
      </Row>
    </Layout.Header>
  );
};

export default Navbar;
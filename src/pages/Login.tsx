import React from 'react';
import {Layout, Row} from "antd";
import '../index.css';
import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <Layout>
      <Row justify='center' align='middle' className='h100'>
        <LoginForm/>
      </Row>
    </Layout>
  );
};

export default Login;
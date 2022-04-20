import React, {useState} from 'react';
import {Button, Form, Input} from "antd";
import {rules} from "../utils/rules";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {login} = useActions();
  const {error, isLoading} = useTypedSelector(state => state.auth);

  return (
    <Form onFinish={() => login(username, password)}>
      {error && <div style={{color: 'red'}}>{error}</div>}
      <Form.Item
        label='Имя пользователя'
        name='username'
        rules={[rules.required('Пожалуйста, введите имя пользователя!')]}
      >
        <Input value={username} onChange={e => setUsername(e.target.value)}/>
      </Form.Item>
      <Form.Item
        label='Пароль'
        name='password'
        rules={[rules.required('Пожалуйста, введите пароль!')]}
      >
        <Input value={password} onChange={e => setPassword(e.target.value)}/>
      </Form.Item>
      <Form.Item>
        <Button type='primary' htmlType='submit' loading={isLoading}>
          Войти
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
import React, {useEffect} from 'react';
import {Layout} from "antd";
import {useActions} from "./hooks/useActions";
import {IUser} from "./types/IUser";
import {AppRouter, Navbar} from "./components";

const App = () => {
  const {setUser, setIsAuth} = useActions();

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setUser({username: localStorage.getItem('username' || '')} as IUser);
      setIsAuth(true);
    }
  }, []);

  return (
    <Layout>
      <Navbar/>
      <Layout.Content>
        <AppRouter/>
      </Layout.Content>
    </Layout>
  );
}

export default App;

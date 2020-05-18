/* eslint-disable require-jsdoc */
import React from 'react';
import 'antd/dist/antd.css';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Navbar from './component/Header/Navbar';
import Home from './Pages/Home/Home';
// import Upload from './Pages/Upload/Upload'
import Videos from './Pages/Videos/Videos';
import Login from './Pages/auth/Login';
import Signup from './Pages/auth/Signup';
import {Layout} from 'antd';
import Alerts from './component/Alerts';
import PrivateRoute from './utils/PrivateRoute';
import CategoryUpload from './Pages/Upload/CategoryUpload';
import Productup from './Pages/Upload/Productup';
import Footers from './Pages/Footer/Footers';
const {Content} = Layout;


function App() {
  return (

    <div>
      <Layout>
        <Navbar></Navbar>
      </Layout>
      <Alerts key="1"/>
      <Content>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/categoryupload' component={CategoryUpload} />
          <Route exact path='/productupload' component={Productup} />
          <PrivateRoute exact path='/Videos' component={Videos} />
          <Route exact path='/Login' component={Login} />
          <Route exact path='/signup' component={Signup} />
        </Switch>
      </Content>
      <Footers />
    </div>


  );
}

export default App;

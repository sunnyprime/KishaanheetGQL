/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
import React, {Fragment} from 'react';
import {Layout, Menu} from 'antd';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {signOut} from '../../redux/auth/auth.action';
import './Navbar.scss';
import Searchs from '../Other/Searchs';
import {ShoppingCartOutlined} from '@ant-design/icons';

const {Header} = Layout;

const logo = 'https://raw.githubusercontent.com/sunnyprime/LOGO/master/kishaanHeet/kissanheetT.png';

function Navbar(props) {
  const {auth} = props;
  console.log(auth);

  return (
    <Fragment >
      <Header className="container">
        <div className="logo"><img src={logo} height='56px' alt="logo"/></div>
        <div className="search">
          <Searchs />
        </div>
        <div></div>

        {auth.isEmpty ? <React.Fragment>
          <Menu theme="dark" mode="horizontal">
            <Menu.Item><NavLink to="/login">Login</NavLink></Menu.Item>
            <Menu.Item><NavLink to="/signup">Signup</NavLink></Menu.Item>
          </Menu></React.Fragment>: (
         <Menu theme="dark" mode="horizontal">
           <Menu.Item><NavLink to="/" onClick={props.signOut}>Logout
           </NavLink></Menu.Item>
           <Menu.Item><NavLink to="/" onClick={props.signOut}>
             <ShoppingCartOutlined /></NavLink></Menu.Item>
         </Menu>

        )
        }


      </Header>
    </Fragment>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

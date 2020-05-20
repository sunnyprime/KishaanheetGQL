import React, {Component} from 'react';
import {Menu} from 'antd';
import {MailOutlined, AppstoreOutlined, SettingOutlined} from '@ant-design/icons';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Spin } from 'antd';
import {NavLink} from 'react-router-dom';
const {SubMenu} = Menu;

 class Products extends Component {
    state = {
        current: 'mail',
      };
    
      handleClick = e => {
        console.log('click ', e);
        this.setState({
          current: e.key,
        });
      };
  render() {
    const {category} =this.props
    if(category)
    return (
      <div>
         <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
        {category.map((item,index)=>{
            return(<Menu.Item key={index}><NavLink to={`product/${item.Name}`}>
            {item.Name}</NavLink>
          </Menu.Item>)
        })}
        
      </Menu>
      </div>
    );
    else{
        return(<><Spin tip="Loading..." /></>)
    }
  }
}

const mapStateToProps = (state) => {
    return {
    category: state.firestore.ordered.category,
    }
  }
  export default compose(
    connect(mapStateToProps),
    firestoreConnect([{
      collection: 'category'
    }])
  )(Products)
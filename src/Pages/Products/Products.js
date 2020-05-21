/* eslint-disable no-invalid-this */
import React, {Component} from 'react';
import {Menu} from 'antd';
// import {MailOutlined, AppstoreOutlined, SettingOutlined} from '@ant-design/icons';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import {Spin} from 'antd';
import {NavLink, Link} from 'react-router-dom';
import ProductsDetail from './ProductsDetail';
import {Route} from 'react-router-dom';
// const {SubMenu} = Menu;

class Products extends Component {
    state = {
      current: 'mail',
    };

      handleClick = (e) => {
        console.log('click ', e);
        this.setState({
          current: e.key,
        });
      };
      render() {
        const {category} =this.props;
        if (category) {
          return (
            <div>
              <Menu onClick={this.handleClick} selectedKeys={[this.state.current]}
                mode="horizontal">
                <Menu.Item><Link exact to="/products/all">
            All</Link>
                </Menu.Item>
                {category.map((item, index)=>{
                  return (<Menu.Item key={index}><NavLink to={`/products/${item.Name}`}>
                    {item.Name}</NavLink>
                  </Menu.Item>);
                })}

              </Menu>
              <Route path='/products/:id' component={ProductsDetail} />

            </div>
          );
        } else {
          return (<><Spin tip="Loading..." /></>);
        }
      }
}

const mapStateToProps = (state) => {
  return {
    category: state.firestore.ordered.category,
  };
};
export default compose(
    connect(mapStateToProps),
    firestoreConnect([{
      collection: 'category',
    }]),
)(Products)
;

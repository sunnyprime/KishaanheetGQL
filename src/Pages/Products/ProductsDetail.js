/* eslint-disable require-jsdoc */
import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import {Spin} from 'antd';
import {Row, Col} from 'antd';
import ProductMenu from './ProductMenu';
import ProductCard from '../../component/Product/ProductCard';
import {bycategory} from './ProductUtil';
import {Link} from 'react-router-dom';

function ProductsDetail(props) {
  const [filteredctg, addcategory] = useState();
  const {id} = useParams();
  const {category}=props;

  useEffect(() => {
    addcategory(category);
  }, [category, id, []]);
  useEffect(()=>{
    if (filteredctg) {
      const byctg =bycategory(category, id);
      addcategory(byctg);
    }
  }, [id, category, []]);


  if (filteredctg) {
    return (
      <div>
        <Row gutter={[12, 24]}>
          <Col span={6} lg={6} md={8} sm={12} xs={24}
          >
            <ProductMenu />
          </Col>
          <Col span={18} lg={18} md={16} sm={12} xs={24}


          >
            <Row gutter={[12, 24]} justify="space-around" style={{marginLeft: '30px'}}>

              {filteredctg.map((item, index)=>{
                return (<Col style={{margin: '0px 20px'}} key={index} span={6} lg={6} md={8} sm={12} xs={24}
                >
                  <Link to={`/productdetails/${item.id}`}>
                    <ProductCard image={item.url} name={item.Name} price={item.price}
                      discount={item.discount} offer={item.offer}/>
                  </Link>
                </Col>);
              })}

            </Row>
          </Col>
        </Row>
      </div>
    );
  } else {
    return (<div style={{textAlign: 'center'}}><Spin tip="Loading..." /></div>);
  }
}

const mapStateToProps = (state) => {
  return {
    category: state.firestore.ordered.product,
  };
};
export default compose(
    connect(mapStateToProps),
    firestoreConnect([{
      collection: 'product',
    }]),
)(ProductsDetail);

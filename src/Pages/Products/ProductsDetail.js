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

// const {id} =useParams();
function ProductsDetail(props) {
  const [filteredctg, addcategory] = useState();
  const {id} = useParams();
  const {category}=props;
  // console.log(':::::::');
  // console.log(id);

  useEffect(() => {
    addcategory(category);
  }, [category]);
  useEffect(()=>{
    if (filteredctg) {
      const byctg =bycategory(category, id);
      addcategory(byctg);
      // console.log(byctg);
    }
  }, [id]);

  console.log(filteredctg);


  // addcategory(category);

  if (filteredctg) {
    // console.log(category);

    return (
      <div>
        <Row>
          <Col span={6} lg={6} md={8} sm={12} xs={24}

          >
            <ProductMenu />
          </Col>
          <Col span={18} lg={18} md={16} sm={12} xs={24}

          >
            {/* <ProductMenu /> */}
            {/* <ProductMenu /> */}
            <Row justify="space-around">
              {/* <ProductMenu /> */}
              {filteredctg.map((item, index)=>{
                return (<Col key={index} span={4} lg={4} md={8} sm={12} xs={24}
                >
                  <ProductCard image={item.url} name={item.Name} price={item.price}
                    discount={item.discount} offer={item.offer}/>
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

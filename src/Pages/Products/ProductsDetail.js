/* eslint-disable require-jsdoc */
import React from 'react';
import {useParams} from 'react-router-dom';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import {Spin} from 'antd';
import {Card} from 'antd';
import {Row, Col} from 'antd';
const {Meta} = Card;
// const {id} =useParams();
function ProductsDetail(props) {
  // const {id} = useParams();
  const {category}=props;
  console.log('::::::');
  // console.log(category);

  console.log(props);
  console.log('00000');

  if (category) {
    return (
      <div>
        <Row justify="space-around">
          {category.map((item, index)=>{
            return (<Col key={index} span={4} lg={4} md={8} sm={12} xs={24}
              style={{marginBottom: '20px'}}><Card key={index}
                hoverable
                style={{width: 240}}
                cover={<img alt="example" src={item.url} />}
              >
                <Meta title={item.Name} description={`Rs: ${item.price}`} />
              </Card></Col>);
          })}
        </Row>
      </div>
    );
  } else {
    return (<div style={{textAlign: 'center'}}><Spin tip="Loading..." /></div>);
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const parmproduct = state.firestore.ordered.product;
  const allproduct =state.firestore.ordered.product;
  if (allproduct) {
    if (id!='all') {
      const parmproduct = allproduct.filter((item)=>{
        item.category = id;
      });
    };
  }
  return {
    // category: state.firestore.ordered.product,
    // parmproduct: parmproduct,
    category: parmproduct,
  };
};
export default compose(
    connect(mapStateToProps),
    firestoreConnect([{
      collection: 'product',
    }]),
)(ProductsDetail);

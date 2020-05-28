import React from 'react';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import Picture from '../../component/Detail/Picture';
import Detail from '../../component/Detail/Detail';
import {Row, Col} from 'antd';
import Deals from '../../component/Deals/Deals';
import {useParams} from 'react-router-dom';
// 4H1EdS37kYf4pG7RWvPf
function Details({category}) {
  if (category) {
    console.log(category);


    return (
      <div>

        {/* <Row gutter={{xs: [10, 10], sm: 10, md: 24, lg: [35, 20]}}> */}
        <Row gutter={[0, 24]} >
          <Col span={10} lg={10} md={24} sm={24} xs={24}>

            <Picture image={category.url} />

          </Col>
          <Col span={14} lg={14} md={24} sm={24} xs={24}>
            <Detail name={category.Name} category={category.category} price={category.price}
              discount={category.discount} />
          </Col>
        </Row>
        <Deals />
      </div>
    );
  } else {
    return (<>Loading...</>);
  }
}

const mapStateToProps = (state, ownProps) => {
  const ids = ownProps.match.params.id;
  const datas = state.firestore.ordered.product;
  let data = null;
  if (datas) {
    data = datas.filter((x)=>x.id === ids);
    data=data[0];
  }
  // const data = datas ? datas[id] :null;
  // console.log(datas);
  // console.log(state);


  return {
    // category: state.firestore.ordered.product,
    category: data,
  };
};


export default compose(
    connect(mapStateToProps),
    firestoreConnect([{
      collection: 'product',
    }]),
)(Details)
;

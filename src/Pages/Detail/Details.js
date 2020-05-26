import React from 'react';
import Picture from '../../component/Detail/Picture';
import Detail from '../../component/Detail/Detail';
import {Row, Col} from 'antd';
import Deals from '../../component/Deals/Deals';
// const style = {background: '#0092ff', padding: '8px 0'};

function Details() {
  return (
    <div>

      {/* <Row gutter={{xs: [10, 10], sm: 10, md: 24, lg: [35, 20]}}> */}
      <Row gutter={[0, 24]} >
        <Col span={10} lg={10} md={24} sm={24} xs={24}>
          <Picture image="https://raw.githubusercontent.com/sunnyprime/LOGO/master/kishaanHeet/kh%20icon.png"/>
        </Col>
        <Col span={14} lg={14} md={24} sm={24} xs={24}>
          <Detail />
        </Col>
      </Row>
      <Deals />
    </div>
  );
}

export default Details
;

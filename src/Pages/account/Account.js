import React from 'react';
import {Row, Col} from 'antd';
import './Account.scss';
import AccountMenu from './AccountMenu';
import AccountContent from './AccountContent';

// const style = {background: '#0092ff', padding: '8px 0'};

export default function Account() {
  return (
    <div style={{padding: '30px'}}>
      <Row gutter={[32, 10]}>
        <Col className="gutter-row" span={6} lg={6} md={6} sm={6} xs={24}>
          <AccountMenu />
        </Col>
        <Col className="gutter-row" span={18} lg={18} md={18} sm={18} xs={24}>
          <AccountContent />
        </Col>

      </Row>
    </div>
  );
}

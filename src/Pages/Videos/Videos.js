import React from 'react';
import {Row, Col, Divider} from 'antd';
import './Videos.scss';

const style = {background: '#0092ff', padding: '8px 0'};

// eslint-disable-next-line require-jsdoc
export default function Videos() {
  return (
    <div>
      <>
        <Divider orientation="right" style={{fontAlign: 'center', color: '#333', fontWeight: 'normal'}}>
      Horizontal
        </Divider>
        <Row gutter={16} orientation="right">
          <Col orientation="right" className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-rows" span={6}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
        </Row>
        <Divider orientation="left" style={{color: '#333', fontWeight: 'normal'}}>
      Responsive
        </Divider>
        <Row gutter={{xs: 24, sm: 16, md: 24, lg: 32}}>
          <Col className="gutter-row" span={6} xl={6} xs={24}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
        </Row>
        <Divider orientation="left" style={{color: '#333', fontWeight: 'normal'}}>
      Vertical
        </Divider>
        <Row gutter={[16, 24]}>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
        </Row>
      </>
      <>
        <Divider orientation="left" style={{color: '#333', fontWeight: 'normal'}}>
      Horizontal
        </Divider>
        <Row gutter={16}>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
        </Row>
        <Divider orientation="left" style={{color: '#333', fontWeight: 'normal'}}>
      Responsive
        </Divider>
        <Row gutter={{xs: 24, sm: 16, md: 24, lg: 32}}>
          <Col className="gutter-row" span={6} xl={6} xs={24}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
        </Row>
        <Divider orientation="left" style={{color: '#333', fontWeight: 'normal'}}>
      Vertical
        </Divider>
        <Row gutter={[16, 24]}>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
        </Row>
      </>
    </div>
  );
}

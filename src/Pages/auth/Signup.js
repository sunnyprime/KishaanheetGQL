/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
import React from 'react';
import {connect} from 'react-redux';
import {Form, Input, Button, Checkbox} from 'antd';
import './Login.scss';
import {signIn} from '../../redux/auth/auth.action';
import {Row, Col} from 'antd';

const layout = {
  labelCol: {
    span: 5,
  },
  wrapperCol: {
    span: 16,
  },
};

function Signup(props) {
  console.log(props);

  const onFinish = (values) => {
    console.log('Success:', values);
    props.signIn(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div>
      <Row>
        <Col span={3} lg={5} xs={0}></Col>
        <Col span={12} lg={12} xs={24}className="authbox"> <h3>SIGNUP</h3>
          <hr />
          <br />
          <Form
            {...layout}
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  type: 'email',
                  required: true,
                  message: 'Please input your email!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <div className="tailLayout">
              <Form.Item name="remember" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item>
                <Button className="authbutton" type="primary" htmlType="submit">
          Signup
                </Button>
              </Form.Item>
            </div>

          </Form>
        </Col>
        <Col span={2}></Col>
      </Row>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup)
;

import React, {Component} from 'react';
import {InputNumber, Form, Input, Button, Select, Switch} from 'antd';
import {Spin} from 'antd';
// import { Form, Input, InputNumber, Button } from 'antd';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import {addproduct} from '../../redux/category/category.action';

const {Option} = Select;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

class Productup extends Component {
    formRef = React.createRef();


  onFinish = (values) => {
    console.log(values);
    this.props.addproduct(values);
  };

  onReset = () => {
    this.formRef.current.resetFields();
  };


  render() {
    const {category} =this.props;
    // console.log(category);
    if (category) {
      return (
        <div>
          <Form {...layout} ref={this.formRef} name="control-ref" onFinish={this.onFinish}>
            <Form.Item
              name="Name"
              label="Name"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input placeholder="Enter the product name"/>
            </Form.Item>
            <Form.Item
              name="category"
              label="Category"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select
                placeholder="Select a option and change input text above"
                // onChange={this.onGenderChange}
                allowClear
              >
                {category.map((item, index)=>{
                  // console.log(item);

                  return (<Option key={index} value={item.Name}>{item.Name}</Option>);
                })}

              </Select>
            </Form.Item>
            <Form.Item name="price" label="Price" rules={[{type: 'number', required: true}]}>
              <InputNumber />
            </Form.Item>
            <Form.Item name="Amount" label="amount" rules={[{type: 'number', required: true}]}>
              <InputNumber />
            </Form.Item>
            <Form.Item name="quantity" label="Quantity" rules={[{type: 'string'}]}>
              <Input placeholder="Enter Weight or Liter with KG or L" />
            </Form.Item>

            <Form.Item
              name="discount"
              label="Discount in %"
              rules={[
                {
                  required: true,
                  type: 'number',
                  min: 0,
                  max: 100,
                },
              ]}
            >
              <InputNumber />
            </Form.Item>
            <Form.Item name="offer" label="Offer" valuePropName="checked">
              <Switch />
            </Form.Item>

            <Form.Item
              name="brand"
              label="Brand Name"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input placeholder="Enter the Brand name"/>
            </Form.Item>
            <Form.Item
              name="url"
              label="Image Url"
              rules={[
                {
                  required: true,
                  type: 'url',

                },

              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item name="descriptions" label="Descriptions">
              <Input.TextArea />
            </Form.Item>
            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
            Submit
              </Button>&nbsp;&nbsp;
              <Button htmlType="button" onClick={this.onReset}>
            Reset
              </Button>
            </Form.Item>
          </Form>
        </div>
      );
    } else {
      return (<div style={{textAlign: 'center'}}><Spin tip="Loading..." /></div>);
    }
  }
}

const DispatchToProps = (dispatch) => {
  return {
    addproduct: (data) => dispatch(addproduct(data)),
  };
};

const mapStateToProps = (state) => {
  return {
    category: state.firestore.ordered.category,
  };
};
export default compose(
    connect(mapStateToProps, DispatchToProps),
    firestoreConnect([{
      collection: 'category',
    }]),
)(Productup)
;

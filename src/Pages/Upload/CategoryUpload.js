import React, { Component } from 'react'
import { Form, Input, Button} from 'antd';
import { connect } from 'react-redux'; 
import {addcategory} from '../../redux/category/category.action'


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

class CategoryUpload extends Component {
    formRef = React.createRef();



  onFinish = values => {
    console.log(values);
    this.props.addcategory(values)

  };

  onReset = () => {
    this.formRef.current.resetFields();
  };

    render() {
        return (
            <div>
              <h1>CategoryUpload</h1>
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
          <Input />
        </Form.Item>
        <Form.Item
          name="url"
          label="Image Url"
          rules={[
            {
              required: true,
              type:"url"
              
            },
           
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button htmlType="button" onClick={this.onReset}>
            Reset
          </Button>

        </Form.Item>
      </Form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    addcategory:(data) => dispatch(addcategory(data))
    }
  }

export default connect(null,mapDispatchToProps)(CategoryUpload);

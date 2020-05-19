import React, { Component } from 'react'
import { Form, Input, Button, Select } from 'antd';
import { Spin } from 'antd';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

const { Option } = Select;
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

  onGenderChange = value => {
    this.formRef.current.setFieldsValue({
      note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
    });
  };

  onFinish = values => {
    console.log(values);
  };

  onReset = () => {
    this.formRef.current.resetFields();
  };

  onFill = () => {
    this.formRef.current.setFieldsValue({
      note: 'Hello world!',
      gender: 'male',
    });
  };
    render() {
      const {category} =this.props
      // console.log(category);
      if(category){
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
          <Input />
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
            {category.map((item,index)=>{
              // console.log(item);
              
              return(<Option key={index} value={item.Name}>{item.Name}</Option>)
            })} 

          </Select>
        </Form.Item>


        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit" Success>
            Submit
          </Button>&nbsp;&nbsp;
          <Button htmlType="button" onClick={this.onReset}>
            Reset
          </Button>
        </Form.Item>
      </Form>
            </div>
        )
    }
    else{
      return(<><Spin tip="Loading..." /></>)
    }
  }
}

const mapStateToProps = (state) => {
  // console.log(".....");
  
  // console.log(state);
  
  return {
  //   projects: state.firestore.ordered.projects,
  //   auth: state.firebase.auth,
  category: state.firestore.ordered.category,
  }
}
export default compose(
  connect(mapStateToProps),
  firestoreConnect([{
    collection: 'category'
  }])
)(Productup)
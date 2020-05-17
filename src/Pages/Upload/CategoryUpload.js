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
    // setAlert : (data,type) => dispatch(setAlert(data,type))
    //   signIn: (creds) => dispatch(signIn(creds))
    addcategory:(data) => dispatch(addcategory(data))
    }
  }

export default connect(null,mapDispatchToProps)(CategoryUpload);







// import React from 'react'
// import { Button } from 'antd';
// import { connect } from 'react-redux'; 
// import {setAlert} from '../../redux/alert/alerts.actions'

// function Upload(props) {
//     // const {setAlert} = this.props
//     return (
//         <div style={{padding:'80px'}}>
            
//             <Button type="primary" onClick={()=>props.setAlert("datas","success")}>Primary</Button>
//         </div>
//     )
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//     setAlert : (data,type) => dispatch(setAlert(data,type))
//     //   signIn: (creds) => dispatch(signIn(creds))
//     }
//   }

// export default connect(null,mapDispatchToProps)(Upload);

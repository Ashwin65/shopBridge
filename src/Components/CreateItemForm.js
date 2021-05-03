import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Form, Input, InputNumber} from 'antd';

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 4,
    },
    lg: { 
      span: 6 
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    lg: { 
      span: 16
    },
    sm: {
      span: 20,
    },
  },
};

const CreateItemForm = (props) => {
  const [form] = Form.useForm();


  const { getFieldDecorator } = form;
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };



  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        residence: ['zhejiang', 'hangzhou', 'xihu'],
        prefix: '86',
      }}
      scrollToFirstError
    >
      <Form.Item
        name="Name"
        label="Name"
        rules={[
          {
            required: true,
            message: 'Please input name of the item!',
          },
        ]}
        style={{textAlign:'left'}}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="Description"
        label="Description"
        rules={[
          {
            required: true,
            message: 'Please input the description!',
          },
        ]}
        style={{textAlign:'left'}}
      >
        <Input />
      </Form.Item>
      <Form.Item name = "Price" label={`Price`} Col span={8}  rules={[
          {
           
            required: true,
            message: 'Please input the Price!',
            type: 'number',
          },
        ]}>
       <InputNumber />
            </Form.Item>
    </Form>
  );
};


export default CreateItemForm;
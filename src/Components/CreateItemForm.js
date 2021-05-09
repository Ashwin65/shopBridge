import React from 'react';
import 'antd/dist/antd.css';
import { Form, Input, InputNumber, Button } from 'antd';

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

const tailLayout = {
  wrapperCol: {
    offset: 6,
    span: 16,
  },
  style: {
    marginTop: 20,
    alignItems: 'space-between'
  }
};

const CreateItemForm = (props) => {
  const [form] = Form.useForm();




  const onFinish = (values) => {
    props.saveItem(values);
    form.resetFields();
  };





  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}


      scrollToFirstError
    >
      <Form.Item
        name="name"
        label="Name"
        rules={[
          {
            required: true,
            message: 'Please input name of the item!',
          },
        ]}
        style={{ textAlign: 'left' }}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="description"
        label="Description"
        rules={[
          {
            required: true,
            message: 'Please input the description!',
          },
        ]}
        style={{ textAlign: 'left' }}
      >
        <Input />
      </Form.Item>
      <Form.Item name="price" label="Price" Col span={8} rules={[
        {

          required: true,
          message: 'Please input the Price!',
          type: 'number',
        },
      ]}>
        <InputNumber />
      </Form.Item>

      <Form.Item name="stockLeft" label="Stocks Left" Col span={8} rules={[
        {

          required: true,
          message: 'Please input the Quantity of Stocs!',
          type: 'number',
        },
      ]}>

        <InputNumber />

      </Form.Item>
      <Form.Item {...tailLayout}>

        <Button type="primary" htmlType="submit" >
          Submit
        </Button>

      </Form.Item>
    </Form>
  );
};


export default CreateItemForm;
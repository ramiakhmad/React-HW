import React from 'react';
import { Form, Input, Button } from 'antd';
import PropTypes from 'prop-types';

const FormComponent = ({ onSubmit }) => {
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    onSubmit(values);
    form.resetFields();
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={handleSubmit}
      initialValues={{ name: '', description: '' }}
    >
      <Form.Item
        label="Имя"
        name="name"
        rules={[{ required: true, message: 'Пожалуйста, введите ваше имя!' }]}
      >
        <Input placeholder="Введите ваше имя" />
      </Form.Item>
      <Form.Item
        label="Описание"
        name="description"
        rules={[{ required: true, message: 'Пожалуйста, введите описание!' }]}
      >
        <Input placeholder="Введите описание" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Отправить
        </Button>
      </Form.Item>
    </Form>
  );
};

FormComponent.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default FormComponent;
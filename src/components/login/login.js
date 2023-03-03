import { Breadcrumb, Button, Card, Checkbox, Col, Form, Input, Row, Space, Typography } from "antd";
import { Content }                                                                      from "antd/es/layout/layout";
import React, { useState }                                                              from "react";
import MailOutlined                                                                     from '@ant-design/icons';
import { useDispatch }                                                                  from "react-redux";
import { addTitle }                                                                     from "../../app/starwars";

const { Title, Paragraph } = Typography;

export default function Login()
{
  const [email, setEmail] = useState('')
  const [pwd, setPwd] = useState('')
  const [showAnswer, setShowAnswer] = useState(false)
  const [form] = Form.useForm();
  const dispatch = useDispatch()
  
  dispatch(addTitle('Login'))
  
  const onFinish = (values) => {
    setEmail(values.email)
    setPwd(values.password)
    setShowAnswer(true)
  }
  
  return <>
    <Breadcrumb style={{ margin: '16px 0' }}>
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      <Breadcrumb.Item>Login</Breadcrumb.Item>
    </Breadcrumb>
    
    <Content className={"full-height"}>
      <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
        <Row>
          <Col offset={8}>
            <Title>Login</Title>
          </Col>
          
          <Col offset={8} span={16}>
            <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 8 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              // onFinishFailed={onFinishFailed}
              autoComplete="off"
              layout={"vertical"}
              form={form}
            >
              <Form.Item
                label="Email Address"
                name="email"
                extra="We'll never share your email with anyone else."
              >
                <Input prefix={<MailOutlined className="site-form-item-icon" />} />
              </Form.Item>
        
              <Form.Item
                label="Password"
                name="password"
              >
                <Input.Password />
              </Form.Item>
        
              <Form.Item valuePropName="checked" name="confirm" wrapperCol={{ span: 16 }} rules={[{ required: true, message: 'Please confirm.' }]}>
                <Checkbox>Confirm</Checkbox>
              </Form.Item>
        
              <Form.Item wrapperCol={{ span: 16 }}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Col>
    
          {showAnswer ? (
            <Col span={20} offset={2}>
              <Card hoverable={true} bordered={false} style={{ backgroundColor: '#000c17' }}>
                <Paragraph>Email Address: {email}</Paragraph>
                <Paragraph>Password: {pwd}</Paragraph>
              </Card>
            </Col>
          ) : ''}
          
          
        </Row>
      </Space>
    </Content>
    
    
  </>
}
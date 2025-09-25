'use client';

import {
  Button,
  Form,
  Input,
  Select,
  Row,
  Col,
  Card,
} from 'antd';

const { Option } = Select;

export default function OrganizationSettingsPage() {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Card title="Organization Settings" className="mt-4">
      <Form
        name="organization-settings"
        layout="vertical"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Row gutter={16}>
          <Col xs={24} lg={12}>
            <Form.Item
              label="Organization Name"
              name="organizationName"
              rules={[{ required: true, message: 'Please input your organization name!' }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col xs={24} lg={12}>
            <Form.Item
              label="Default Language"
              name="defaultLanguage"
              rules={[{ required: true, message: 'Please select a default language!' }]}
            >
              <Select placeholder="Select a language">
                <Option value="en">English</Option>
                <Option value="es">Spanish</Option>
                <Option value="fr">French</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col xs={24} lg={12}>
            <Form.Item
              label="Timezone"
              name="timezone"
              rules={[{ required: true, message: 'Please select a timezone!' }]}
            >
              <Select placeholder="Select a timezone">
                <Option value="gmt-0">GMT-0</Option>
                <Option value="gmt-5">GMT-5</Option>
                <Option value="gmt-8">GMT-8</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col xs={24} lg={12}>
            <Form.Item
              label="Payout Currency"
              name="payoutCurrency"
              rules={[{ required: true, message: 'Please select a payout currency!' }]}
            >
              <Select placeholder="Select a currency">
                <Option value="usd">USD</Option>
                <Option value="eur">EUR</Option>
                <Option value="gbp">GBP</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Save Changes
          </Button>
        </Form.Item>
      </Form>
    </Card>
  )
}

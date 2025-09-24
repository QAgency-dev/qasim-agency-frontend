'use client';

import { PlusOutlined } from '@ant-design/icons';
import {
  Button,
  Cascader,
  Checkbox,
  ColorPicker,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Rate,
  Select,
  Slider,
  Switch,
  TreeSelect,
  Upload,
  Space,
  Table,
  Tag,
  Card,
} from 'antd';
import type { TableProps } from 'antd';

interface DataType {
  key: string;
  name: string;
  email: string;
  password?: string;
  roles: string[];
  status: 'active' | 'deactive';
}

const columns: TableProps<DataType>['columns'] = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Email Address',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Roles',
    key: 'roles',
    dataIndex: 'roles',
    render: (_, { roles }) => (
      <>
        {roles.map((role) => {
          let color = role.length > 5 ? 'geekblue' : 'green';
          return (
            <Tag color={color} key={role}>
              {role.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Status',
    key: 'status',
    dataIndex: 'status',
    render: (status: 'active' | 'deactive') => {
      let color = status === 'active' ? 'green' : 'volcano';
      return (
        <Tag color={color} key={status}>
          {status.toUpperCase()}
        </Tag>
      );
    },
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Edit</a>
        <a>Suspend</a>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    email: 'john.brown@example.com',
    roles: ['Administrator', 'Developer'],
    status: 'active',
  },
  {
    key: '2',
    name: 'Jim Green',
    email: 'jim.green@example.com',
    roles: ['Recruiter'],
    status: 'deactive',
  },
  {
    key: '3',
    name: 'Joe Black',
    email: 'joe.black@example.com',
    roles: ['Trainer', 'Support'],
    status: 'active',
  },
  {
    key: '4',
    name: 'Alice Smith',
    email: 'alice.smith@example.com',
    roles: ['Operations', 'Viewer'],
    status: 'deactive',
  },
  {
    key: '5',
    name: 'Bob Johnson',
    email: 'bob.johnson@example.com',
    roles: ['Finance'],
    status: 'active',
  },
  {
    key: '6',
    name: 'Charlie Davis',
    email: 'charlie.davis@example.com',
    roles: ['Compliance'],
    status: 'deactive',
  },
  {
    key: '7',
    name: 'Diana Prince',
    email: 'diana.prince@example.com',
    roles: ['Administrator', 'Support'],
    status: 'active',
  },
];

export default function EmployeeSettingsPage() {
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  const roles = [
    'Administrator',
    'Recruiter',
    'Trainer',
    'Operations',
    'Support',
    'Finance',
    'Compliance',
    'Viewer',
  ];

  return (
    <div>

      <Card title="Add New Employee" className="mt-4">
        <Form
          name="employee_settings"
          layout="vertical"
          onFinish={onFinish}
          initialValues={{ remember: true }}
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Please input the employee\'s name!' }]}
          >
            <Input placeholder="Employee Name" />
          </Form.Item>

          <Form.Item
            label="Email Address"
            name="email"
            rules={[{ required: true, message: 'Please input the email address!' }]}
          >
            <Input placeholder="Email Address" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input the password!' }]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>

          <Form.Item
            label="Assign Roles"
            name="roles"
            rules={[{ required: true, message: 'Please select at least one role!' }]}
          >
            <Checkbox.Group options={roles} />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Add Employee
            </Button>
          </Form.Item>
        </Form>
      </Card>

      <div style={{ margin: '24px 0' }} />

      <Card title="Employee List" className="mt-8">
        <Table<DataType> columns={columns} dataSource={data} pagination={{ pageSize: 3 }} />
      </Card>
    </div>
  );
}

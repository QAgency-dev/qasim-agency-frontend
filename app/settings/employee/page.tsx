'use client';

import React, { useState } from 'react';

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
  Switch,
  TreeSelect,
  Upload,
  Space,
  Tag,
  Card,
} from 'antd';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

interface DataType {
  key: string;
  name: string;
  email: string;
  password?: string;
  roles: string[];
  status: 'active' | 'deactive';
}




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
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(data.length / itemsPerPage);

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
            name="name"
            rules={[{ required: true, message: 'Please input the employee\'s name!' }]} 
          >
            <Input placeholder="Employee Name" />
          </Form.Item>

          <Form.Item
            name="email"
            rules={[{ required: true, message: 'Please input the email address!' }]}>
            <Input placeholder="Email Address" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input the password!' }]}>
            <Input.Password placeholder="Password" />
          </Form.Item>

          <Form.Item
            name="roles"
            rules={[{ required: true, message: 'Please select at least one role!' }]}>
            <div className="flex flex-wrap">
              <Checkbox.Group
                options={roles}
              />
            </div>
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
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email Address</TableHead>
              <TableHead>Roles</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentItems.map((employee) => (
              <TableRow key={employee.key}>
                <TableCell>{employee.name}</TableCell>
                <TableCell>{employee.email}</TableCell>
                <TableCell>
                  {employee.roles.map((role) => {
                    let color = role.length > 5 ? 'geekblue' : 'green';
                    return (
                      <Tag color={color} key={role}>
                        {role.toUpperCase()}
                      </Tag>
                    );
                  })}
                </TableCell>
                <TableCell>
                  {(() => {
                    let color = employee.status === 'active' ? 'green' : 'volcano';
                    return (
                      <Tag color={color} key={employee.status}>
                        {employee.status.toUpperCase()}
                      </Tag>
                    );
                  })()}
                </TableCell>
                <TableCell>
                  <Space size="middle">
                    <a>Edit</a>
                    <a>Suspend</a>
                  </Space>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Pagination className="mt-4">
          <PaginationContent>
            <PaginationPrevious
              onClick={currentPage === 1 ? undefined : () => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
            />
            {[...Array(totalPages)].map((_, index) => (
              <PaginationItem key={index}>
                <PaginationLink
                  isActive={currentPage === index + 1}
                  onClick={() => setCurrentPage(index + 1)}
                >
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationNext
              onClick={currentPage === totalPages ? undefined : () => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
            />
          </PaginationContent>
        </Pagination>
      </Card>
    </div>
  );

}

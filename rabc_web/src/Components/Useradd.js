import React, { useContext, useState } from 'react'
import { Form, Input, Select, Button, Switch, message } from 'antd'
import { DataContext } from '../WelcomMenu'
import request from '../Tools/request'
const { Option } = Select

const Useradd = () => {
    const { userdata, roledata, authodata, UserMessage, setUserdata, setRoledata, setAuthodata, setUserMessage } = useContext(DataContext)
    const onFinish = (values) => {
        console.log("正在提交")
        try {
            // 构建请求体
            const requestBody = {
                key: values.key,
                userId: values.userId,
                userName: values.userName,
                userNickname: values.userNickname,
                department: values.department,
                phoneNumber: values.phoneNumber,
                status: values.status,
                createTime: "2023-10-30T12:00:00Z",
                account: UserMessage
            }

            // 发送POST请求
            request.post('/users/', requestBody)
                .then((response) => {
                    message.success("增加成功")
                    // setUserdata([...userdata, requestBody])
                })
                .catch(() => {
                    message.error("增加失败")
                })
        } catch (error) {
            console.error('Error:', error)
            // 在这里可以添加一些错误处理逻辑
        }
    }

    return (
        <Form
            name="yourForm"
            onFinish={onFinish}
            initialValues={{
                key: "100",
                userId: "1234567",
                status: true,
                createTime: "2023-10-30T12:00:00Z",
            }}
        >
            <Form.Item label="Key" name="key">
                <Input />
            </Form.Item>

            <Form.Item label="User ID" name="userId">
                <Input />
            </Form.Item>

            <Form.Item label="User Name" name="userName" rules={[{ required: true, message: 'Please input your username!' }]}>
                <Input />
            </Form.Item>

            <Form.Item label="Nickname" name="nickname" rules={[{ required: true, message: 'Please input your nickname!' }]}>
                <Input />
            </Form.Item>

            <Form.Item label="Department" name="department" rules={[{ required: true, message: 'Please input your department!' }]}>
                <Input />
            </Form.Item>

            <Form.Item label="Phone Number" name="phoneNumber" rules={[{ required: true, message: 'Please input your phone number!' }]}>
                <Input />
            </Form.Item>

            <Form.Item label="Status" name="status" valuePropName="checked">
                <Switch />
            </Form.Item>

            <Form.Item label="Create Time" name="createTime">
                <Input disabled />
            </Form.Item>

            <Form.Item label="Account" name={['account', 'placeholder']}>
                <Input disabled />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit"
                    style={{
                        width: "100%"
                    }}
                    onClick={onFinish}>
                    Submit
                </Button>
            </Form.Item>
        </Form>
    )
}

export default Useradd

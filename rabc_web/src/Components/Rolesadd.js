import React from 'react'
import { Form, Input, Select, Button, message, Switch } from 'antd'
import request from '../Tools/request'

const { Option } = Select

const Rolesadd = () => {
    const onFinish = (values) => {
        console.log("正在提交")
        try {
            // 构建请求体
            const requestBody = {
                key: values.key,
                roleId: values.roleId,
                roleName: values.roleName,
                roleType: values.roleType,
                roleIdentifier: values.roleIdentifier,
                displayOrder: values.displayOrder,
                remark: values.remark,
                status: values.status,
                createTime: values.createTime,
            }

            // 发送 POST 请求
            request.post('/roles/', requestBody)
                .then((response) => {
                    message.success("角色添加成功")
                    // 更新 roledata，根据实际需要修改
                })
                .catch(() => {
                    message.error("角色添加失败")
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
                key: "default",
                roleId: "default",
                status: true,
                createTime: "2023-10-16",
            }}
        >
            {/* 根据 role 数据的结构，添加相应的 Form.Item */}
            <Form.Item label="Key" name="key">
                <Input />
            </Form.Item>

            <Form.Item label="Role ID" name="roleId">
                <Input />
            </Form.Item>

            <Form.Item label="Role Name" name="roleName" rules={[{ required: true, message: '请输入角色名称!' }]}>
                <Input />
            </Form.Item>

            <Form.Item label="Role Type" name="roleType" rules={[{ required: true, message: '请输入角色类型!' }]}>
                <Input />
            </Form.Item>

            <Form.Item label="Role Identifier" name="roleIdentifier" rules={[{ required: true, message: '请输入角色标识!' }]}>
                <Input />
            </Form.Item>

            <Form.Item label="Display Order" name="displayOrder" rules={[{ required: true, message: '请输入显示顺序!' }]}>
                <Input type="number" />
            </Form.Item>

            <Form.Item label="Remark" name="remark">
                <Input />
            </Form.Item>

            <Form.Item label="Status" name="status" valuePropName="checked">
                <Switch />
            </Form.Item>

            <Form.Item label="Create Time" name="createTime">
                <Input disabled />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit"
                    style={{
                        width: "100%"
                    }}
                    onClick={onFinish}>
                    提交
                </Button>
            </Form.Item>
        </Form>
    )
}

export default Rolesadd

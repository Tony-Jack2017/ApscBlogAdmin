import Container from "../../layout/Container";
import {Button, Form, Input, message} from "antd";
import {useForm} from "antd/es/form/Form";
import "../../styles/page/auth/signUp.scss"
import {Link, useNavigate} from "react-router-dom";
import {userRegister} from "../../api/http/user";
import {useState} from "react";

const SignUp = () => {
    const [form] = useForm()
    const [ submitLoading, setSubmitLoading ] = useState(false)
    const navigate = useNavigate()

    const onFinish = (value: any) => {
        setSubmitLoading(true)
        if(value.password !== value.confirm_password) {
            message.error("twice input password not equal !!!")
            form.setFieldValue("confirm_password", "")
            setSubmitLoading(false)
            return
        }
        userRegister({
            account: value.account,
            password: value.password,
            email: value.email
        }).then(res => {
            setSubmitLoading(false)
            if(res.data.success) {
                message.success(res.data.message)
                navigate("/auth/signIn")
            }else {
                message.error(res.data.message)
                form.resetFields()
            }
        }).catch(err => {
            message.error(err.response.data.message).then(() => {
                form.resetFields()
            })
            setSubmitLoading(false)
        })
    };

    return (
        <div className="signUp-page">
            <Container style={{width: "30%"}}>
                <div className="title">
                    Register Now
                </div>
                <Form
                    layout="vertical"
                    onFinish={onFinish}
                    form={form}
                    size="large"
                >
                    <Form.Item name="account" rules={[{ required: true , type: 'string', min: 6 , message: "The account must 6 character" }]} label="USERNAME">
                        <Input placeholder="Input your account" />
                    </Form.Item>
                    <Form.Item name="password" rules={[{ required: true , message: "Please input your password" }]} label="PASSWORD">
                        <Input type="password" placeholder="Input your password" />
                    </Form.Item>
                    <Form.Item name="confirm_password" rules={[{ required: true , message: "Please input the confirm password" }]} label="CONFIRM PASSWORD">
                        <Input type="password" placeholder="Confirm your password" />
                    </Form.Item>
                    <Form.Item name="email" rules={[{ required: true , pattern: /^[A-Za-z0-9]+([_.][A-Za-z0-9]+)*@([A-Za-z0-9-]+\.)+[A-Za-z]{2,6}$/ , message: "Please input correct format email" }]} label="EMAIL">
                        <Input placeholder="Input your email" />
                    </Form.Item>
                    <Form.Item style={{marginBottom: 10,display: "flex", alignItems: "center", justifyContent: "center"}}>
                        <Button  htmlType="submit" style={{width: 200}} shape="round" type="primary" loading={submitLoading}>
                            SIGNUP NOW
                        </Button>
                    </Form.Item>
                    <Form.Item style={{display: "flex", alignItems: "center", justifyContent: "center"}} >
                        <Link to="/auth/signIn" className="switch">I had a account</Link>
                    </Form.Item>
                </Form>
            </Container>
        </div>
    )
}

export default SignUp
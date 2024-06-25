import Container from "../../layout/Container";
import {Button, Form, Input, message} from "antd";
import {useForm} from "antd/es/form/Form";
import "../../styles/page/auth/signIn.scss"
import {Link, useNavigate} from "react-router-dom";
import {userLogin} from "../../api/http/user";
import {useState} from "react";

const SignIn = () => {
    const [form] = useForm()
    const [ submitLoading, setSubmitLoading ] = useState(false)
    const navigate = useNavigate()


    const onFinish = (value: any) => {
        setSubmitLoading(true)
        userLogin({
            account: value.account,
            password: value.password,
        }).then(res => {
            setSubmitLoading(false)
            if(res.data.success) {
                message.success(res.data.message)
                navigate("/")
            }else {
                message.error(res.data.message)
                form.resetFields()
            }
        }).catch(err => {
            message.error(err.response.data.message)
            setSubmitLoading(false)
            form.resetFields()
        })
    };


    return(
        <div className="signIn-page">
            <Container style={{width: "30%"}}>
                <div className="title">
                    APSC BLOG
                </div>
                <Form
                    layout="vertical"
                    form={form}
                    size="large"
                    onFinish={onFinish}
                >
                    <Form.Item name="account" rules={[{ required: true, min: 8, message: "The account must 8 character" }]} label="ACCOUNT">
                        <Input placeholder="Input your account" />
                    </Form.Item>
                    <Form.Item name="password" rules={[{ required: true, message: "Please input your password" }]} label="PASSWORD">
                        <Input type="password" placeholder="Input your password" />
                    </Form.Item>
                    <Form.Item style={{marginBottom: 10,display: "flex", alignItems: "center", justifyContent: "center"}}>
                        <Button style={{width: 200}} shape="round" type="primary" htmlType="submit" loading={submitLoading}>LOGIN</Button>
                    </Form.Item>
                    <Form.Item style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                        <Link to="/auth/signUp" className="switch">I haven't a account</Link>
                    </Form.Item>
                </Form>
            </Container>
        </div>
    )
}

export default SignIn
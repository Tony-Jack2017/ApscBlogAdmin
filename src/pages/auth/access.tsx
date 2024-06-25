import "../../styles/page/auth/access.scss"
import Container from "../../layout/Container";


import Logo from "../../resources/common/logo/logo-white.png"
import LogoFull from "../../resources/common/logo/logo-full-white.png"
import {ComForm, ComFormItem, useComForm} from "../../components/ComForm";
import {Button} from "antd";
import {useState} from "react";
import classNames from "classnames";

const Access = () => {

  const [formClass1, setFormClass1] = useState(classNames(
    "form"
  ))
  const [formClass2, setFormClass2] = useState(classNames(
    "form",
    "switched"
  ))
  const handleSwitch = (formNo: number) => {
    console.log(formNo)
    if (formNo === 1) {
      setFormClass1(classNames("form", "switched"));
      setFormClass2("form")
    }
    if (formNo === 2) {
      setFormClass2(classNames("form", "switched"));
      setFormClass1("form")
    }
  }

  return (
    <Container isNoStyle={true} className="access-page">
      <div className="brand">
        <div className="heading">
          <div className="logo">
            <img src={Logo} alt="logo"/>
          </div>
          <div className="title">
            <span>AB</span>
            <span style={{marginLeft: 4}}>.</span>
          </div>
          <div className="content">
            <div className="logo">
              <img src={LogoFull} alt="logo"/>
            </div>
            <p className="title">
              Welcome to APSC BLOG
            </p>
          </div>
        </div>
      </div>
      <div className={formClass1}>
        <div className="signIn-form">
          <ComForm form={useComForm()}>
            <ComFormItem label="Account" name="account"></ComFormItem>
            <ComFormItem label="Password" name="password" type="password"></ComFormItem>
            <ComFormItem name="CTA" style={{marginTop: 40}} className="CTA">
              <div style={{display: "flex", alignItems: "center"}}>
                <Button type="primary" shape={"round"}>LOGIN</Button>
                <a onClick={() => handleSwitch(1)} href="#" className="switch">I'm New</a>
              </div>
            </ComFormItem>
          </ComForm>
        </div>
      </div>
      <div className={formClass2}>
        <div className="signUp-form">
          <ComForm>
            <ComFormItem label="FullName" name="fullName"></ComFormItem>
            <ComFormItem label="Email" name="email" type="email"></ComFormItem>
            <ComFormItem label="Password" name="password" type="password"></ComFormItem>
            <ComFormItem label="Comfir Password" name="comfir" type="password"></ComFormItem>
            <ComFormItem name="CTA" style={{marginTop: 40}} className="CTA">
              <div style={{display: "flex", alignItems: "center"}}>
                <Button type="primary" shape={"round"}>SIGNUP NOW</Button>
                <a onClick={() => handleSwitch(2)} href="#" className="switch">I have an account</a>
              </div>
            </ComFormItem>
          </ComForm>
        </div>
      </div>
    </Container>
  )
}

export default Access

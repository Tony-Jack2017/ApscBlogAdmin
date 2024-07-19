import "../../styles/page/setting/profile.scss"

import Container from "../../layout/Container";
import {ImmerReducer, useImmerReducer} from "use-immer";
import {Form, Input} from "antd";
import {useForm} from "antd/es/form/Form";

type action = {
  type: string
  payload: any
}


const dataReducer: ImmerReducer<RecursiveObjectType, action> = (data, action) => {
  switch (action.type) {
    case "USER_UPDATE":
      data.user[action.payload.key as KeyType<typeof initData.user>] = action.payload.value
      break;
    case "LINK_UPDATE":
      data.link[action.payload.key as KeyType<typeof initData.link>] = action.payload.value
      break;
    case "SKILL_UPDATE":
      data.skill[action.payload.key as KeyType<typeof initData.skill>] = action.payload.value
      break;
    default:
      break;
  }
}


type NestedObjectType<T> = T extends object ? { [K in keyof T]: NestedObjectType<T[K]> } : T;
type RecursiveObjectType = NestedObjectType<typeof initData>;
type KeyType<T> = keyof T

const initData = {
  user: {
    username: "Apsc Builder",
    email: "gan19991118@gmail.com",
    avatar: "avatar"
  },
  link: {
    github: "https://github.com",
    website: "https://website.com",
    discord: "https://discord.com"
  },
  skill: {
    languages: "",
    interest: ""
  }
}

const SettingProfile = () => {

  const [data, dispatch] = useImmerReducer(dataReducer, initData)
  const [form] = useForm()

  return (
    <div className="setting-profile">
      <Form form={form} layout="vertical" size="large">
        <Container className="profile-one" layout="common">
          <div>
            <span className="title">User</span>
          </div>
          <div>
            <Form.Item name="username" label="UserName">
              <Input />
            </Form.Item>
            <Form.Item name="email" label="Email">
              <Input />
            </Form.Item>
            <Form.Item name="Avatar" label="Avatar">
              <Input />
            </Form.Item>
          </div>
        </Container>
        <Container className="profile-one" layout="common">
          <span className="title">Link</span>
          <div>
            <Form.Item name="github" label="Github">
              <Input />
            </Form.Item>
            <Form.Item name="discord" label="Discord">
              <Input />
            </Form.Item>
            <Form.Item name="Webite" label="Website">
              <Input />
            </Form.Item>
          </div>
        </Container>
        <Container className="profile-one" layout="common">
          <span className="title">Skill/Interest</span>
          <div>
            <Form.Item name="skill" label="Skill">
              <Input />
            </Form.Item>
          </div>
        </Container>
      </Form>
    </div>
  )
}

export default SettingProfile
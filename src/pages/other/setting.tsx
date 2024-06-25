import "../../styles/page/setting.scss"
import Container from "../../layout/Container";
import {FC, useState} from "react";
import {Switch} from "antd";


interface SettingInfoItf {
    state: boolean
    title: string
    desc: string
    onChangeState: (state: boolean, stateName: string) => void
}
type stateProp = {
    [key: string]: boolean
}


const SettingInfo:FC<SettingInfoItf> = (props) => {
    const { state , title, desc, onChangeState} = props

    const handleChange = (value: boolean, title: string) => {
        onChangeState(value, title)
    }

    return (
        <div className="setting-info">
            <div className="info-header">
                <span className="title">{ title }</span>
                <Switch checked={state} onChange={(value: boolean) => { handleChange(value, title) }} />
            </div>
            <div className="info-content">
                { desc }
            </div>
        </div>
    )
}

const stateList = [
    { title: "showStruct", desc: "The switch can show struct of article", state: false},
    { title: "showTip", desc: "The article show the tips about something", state: false },
    { title: "showComment", desc: "The article can publish comment from all viewer" , state: false},
    { title: "showInfo", desc: "The can show all info about article", state: false },
    { title: "available_share", desc: "The available about article to sharing", state: false },
]

const Setting = () => {

    const [articleInfo, setArticleInfo] = useState<stateProp>({
        showStruct: false,
        showTip: false,
        showComment: false,
        showInfo: false,
        available_share: false
    })

    const onChange = (state: boolean, stateName: string) => {
        setArticleInfo((pre) => {
            return {
                ...pre,
                [stateName]: state,
            }
        })
    }

    return (
        <div className="setting-page">
            <Container className="article-setting">
                <div className="setting-header">
                    <span className="title">The Article Setting</span>
                </div>
                <div className="setting-content">
                    {
                        stateList.map((item, index) => {
                            return (
                                <SettingInfo key={index} state={articleInfo[item.title]} title={item.title} desc={item.desc} onChangeState={onChange} />
                            )
                        })
                    }
                </div>
            </Container>
            <Container className="user-setting" style={{ marginTop: 40 }}>
                <div className="setting-header">
                    <span className="title">The User Setting</span>
                </div>
                <div className="setting-content">
                    {
                        stateList.map((item, index) => {
                            return (
                                <SettingInfo key={index} state={articleInfo[item.title]} title={item.title} desc={item.desc} onChangeState={onChange} />
                            )
                        })
                    }
                </div>
            </Container>
        </div>
    )
}

export default Setting
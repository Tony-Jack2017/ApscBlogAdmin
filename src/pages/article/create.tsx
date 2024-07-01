import React, {FC, useState} from "react";
import {Button, Form, FormInstance,  Input, Select, SelectProps} from "antd";
import { CheckCircleOutlined, ArrowRightOutlined, ArrowLeftOutlined } from "@ant-design/icons"
import TextArea from "antd/es/input/TextArea";
import "../../styles/page/article/create.scss"

import {createArticle} from "../../api/http/article";


import Container from "../../layout/Container";
import TextEditor from "../../components/Editor/Editor";
import ComUploadFile from "../../components/ComUploadFile";



const tagOptions: SelectProps['options'] = [
    { value: "1", label: "Html" },
    { value: "2", label: "Javascript" },
    { value: "3", label: "Css" },
    { value: "4", label: "React" },
    { value: "5", label: "Vue" },
    { value: "6", label: "Vue3" },
    { value: "7", label: "Slate" },
];
const typeOptions: SelectProps['options'] = [
    { value: 1, label: "Web Front" },
    { value: 2, label: "Golang" },
    { value: 3, label: "Interest" },
    { value: 4, label: "Life" },
];

interface ArticleContentItf {
    type: string
    step: number
    form: FormInstance
    onChangeContent: (value: string) => void
    updateInfo: (obj: object) => void
}

const ArticleContent:FC<ArticleContentItf> = (props) => {
    const {
        type, step, form ,
        onChangeContent, updateInfo
    } = props

    const handleChose = (type: string) => {
        updateInfo({"type": type})
    }
    const handleContent = (content:string) => {
        onChangeContent(content)
    }

    switch (step + "-" + type) {
        case "2-file":
            return (
                <div className="file-content">
                    <ComUploadFile url="http://127.0.0.1:8080/api/v1/common/upload_file" fileType="picture" />
                </div>
            );
        case "2-write":
            return (
                <div className="write-content">
                    <TextEditor onChange={handleContent} />
                </div>
            );
        case "3-file" || "3-write":
            return (
                <div className="article-form">
                    <Form form={form} layout="vertical" size="large">
                        <Form.Item label="Title" name="title" rules={[{ required: true, message: 'Please input the article title' }]}>
                            <Input placeholder="Please input the article title" />
                        </Form.Item>
                        <Form.Item label="Type" name="type" rules={[{ required: true, message: 'Please chose the type of article' }]}>
                            <Select style={{ width: '100%' }} placeholder="Please chose the type of article" options={typeOptions} />
                        </Form.Item>
                        <Form.Item label="Tags" name="tags" rules={[{ required: true, message: 'Please input the article title' }]}>
                            <Select mode="tags" style={{ width: '100%' }} placeholder="Please chose the tags of article" options={tagOptions} />
                        </Form.Item>
                        <Form.Item label="Description" name="description" rules={[{ required: true, message: 'Please input the article title' }]}>
                            <TextArea placeholder="Please input description about article" autoSize={{ minRows: 3, maxRows: 5 }} />
                        </Form.Item>
                    </Form>
                </div>
            );
        default:
            return (
                <div className="chose-create-way">
                    <div className={`create-way write-article ${type === "write" && "create-way_chosen"}`} onClick={() => { handleChose("write") }}>
                        <div className="box-header">
                            { type === "write" ? <div className="selected"><CheckCircleOutlined style={{ fontSize: 16 }}/></div> : <div className="empty-select"></div>}
                        </div>
                        <div className="box-content">
                            <p className="way-desc">
                                Some word I want to writing now
                            </p>
                        </div>
                    </div>
                    <div className={`create-way file-article ${type === "file" && "create-way_chosen"}`} onClick={() => { handleChose("file") }}>
                        <div className="box-header">
                            { type === "file" ? <div className="selected"><CheckCircleOutlined style={{ fontSize: 16 }}/></div> : <div className="empty-select"></div>}
                        </div>
                        <div className="box-content">
                            <p className="way-desc">
                                I already have a article to publish
                            </p>
                        </div>
                    </div>
                </div>
            )
    }
}

const CreateArticle = () => {
    const [form] = Form.useForm()
    const [content, setContent] = useState<string>()
    const [sendLoading, setSendLoading] = useState(false)
    const [articleInfo, setArticleInfo] = useState({
        type: "",
        step: 1,
        title: "Chose a way to create your article",

        preVisible: false,
        preTitle: "Last Step",
        preDisable: false,
        preIcon: <ArrowLeftOutlined />,
        preLoading: false,

        afterVisible: true,
        afterTitle: "Next Step",
        afterDisable: false,
        afterIcon: <ArrowRightOutlined />,
        afterLoading: false,
    })
    const updateArticleState = ( art: object) => {
        setArticleInfo(pre => {
            return {
                ...pre,
                ...art
            }})
    }

    const handlePre = () => {
        switch (articleInfo.type + "-" + articleInfo.step) {
            case "3-file" || "3-write":
                createArticle({
                    content: content
                }).then(res => {

                }).catch(err => {

                })
                break
            default:
                updateArticleState({"preVisible": articleInfo.step > 2, step: articleInfo.step - 1})
        }
    }
    const handleNext = () => {
        switch (articleInfo.type + "-" + articleInfo.step) {
            case "3-file" || "3-write":
                createArticle({
                    content: content
                }).then(res => {

                }).catch(err => {

                })
                break
            default:
                updateArticleState({"preVisible": true, step: articleInfo.step + 1})
        }
    }

    return (
        <div className="article-create-page">
            <Container className="article-container">
                <div className="container-header">
                    <span className="title"> { articleInfo.title } </span>
                </div>
                <div className="container-content">
                    <ArticleContent type={articleInfo.type} step={articleInfo.step} form={form}
                                    onChangeContent={(value) => { setContent(value) }}
                                    updateInfo={updateArticleState}
                    />
                </div>
                <div className="container-footer">
                    <div className="action">
                        { articleInfo.preVisible &&
                            <Button loading={articleInfo.preLoading} disabled={articleInfo.preDisable}
                                    iconPosition="start" icon={articleInfo.preIcon} onClick={handlePre}>
                                {articleInfo.preTitle}
                            </Button>}
                        { articleInfo.afterVisible &&
                            <Button loading={articleInfo.afterLoading} disabled={articleInfo.afterDisable}
                                    iconPosition="end" icon={articleInfo.afterIcon} onClick={handleNext} type="primary">
                                {articleInfo.afterTitle}
                            </Button>}
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default CreateArticle
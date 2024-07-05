import React, {forwardRef, useEffect, useImperativeHandle, useRef, useState} from "react";
import {Button, Form, FormInstance, Input, message, Select, SelectProps} from "antd";
import {CheckCircleOutlined, ArrowRightOutlined, ArrowLeftOutlined, SendOutlined} from "@ant-design/icons"
import TextArea from "antd/es/input/TextArea";
import "../../styles/page/article/create.scss"
import "animate.css"
import {UploadFileStatus} from "antd/lib/upload/interface";

import {createArticle} from "../../api/http/article";

import Container from "../../layout/Container";
import TextEditor from "../../components/editor/Editor";
import CumUpload from "../../components/ui/CumUpload/CumUpload";


const tagOptions: SelectProps['options'] = [
  {value: "1", label: "Html"},
  {value: "2", label: "Javascript"},
  {value: "3", label: "Css"},
  {value: "4", label: "React"},
  {value: "5", label: "Vue"},
  {value: "6", label: "Vue3"},
  {value: "7", label: "Slate"},
];
const typeOptions: SelectProps['options'] = [
  {value: 1, label: "Web Front"},
  {value: 2, label: "Golang"},
  {value: 3, label: "Interest"},
  {value: 4, label: "Life"},
];

interface ArticleContentItf {
  type: string
  step: number
  initWrite: string,
  form: FormInstance
  onChangeContent: (value: string) => void
  updateInfo: (obj: object) => void
}

const ArticleContent = forwardRef<any, ArticleContentItf>((props, ref) => {
  const {
    type, step, form, initWrite,
    onChangeContent, updateInfo
  } = props

  const handleChose = (type: string) => {
    updateInfo({type: type})
  }
  const handleContent = (content: string) => {
    onChangeContent(content)
    if (content) {
      updateInfo({contentCorrect: true})
    }
  }
  const handleUpload = (fileStatus: UploadFileStatus, fileUrl: string | undefined) => {
    if (fileStatus === "done" && fileUrl) {
      updateInfo({contentCorrect: true})
    } else {
      updateInfo({contentCorrect: false})
    }
  }

  const clearContent = () => {
    switch (step + "-" + type) {
      case "3-write":
      case "3-file":
        form.resetFields()
        break
      case "2-write":
        onChangeContent("I want to write something")
        break
      default:
        break
    }
  }
  useImperativeHandle(ref, () => ({
    ClearContent: clearContent,
  }));

  switch (step + "-" + type) {
    case "2-file":
      return (
        <div className="content-item file-content animate__animated animate__fadeInRight">
          <CumUpload url="http://127.0.0.1:9527/api/v1/common/file/upload"
                     fileType="picture"
                     onChange={handleUpload}
          />
        </div>
      );
    case "2-write":
      return (
        <div className="content-item write-content animate__animated animate__fadeInRight">
          <TextEditor onChange={handleContent} initialValue={initWrite}/>
        </div>
      );
    case "3-write":
    case "3-file":
      return (
        <div className="content-item article-form animate__animated animate__fadeInRight">
          <Form form={form} layout="vertical" size="large">
            <Form.Item label="Title" name="title" rules={[{required: true, message: 'Please input the article title'}]}>
              <Input placeholder="Please input the article title"/>
            </Form.Item>
            <Form.Item label="Type" name="type" rules={[{required: true, message: 'Please chose the type of article'}]}>
              <Select style={{width: '100%'}} placeholder="Please chose the type of article" options={typeOptions}/>
            </Form.Item>
            <Form.Item label="Tags" name="tags" rules={[{required: true, message: 'Please input the article title'}]}>
              <Select mode="tags" style={{width: '100%'}} placeholder="Please chose the tags of article"
                      options={tagOptions}/>
            </Form.Item>
            <Form.Item label="Description" name="description"
                       rules={[{required: true, message: 'Please input the article title'}]}>
              <TextArea placeholder="Please input description about article" autoSize={{minRows: 3, maxRows: 5}}/>
            </Form.Item>
            <Form.Item label="Cover" name="cover">
              <div style={{height: 200}}>
                <CumUpload url="http://127.0.0.1:9527/api/v1/common/file/upload" fileType="picture"
                           onChange={(fileStatus: UploadFileStatus, fileUrl: string | undefined) => {
                                 form.setFieldValue("cover", fileUrl)
                               }}
                />
              </div>
            </Form.Item>
          </Form>
        </div>
      );
    default:
      return (
        <div className="content-item chose-create-way animate__animated animate__fadeInRight">
          <div className={`create-way write-article ${type === "write" && "create-way_chosen"}`} onClick={() => {
            handleChose("write")
          }}>
            <div className="box-header">
              {type === "write" ? <div className="selected"><CheckCircleOutlined style={{fontSize: 16}}/></div> :
                <div className="empty-select"></div>}
            </div>
            <div className="box-content">
              <p className="way-desc">
                Some word I want to writing now
              </p>
            </div>
          </div>
          <div className={`create-way file-article ${type === "file" && "create-way_chosen"}`} onClick={() => {
            handleChose("file")
          }}>
            <div className="box-header">
              {type === "file" ? <div className="selected"><CheckCircleOutlined style={{fontSize: 16}}/></div> :
                <div className="empty-select"></div>}
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
})
const CreateArticle = () => {
  const [form] = Form.useForm()
  const articleContent = useRef<any>(null)
  const [content, setContent] = useState<string>("I want to write something")
  const [commitLoading, setCommitLoading] = useState(false)
  const [articleInfo, setArticleInfo] = useState({
    type: "",
    step: 1,
    title: "Chose a way to create your article",
    contentCorrect: false,
  })
  const [action, setAction] = useState({
    preVisible: false,
    preTitle: "Last Step",
    preDisable: false,
    preIcon: <ArrowLeftOutlined/>,

    afterVisible: true,
    afterTitle: "Next Step",
    afterDisable: true,
    afterIcon: <ArrowRightOutlined/>,
  })


  useEffect(() => {
    switch (articleInfo.step + "-" + articleInfo.type) {
      case "3-file":
      case "3-write":
        updateArticleState({
          title: "Complete your article info"
        })
        updateActionState({
          preVisible: articleInfo.step > 1,
          afterTitle: "Publish",
          afterIcon: <SendOutlined/>
        })
        break
      case "2-file":
      case "2-write":
        updateArticleState({
          title: "Some words your want to publish",
        })
        updateActionState({
          preVisible: articleInfo.step > 1,
          afterDisable: !articleInfo.contentCorrect,
          afterTitle: "Next Step",
          afterIcon: <ArrowRightOutlined/>
        })
        break;
      default:
        updateArticleState({
          title: "Chose a way to create your article",
          contentCorrect: articleInfo.type !== ""
        })
        updateActionState({
          preVisible: articleInfo.step > 1,
          afterDisable: articleInfo.type === "",
          afterTitle: "Next Step",
          afterIcon: <ArrowRightOutlined/>
        })
        break;
    }

  }, [articleInfo.type, articleInfo.step, articleInfo.contentCorrect])
  const updateArticleState = (art: object) => {
    setArticleInfo(pre => {
      return {
        ...pre,
        ...art
      }
    })
  }
  const updateActionState = (art: object) => {
    setAction(pre => {
      return {
        ...pre,
        ...art
      }
    })
  }
  const handlePre = () => {
    articleContent.current.ClearContent()
    updateArticleState({
      step: articleInfo.step === 1 ? 1 : articleInfo.step - 1
    })
  }
  const handleNext = () => {
    switch (articleInfo.step + "-" + articleInfo.type) {
      case "3-file":
      case "3-write":
        setCommitLoading(true)
        form.validateFields().then(value => {
          createArticle({
            title: value.title,
            cover: value.cover,
            description: value.description,
            content: content,
          }).then(res => {
            setCommitLoading(false)
            form.resetFields()
            message.success(res.data.message).then(() => {
              setContent("I want to write something")
              updateArticleState({
                type: "",
                step: 1,
                contentCorrect: false
              })
            })
          }).catch(err => {
            setCommitLoading(false)
          })
        }).catch(errInfo => {
          setCommitLoading(false)
        })
        break;
      case "2-file":
      case "2-write":
        updateArticleState({
          title: "Complete the article' info",
          step: articleInfo.step + 1
        })
        break;
      default:
        updateArticleState({
          contentCorrect: false,
          step: articleInfo.step === 3 ? 3 : articleInfo.step + 1
        })
    }
  }

  return (
    <div className="article-create-page">
      <Container className="article-container">
        <div className="container-header">
          <span className="title"> {articleInfo.title} </span>
        </div>
        <div className="container-content">
          <ArticleContent ref={articleContent} type={articleInfo.type} step={articleInfo.step} form={form}
                          onChangeContent={(value) => {
                            setContent(value)
                          }} initWrite={content}
                          updateInfo={updateArticleState}
          />
        </div>
        <div className="container-footer">
          <div className="action">
            {action.preVisible &&
                <Button disabled={action.preDisable}
                        iconPosition="start" icon={action.preIcon} onClick={handlePre}>
                  {action.preTitle}
                </Button>}
            {action.afterVisible &&
                <Button loading={commitLoading} disabled={action.afterDisable}
                        iconPosition="end" icon={action.afterIcon} onClick={handleNext} type="primary">
                  {action.afterTitle}
                </Button>}
          </div>
        </div>
      </Container>
    </div>
  )
}

export default CreateArticle

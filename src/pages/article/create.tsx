import { useState} from "react";
import {Button, Form, GetProp, Input, message, Select, SelectProps, Upload, UploadFile, UploadProps} from "antd";
import { SendOutlined, PlusOutlined, LoadingOutlined } from "@ant-design/icons"
import TextArea from "antd/es/input/TextArea";
import "../../styles/page/article/create.scss"

import Container from "../../layout/Container";
import TextEditor from "../../components/Editor/Editor";

import {createArticle} from "../../api/http/article";
import {uploadFile} from "../../api/http/common";

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

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

const CreateArticle = () => {

    const [sendLoading, setSendLoading] = useState(false)
    const [content, setContent] = useState<string>()
    const [form] = Form.useForm()
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState<string>();

    const getEditorContent = (content:string) => {
        setContent(content)
    }
    const handleCreate = () => {
        setLoading(true)
        createArticle({
            title: "This is test article",
            content: content
        }).then(res => {
            setSendLoading(false)
        }).catch(err => {
            setSendLoading(false)
        })
    }
    const handleInput = (e:any, field:string) => {
        form.scrollToField({ title: e.target.valueOf() })
    }
    const handleChange = (value: string[], field: string) => {
        form.scrollToField({ [field]: value })
    }
    const handleUpload: UploadProps['onChange'] = (info) => {
        setImageUrl(info.file.url)
        if (info.file.status === 'uploading') {
            setLoading(true);
            return;
        }
        if (info.file.status === 'done') {
            console.log(info.event)
            setLoading(false)
            return;
        }
        if (info.file.status === 'error') {
            setLoading(false);
            return;
        }
    };
    const beforeUpload = (file: FileType) => {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
            message.error('You can only upload JPG/PNG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error('Image must smaller than 2MB!');
        }
        return isJpgOrPng && isLt2M;
    };
    const uploadButton = (
        <button style={{ border: 0, background: 'none' }} type="button">
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div style={{ marginTop: 8 }}>Upload</div>
        </button>
    );



    return (
        <div className="article-create-page">
            <Container className="article-create-header">
                <div className="info-header">
                    The article info
                </div>
                <div className="info-form">
                    <Form form={form} layout="vertical" size="large">
                        <Form.Item label="Title" name="title" rules={[{ required: true, message: 'Please input the article title' }]}>
                            <Input placeholder="Please input the article title" onInput={(e) => {handleInput(e, "type")}} />
                        </Form.Item>
                        <Form.Item label="Type" name="type" rules={[{ required: true, message: 'Please chose the type of article' }]}>
                            <Select style={{ width: '100%' }}
                                    placeholder="Please chose the type of article"
                                    onChange={(value) => {handleChange(value, "tags")}}
                                    options={typeOptions}
                            />
                        </Form.Item>
                        <Form.Item label="Tags" name="tags" rules={[{ required: true, message: 'Please input the article title' }]}>
                            <Select mode="tags" style={{ width: '100%' }} placeholder="Please chose the tags of article"
                                onChange={(value) => {handleChange(value, "type")}}
                                options={tagOptions}
                            />
                        </Form.Item>
                        <Form.Item label="Description" name="description" rules={[{ required: true, message: 'Please input the article title' }]}>
                            <TextArea onChange={(e) => {handleInput(e, "type")}}
                                      placeholder="Please input description about article"
                                autoSize={{ minRows: 3, maxRows: 5 }}
                            />
                        </Form.Item>
                        <Form.Item label="Cover" name="Cover" rules={[{ required: true, message: 'Please input the article title' }]}>
                            <Upload name="file" listType="picture-card" className="cover-uploader"
                                    action="http://127.0.0.1:9527/api/v1/common/file/upload"
                                    beforeUpload={beforeUpload}
                                    onChange={handleUpload}
                                    showUploadList={false}
                            >
                                {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                            </Upload>
                        </Form.Item>
                    </Form>
                </div>
            </Container>
            <Container className="article-create-content" style={{marginTop: "40px"}}>
                <div className="info-header">
                    This is Create Page
                </div>
                <TextEditor getContent={getEditorContent} />
                <div>
                    <Button type="primary" icon={<SendOutlined />} loading={sendLoading} onClick={handleCreate}>
                        Publish
                    </Button>
                </div>
            </Container>
        </div>
    )
}

export default CreateArticle
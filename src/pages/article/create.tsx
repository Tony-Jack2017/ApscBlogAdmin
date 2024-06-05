import Container from "../../layout/Container";
import TextEditor from "../../components/Editor/Editor";
import {Button} from "antd";
import { SendOutlined } from "@ant-design/icons"
import {useState} from "react";
import {createArticle} from "../../api/article";

const CreateArticle = () => {

    const [sendLoading, setLoading] = useState(false)
    const [content, setContent] = useState<string>()

    const handleCreate = () => {
        console.log(content)
        setLoading(true)
        createArticle({
            title: "This is test article",
            content: content
        }).then(res => {
            setLoading(false)
        }).catch(err => {
            setLoading(false)
        })
    }

    const getEditorContent = (content:string) => {
        setContent(content)
    }

    return (
        <div className="article-create-page">
            <Container>
                This is Create Page
                <TextEditor getContent={getEditorContent} />
                <div>
                    <Button  type="primary" icon={<SendOutlined />} loading={sendLoading} onClick={handleCreate}>
                        Create The Article
                    </Button>
                </div>
            </Container>
        </div>
    )
}

export default CreateArticle
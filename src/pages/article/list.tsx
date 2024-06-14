import {Button, Input, Table, TableColumnsType} from "antd"
import {
    ReadFilled, EyeFilled, MessageFilled, SearchOutlined
} from "@ant-design/icons"

import Container from "../../layout/Container";
import "../../styles/page/article/list.scss"
import {useNavigate} from "react-router-dom";

interface DataType {
    key: React.Key;
    article_id: number
    title: string
    status: string
    readNum: number
    tags: string
    topic: string
    created_at: string | number
}

const columns: TableColumnsType<DataType> = [
    { title: 'ArticleID', dataIndex: 'article_id' },
    { title: 'ArticleTitle', dataIndex: 'title' },
    { title: 'View Number', dataIndex: 'readNum' },
    { title: 'Status', dataIndex: 'status'},
    { title: 'Tags', dataIndex: 'tags' },
    { title: 'Topic', dataIndex: 'tags' },
    { title: 'Created Time', dataIndex: 'created_at' },
    {
        title: 'Action',
        width: 150,
        render: () => {
            return(
                <a href="/create">action</a>
            )
        }
    },
];

const data: DataType[] = [];
for (let i = 0; i < 100; i++) {
    data.push({
        key: i,
        article_id: 1,
        title: `How to do yourself in the social`,
        readNum: 32,
        status: `London, Park Lane no. ${i}`,
        tags: "Javascript",
        topic: "Web Front",
        created_at: "2024-06-10 12:58:63"
    });
}

const ArticleList = () => {

    return (
        <div className="article-list-page">
            <div className="article-list-header">
                <Container isNoStyle={true} className="header-info">
                    <Container className="info-1">
                        <div className="info-main">
                            <p style={{marginBottom: "12px"}}> ARTICLE NUMBER </p>
                            <p className="num" style={{marginTop: "12px"}}>
                                <ReadFilled style={{marginRight: "12px"}} />
                                <span>3,897</span>
                            </p>
                        </div>
                        <div className="info-extra">
                            <p> 2,897<span style={{marginLeft: 10}}>Published</span> </p>
                            <p> 197<span style={{marginLeft: 10}}>Draft Box</span> </p>
                            <p> 297<span style={{marginLeft: 10}}>Archive</span> </p>
                        </div>
                    </Container>
                    <Container className="info-2">
                        <div className="info-main">
                            <p style={{marginBottom: "12px"}}> VIEW NUMBER </p>
                            <p className="num" style={{marginTop: "12px"}}>
                                <EyeFilled style={{marginRight: "12px"}} />
                                <span>3,897</span>
                            </p>
                        </div>
                        <div className="info-extra">
                            <p> 2,897<span style={{marginLeft: 10}}>Published</span> </p>
                            <p> 197<span style={{marginLeft: 10}}>Draft Box</span> </p>
                            <p> 297<span style={{marginLeft: 10}}>Archive</span> </p>
                        </div>
                    </Container>
                    <Container className="info-3">
                        <div className="info-main">
                            <p style={{marginBottom: "12px"}}> COMMENT NUMBER </p>
                            <p className="num" style={{marginTop: "12px"}}>
                                <MessageFilled style={{marginRight: "12px"}} />
                                <span>3,897</span>
                            </p>
                        </div>
                        <div className="info-extra">
                            <p> 2,897<span style={{marginLeft: 10}}>Published</span> </p>
                            <p> 197<span style={{marginLeft: 10}}>Draft Box</span> </p>
                            <p> 297<span style={{marginLeft: 10}}>Archive</span> </p>
                        </div>
                    </Container>
                </Container>
            </div>
            <div className="article-list-content">
                <Container className="list-table">
                    <div className="condition-header">
                        <p style={{fontSize: 24,fontWeight:"bold"}}>
                            Article Record Data
                        </p>
                        <Input
                            size="large"
                            width={250}
                            placeholder="Search something"
                            prefix={<SearchOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                        />
                    </div>
                    <Table
                        columns={columns}
                        dataSource={data}
                        pagination={{ pageSize: 50 }} scroll={{ y: 500 }}
                    />
                </Container>
            </div>
        </div>
    )
}

export default ArticleList
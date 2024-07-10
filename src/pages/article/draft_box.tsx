import React from "react";
import {Button, Table, TableColumnsType} from "antd";
import "../../styles/page/article/draftbox.scss"


import Container from "../../layout/Container";

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
    { title: 'Status', dataIndex: 'status'},
    { title: 'Tags', dataIndex: 'tags' },
    { title: 'Topic', dataIndex: 'tags' },
    { title: 'Created Time', dataIndex: 'created_at' },
    {
        title: 'Action',
        render: () => {
            return(
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <Button type="primary">Publish</Button>
                  <Button>Delete</Button>
              </div>
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
const DraftBox = () => {
    return (
        <div className="draftbox-list-page">
            <Container className="draftbox-list">
                <div className="list-header">
                    <span className="title">
                        This Draft Box List
                    </span>
                </div>
                <div className="list-content">
                    <Table
                        columns={columns}
                        dataSource={data}
                        pagination={{ pageSize: 50 }} scroll={{ y: 500 }}
                    />
                </div>
            </Container>
        </div>
    )
}

export default DraftBox
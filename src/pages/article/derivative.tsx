import React from "react";
import {Table, TableColumnsType} from "antd";
import "../../styles/page/article/derivative.scss"

import Container from "../../layout/Container";

interface ArticleTagType {
    key: React.Key;
    tag_id: number
    tag_name: string
    tag_icon?: string
    tag_cover?: string
    created_at: string | number
}
interface ArticleTypeType {
    key: React.Key;
    type_id: number
    type_name: string
    type_icon?: string
    type_cover?: string
    created_at: string | number
}


const columnTags: TableColumnsType<ArticleTagType> = [
    { title: 'TagID', dataIndex: 'tag_id' },
    { title: 'TagName', dataIndex: 'tag_name' },
    { title: 'TagIcon', dataIndex: 'tag_icon' },
    { title: 'TagCover', dataIndex: 'tag_cover' },
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
const columnTypes: TableColumnsType<ArticleTypeType> = [
    { title: 'TypeID', dataIndex: 'type_id' },
    { title: 'TypeName', dataIndex: 'type_name' },
    { title: 'TypeIcon', dataIndex: 'type_icon' },
    { title: 'TypeCover', dataIndex: 'type_cover' },
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

const tagData:ArticleTagType[] = [];
const typeData:ArticleTypeType[] = [];
for (let i = 0; i < 100; i++) {
    tagData.push({
        key: i,
        tag_id: 1,
        tag_name: `How to do yourself in the social`,
        tag_icon: `London, Park Lane no. ${i}`,
        tag_cover: "Javascript",
        created_at: "2024-06-10 12:58:63"
    });
}
for (let i = 0; i < 100; i++) {
    typeData.push({
        key: i,
        type_id: 1,
        type_name: `How to do yourself in the social`,
        type_icon: `London, Park Lane no. ${i}`,
        type_cover: "Javascript",
        created_at: "2024-06-10 12:58:63"
    });
}


const ArticleDerivative = () => {
    return (
        <div className="article-derivative-page">
            <Container className="article-tag-list">
                <div className="list-header">
                    <span className="title">The Article Tag List</span>
                </div>
                <div className="list-content">
                    <Table
                        columns={columnTags}
                        dataSource={tagData}
                        pagination={{ pageSize: 50 }} scroll={{ y: 500 }}
                    />
                </div>
            </Container>

            <Container className="article-type-list" style={{ marginTop: 40 }}>
                <div className="list-header">
                    <span className="title">The Article Type List</span>
                </div>
                <div className="list-content">
                    <Table
                        columns={columnTypes}
                        dataSource={typeData}
                        pagination={{ pageSize: 50 }} scroll={{ y: 500 }}
                    />
                </div>
            </Container>
        </div>
    )
}

export default ArticleDerivative
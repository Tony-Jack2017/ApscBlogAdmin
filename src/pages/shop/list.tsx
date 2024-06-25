import React from "react";
import {Table, TableColumnsType} from "antd";
import "../../styles/page/shop/list.scss"

import Container from "../../layout/Container";


interface DataType {
    key: React.Key;
    project_id: number
    project_name: string
    project_cover: string
    description: string
    created_at: string | number
}

const columns: TableColumnsType<DataType> = [
    { title: 'ProjectID', dataIndex: 'project_id' },
    { title: 'ProjectName', dataIndex: 'project_name' },
    { title: 'ProjectCover', dataIndex: 'project_cover' },
    { title: 'Description', dataIndex: 'description'},
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
        project_id: 1,
        project_name: "Apsc Builder Blog Admin",
        project_cover: "http://192.168.1.7:9000",
        description: "The admin website for apsc builder blog",
        created_at: "2024-06-10 12:58:63"
    });
}

const ShopList = () => {
    return (
        <div className="shop-list-page">
            <Container className="shop-list">
                <div className="list-header">
                    <span className="title">
                        This Shop Center
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

export default ShopList
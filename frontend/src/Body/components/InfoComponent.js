import { Table } from 'antd';
import React, { useEffect, useState } from 'react';


const columns = [
    {
        title: 'Property Name',
        dataIndex: 'name',
    },
    {
        title: 'Value',
        dataIndex: 'value',
    },
];

const InfoComponent = (props) => {
    let dataArray = [
        {
            name: 'empty',
            value: 'empty'
        }]

    const processDataInformation = () => {
        let dataToShow = props.text
        if (dataToShow !== '') {
            dataArray = []
            let jsonObject = JSON.parse(dataToShow)
            for (var key in jsonObject) {
                dataArray.push(
                    {
                        name: key,
                        value: jsonObject[key]
                    }
                )
            }
        }
    }

    processDataInformation();
    // const data = [
    //     {
    //         key: '1',
    //         name: 'Longtitude',
    //         value: props.text,
    //     },
    //     {
    //         key: '2',
    //         name: 'Latitude',
    //         value: 32,
    //     },
    //     {
    //         key: '3',
    //         name: 'Population',
    //         value: 'xxxxxxxx',
    //     },
    //
    // ]

    return (
        <div>
            <Table
                pagination={false}
                columns={columns}
                dataSource={dataArray}
                size="middle"
                bordered = "true"
            />
        </div>
    )
}

export default InfoComponent
import { Table } from 'antd';
import React, { useEffect, useState } from 'react';


const columns = [
    {
      title: 'Name',
      dataIndex: 'propName',
    },
    {
      title: 'Value',
      dataIndex: 'value',
    },
  ];

const InfoComponent = (props) => {
    let dataArray = [
        {
            propName: 'empty',
            value: 'empty'
        }
    ]

    const processDataInformation = () => {
        let dataToShow = props.text
        if (dataToShow !== '') {
            dataArray = []
            let jsonObject = JSON.parse(dataToShow)
            for (var key in jsonObject) {
                dataArray.push(
                    {
                        propName: key,
                        value: jsonObject[key]
                    }
                )
            }
        }
    }

    processDataInformation();
    // if (!dataToShow.equals('')) {
        // let jsonObject = JSON.parse(dataToShow)
    //     for (var key in jsonObject) {
    //         dataArray.push(
    //             {
    //                 propName: key,
    //                 value: jsonObject[key]
    //             }
    //         )
    //     }
    //
    //
    //     console.log(jsonObject)
    // }

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
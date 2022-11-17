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
    const data = [
        {
          key: '1',
          name: 'Longtitude',
          value: props.text,
        },
        {
          key: '2',
          name: 'Latitude',
          value: 32,
        },
        {
          key: '3',
          name: 'Population',
          value: 'xxxxxxxx',
        },

    ]

  return (
    <div>
        <Table 
        pagination={false} 
        columns={columns} 
        dataSource={data} 
        size="middle"
        bordered = "true" 
        />
    </div>

  )
}

export default InfoComponent
import React, { useState } from 'react'
import { DownloadOutlined } from '@ant-design/icons';
import { Button} from 'antd';
const Export = () => {
  const [size, setSize] = useState('medium');
  return (
    <Button type="primary" shape="round" icon={<DownloadOutlined />} size={size}>
        Export
      </Button>
  )
}

export default Export
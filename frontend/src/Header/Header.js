import React from 'react'
import { Col, Row } from 'antd';
import SearchBar from './components/SearchBar'
import { UserOutlined } from '@ant-design/icons';
import { Avatar} from 'antd';

const Header = () => {
  return (
    <div style={{marginTop:"10px"}}>
      <Row>
        <Col flex={1}>
        </Col>
        <Col flex={9}>
          <SearchBar />
        </Col>
        <Col flex={3}>
        <Avatar style={{ backgroundColor: '#448ff7' }} icon={<UserOutlined />} />
        </Col>
      </Row>
    </div>
  )
}

export default Header
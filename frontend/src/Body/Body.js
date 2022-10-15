import React from 'react'
import 'antd/dist/antd.css';
import Filter from './components/Filter';
import Toggle from './components/Toggle';
import Export from './components/Export';
import Map from './components/Map';
import { Col, Divider, Row } from 'antd';

const Body = () => {
  return (
    <Row  style={{marginLeft: "50px"}}>
      <Col>
      <Row><Filter /></Row>
      <Row style={{paddingTop:"20px"}}><Toggle /></Row>
      <Row style={{paddingTop:"20px"}}><Export /></Row>
      </Col>
      <Col><Map /></Col>
    </Row>
    
  )
}

export default Body

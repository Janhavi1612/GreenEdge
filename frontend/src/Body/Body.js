import React from 'react'
import 'antd/dist/antd.min.css';
import Filter from './components/Filter';
import Toggle from './components/Toggle';
import Export from './components/Export';
import RenderMap from './components/Map';
import RangeSlider from './components/Slider';
import { Col, Row } from 'antd';

const Body = () => {
  return (
    <Row  style={{marginLeft: "50px"}}>
      <Col>
      <Row><Filter /></Row>
      <div style={{padding:"24px"}}><RangeSlider /></div>
      <Row style={{paddingTop:"20px"}}><Toggle /></Row>
      <Row style={{paddingTop:"20px"}}><Export /></Row>
      
      </Col>
      <Col><RenderMap /></Col>
    </Row>
    
  )
}

export default Body

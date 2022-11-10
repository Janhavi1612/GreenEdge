import React, {useState} from 'react'
import 'antd/dist/antd.min.css';
import Filter from './components/Filter';
import Toggle from './components/Toggle';
import Export from './components/Export';
import RenderMap from './components/Map';
import FetchJson from "../DataService/Fetch";
import RangeSlider from './components/Slider';
import MyComponent from './components/MapComponent';
import InfoComponent from './components/InfoComponent';
import { Col, Row } from 'antd';

const Body = () => {
    const [text, setText] = useState('')
    //const filter values
  return (
    <Row  style={{marginLeft: "50px"}}>
      <Col>
      <Row><Filter /></Row>
      <div style={{padding:"24px"}}><RangeSlider /></div>
      <Row style={{paddingTop:"20px"}}><Toggle /></Row>
      <Row style={{paddingTop:"20px"}}><Export /></Row>
          <Row style={{paddingTop:"20px"}}><InfoComponent text={text} /></Row>
      </Col>
      <Col><MyComponent setText={setText}/></Col>
    </Row>

  )
}

export default Body

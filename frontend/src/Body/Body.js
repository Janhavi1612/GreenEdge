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
    const [filterData, setFilterData] = useState('initialData')
    //const filter values
  return (
    <Row  style={{marginLeft: "60px", marginTop:"20px"}}>
      <Col>
      <Row style={{ marginRight: "90px"}}><Filter setFilterData={setFilterData}/></Row>
  
          {/*<Row style={{paddingTop:"20px"}}><InfoComponent text={text} /></Row>*/}
      </Col>
      <Col>
        <Row><InfoComponent text={text} /></Row>
        <Row style={{paddingTop:"20px"}}><Export /></Row>
      </Col>
      <Col>
      <Row><MyComponent setText={setText} filterData={filterData}/></Row>
       
      </Col>
    </Row>

  )
}

export default Body

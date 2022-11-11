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
    <Row  style={{marginLeft: "50px"}}>
      <Col>
      <Row><Filter setFilterData={setFilterData}/></Row>
      <Row style={{paddingTop:"20px"}}><Export /></Row>
          {/*<Row style={{paddingTop:"20px"}}><InfoComponent text={text} /></Row>*/}
      </Col>
      <Col><MyComponent setText={setText} filterData={filterData}/></Col>
        <Col><InfoComponent text={text} /></Col>
    </Row>

  )
}

export default Body

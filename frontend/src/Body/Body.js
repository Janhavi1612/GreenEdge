import React, {useState} from 'react'
import 'antd/dist/antd.min.css';
import Filter from './components/Filter';
import Export from './components/Export';

import MyComponent from './components/MapComponent';
import InfoComponent from './components/InfoComponent';
import { Col, Row } from 'antd';

const Body = () => {
    const [text, setText] = useState('')
    const [filterData, setFilterData] = useState('initialData')
    const idString = useState("001")
    //const filter values
  return (
    <Row  style={{marginLeft: "60px", marginTop:"20px", marginRight:"60px"}}>
      <Col>
      <Row style={{ marginRight: "90px"}}><Filter setFilterData={setFilterData}/></Row>
      </Col>
      <Col >
          <Row><MyComponent setText={setText} filterData={filterData}/></Row>
      </Col>

        <Col style={{width:"30px"}}>
            <Row style={{paddingLeft:"50px", height: "520px"}}><InfoComponent text={text} /></Row>
            <Row ><Export idString={idString} filterData={filterData}/></Row>
        </Col>

    </Row>

  )
}

export default Body

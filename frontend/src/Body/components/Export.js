import React, { useState } from 'react'
import { DownloadOutlined } from '@ant-design/icons';
import { Button} from 'antd';
import { saveAs } from "file-saver";
import { Packer } from "docx";
import { DocumentCreator as DocumentGenerator } from "./data/report-generator.ts";
import * as ExportData from "../../data/locations3.json";
const Export = (idString) => {
  const [size, setSize] = useState('medium');
  const generateReportDocument = () =>{
    const documentCreator = new DocumentGenerator();
    const exportdataString = JSON.stringify(ExportData);
    const doc = documentCreator.create(exportdataString, "001");
  
    Packer.toBlob(doc).then(blob => {
      console.log(blob);
      saveAs(blob, "report.docx");
      console.log("Document created successfully");
    });
  }
  
  return (
    <div>
        {/* <Button onClick={generateWordDocument} type="primary" shape="round" icon={<DownloadOutlined />} size={size}>
        Export docx file
        </Button> */}
        <Button onClick={generateReportDocument} type="primary" shape="round" icon={<DownloadOutlined />} size={size}>
        Export report
        </Button>
    </div>

      
  )
}

export default Export
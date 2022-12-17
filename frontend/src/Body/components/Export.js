import React, { useState } from 'react'
import { DownloadOutlined } from '@ant-design/icons';
import { Button} from 'antd';
import { saveAs } from "file-saver";
import { Packer } from "docx";
import { DocumentCreator as DocumentGenerator } from "./data/report-generator.ts";
import * as ExportData from "../../data/locations_final.json";
const Export = (prop) => {
  const [size] = useState('medium');
  const generateReportDocument = () =>{
    const documentCreator = new DocumentGenerator();
    const exportdataString = JSON.stringify(ExportData);
    const doc = documentCreator.create(exportdataString, "001", prop.filterData);

    Packer.toBlob(doc).then(blob => {
      saveAs(blob, "report.docx");
      console.log("Document created successfully");
    });
  }
  
  return (
    <div>
        <Button onClick={generateReportDocument} type="primary" shape="round" icon={<DownloadOutlined />} size={size}>
        Export report
        </Button>
    </div>     
  )
}

export default Export
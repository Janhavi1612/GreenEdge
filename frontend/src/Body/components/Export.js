import React, { useState } from 'react'
import { DownloadOutlined } from '@ant-design/icons';
import { Button} from 'antd';
import { saveAs } from "file-saver";
import { Packer } from "docx";
import { experiences, education, skills, achievements } from "./data/cv-data.ts";
import { DocumentCreator as DocumentGenerator } from "./data/report-generator.ts";
import { DocumentCreator } from "./data/cv-generator.ts";
const Export = () => {
  const [size, setSize] = useState('medium');
  const generateWordDocument = () =>{
    const documentCreator = new DocumentCreator();
    const doc = documentCreator.create([
      experiences,
      education,
      skills,
      achievements
    ]);
  
    Packer.toBlob(doc).then(blob => {
      console.log(blob);
      saveAs(blob, "example.docx");
      console.log("Document created successfully");
    });
  }
  const generateReportDocument = () =>{
    const documentCreator = new DocumentGenerator();
    const doc = documentCreator.create();
  
    Packer.toBlob(doc).then(blob => {
      console.log(blob);
      saveAs(blob, "report.docx");
      console.log("Document created successfully");
    });
  }
  
  return (
    <div>
        <Button onClick={generateWordDocument} type="primary" shape="round" icon={<DownloadOutlined />} size={size}>
        Export docx file
        </Button>
        <Button onClick={generateReportDocument} type="primary" shape="round" icon={<DownloadOutlined />} size={size}>
        Export report
        </Button>
    </div>

      
  )
}

export default Export
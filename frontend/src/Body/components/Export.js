import React, { useState } from 'react'
import { DownloadOutlined } from '@ant-design/icons';
import { Button} from 'antd';
import { saveAs } from "file-saver";
import { Packer } from "docx";
import { experiences, education, skills, achievements } from "./data/cv-data.ts";
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
  
  return (
    <Button onClick={generateWordDocument} type="primary" shape="round" icon={<DownloadOutlined />} size={size}>
        Export docx file
      </Button>
  )
}

export default Export
import React, { useState } from 'react'
import { Document, Packer, Paragraph } from "docx";
import { saveAs } from "file-saver";

import {Button} from "antd";
import {DownloadOutlined} from "@ant-design/icons";
// import {DocumentCreator as DocumentGenerator} from "./data/report-generator";

function Export2(prop) {

    function generateReportDocument() {
        let toBeExported = prop.generatedFilterData;
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
            <Button onClick={generateReportDocument} type="primary" shape="round" icon={<DownloadOutlined />}>
                Export report 2
            </Button>
        </div>


    )
}

export default Export2;
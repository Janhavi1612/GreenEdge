import {
  AlignmentType,
  Document,
  HeadingLevel,
  Paragraph,
  TextRun,
  } from "docx";

import getDataPointJSON from "../../components/locationsJSON"
import { Children } from "react";
  export class DocumentCreator {
    // tslint:disable-next-line: typedef
    public createSubHeading(text: string): Paragraph {
      return new Paragraph({
        text: text,
        heading: HeadingLevel.HEADING_3,
        thematicBreak: true
      });
    }
    public create(exportDataString, id, filterData): Document {

      let selectedFilterIDs =  getDataPointJSON(filterData)
      const centers = JSON.parse(exportDataString).data.find((dp) => selectedFilterIDs.includes(dp.id)).centers;

      const document = new Document({
        sections: [
          {
            children: [
              new Paragraph({
                text: "Ideal Locations Report",
                alignment: AlignmentType.CENTER,
                heading: HeadingLevel.HEADING_1
              }),
              ...centers.map((center) =>{
                  // console.log(center.values.population);
                  const arr: Paragraph[] = [];
                  arr.push(
                    this.createSubHeading("Location")
                  );
                  arr.push(
                    new Paragraph({
                      text: "Center Coordinates",
                      heading: HeadingLevel.HEADING_4
  
                    }
                    )
                  );
                  arr.push(
                  new Paragraph({
                    alignment: AlignmentType.LEFT,
                    text: `Longitude: ${JSON.stringify(center.center.lng)}   Latitude: ${JSON.stringify(center.center.lat)}`,
                    spacing: {
                      after: 120
                  },
                  })
                  );
                  arr.push(
                    new Paragraph({
                      text: "Details",
                      heading: HeadingLevel.HEADING_4,
                      
                    }
                      
                      )
                  );
                  arr.push(
                    new Paragraph({
                      alignment: AlignmentType.LEFT,
                      text: `Fips: ${JSON.stringify(center.values.fips)}`
                    })
                    );
                  arr.push(
                    new Paragraph({
                      alignment: AlignmentType.LEFT,
                      text: `Population: ${center.values.population}`
                    })
                    );
                  arr.push(
                    new Paragraph({
                      alignment: AlignmentType.LEFT,
                      text: `Low Income: ${JSON.stringify(center.values["Low Income"])}`,
                      spacing: {
                        after: 120,
                    }
                    })
                    );
                  // console.log(arr.length);
                  return arr;
                }).reduce((prev, curr) => prev.concat(curr), [])

            ]
          }
        ]
      });
  
      return document;
      
    }
  }
  
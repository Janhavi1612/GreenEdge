import {
  AlignmentType,
    Document,
    ImageRun,
    TextRun,
    HeadingLevel,
    LevelFormat,
    Paragraph,
    UnderlineType,
    Alignment,
  } from "docx";
  const PROVIDER = "GreenEdge Technology";
  const WEBSITE_URL = "https://greenedgetech.org/";
  const DOWNLOAD_DATE = new Date().toLocaleDateString();
 
  export class DocumentCreator {
    // tslint:disable-next-line: typedef
    public create(): Document {
      const document = new Document({
        sections: [
          {
            children: [
              new Paragraph({
                text: "LOCATIONS SUMMARY",
                heading: HeadingLevel.TITLE,
                alignment: AlignmentType.CENTER,

              }),
              this.createSourceInfo(PROVIDER, WEBSITE_URL, DOWNLOAD_DATE),
              this.createHeading("Overview"),
            ]
          }
        ]
      });
  
      return document;
    }

    public createSourceInfo(
      provider: string,
      websiteUrl: string,
      date: string
    ): Paragraph {
      return new Paragraph({
        alignment: AlignmentType.LEFT,
        children: [
          new TextRun(
            `Provider: ${provider}`
          ),
          new TextRun(
            `Website: ${websiteUrl}`
          ),
          new TextRun(
            `Download Date: ${date}`
          )
        ]
      });
    }
    public createHeading(text: string): Paragraph {
      return new Paragraph({
        text: text,
        heading: HeadingLevel.HEADING_1,
        thematicBreak: true,
        alignment: AlignmentType.CENTER
      });
    }
  

  

  

  
  

  


  
  }
  
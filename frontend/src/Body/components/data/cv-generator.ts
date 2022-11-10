import {
    AlignmentType,
    Document,
    HeadingLevel,
    ImageRun,
    Packer,
    Paragraph,
    TabStopPosition,
    TabStopType,
    TextRun
  } from "docx";
  const PHONE_NUMBER = "07534563401";
  const PROFILE_URL = "https://www.linkedin.com/in/dolan1";
  const EMAIL = "docx@docx.com";
  const imageBase64Data = `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`;
  export class DocumentCreator {
    // tslint:disable-next-line: typedef
    public create([experiences, educations, skills, achivements]): Document {
      const document = new Document({
        sections: [
          {
            children: [
              new Paragraph({
                children: [
                  new ImageRun({
                    data: Uint8Array.from(atob(imageBase64Data), c =>
                      c.charCodeAt(0)
                    ),
                    transformation: {
                      width: 200,
                      height: 100
                    }
                  })
                ]
              }),
              new Paragraph({
                text: "Dolan Miu",
                heading: HeadingLevel.TITLE
              }),
              this.createContactInfo(PHONE_NUMBER, PROFILE_URL, EMAIL),
              this.createHeading("Education"),
              ...educations
                .map(education => {
                  const arr: Paragraph[] = [];
                  arr.push(
                    this.createInstitutionHeader(
                      education.schoolName,
                      `${education.startDate.year} - ${education.endDate.year}`
                    )
                  );
                  arr.push(
                    this.createRoleText(
                      `${education.fieldOfStudy} - ${education.degree}`
                    )
                  );
  
                  const bulletPoints = this.splitParagraphIntoBullets(
                    education.notes
                  );
                  bulletPoints.forEach(bulletPoint => {
                    arr.push(this.createBullet(bulletPoint));
                  });
  
                  return arr;
                })
                .reduce((prev, curr) => prev.concat(curr), []),
              this.createHeading("Experience"),
              ...experiences
                .map(position => {
                  const arr: Paragraph[] = [];
  
                  arr.push(
                    this.createInstitutionHeader(
                      position.company.name,
                      this.createPositionDateText(
                        position.startDate,
                        position.endDate,
                        position.isCurrent
                      )
                    )
                  );
                  arr.push(this.createRoleText(position.title));
  
                  const bulletPoints = this.splitParagraphIntoBullets(
                    position.summary
                  );
  
                  bulletPoints.forEach(bulletPoint => {
                    arr.push(this.createBullet(bulletPoint));
                  });
  
                  return arr;
                })
                .reduce((prev, curr) => prev.concat(curr), []),
              this.createHeading("Skills, Achievements and Interests"),
              this.createSubHeading("Skills"),
              this.createSkillList(skills),
              this.createSubHeading("Achievements"),
              ...this.createAchivementsList(achivements),
              this.createSubHeading("Interests"),
              this.createInterests(
                "Programming, Technology, Music Production, Web Design, 3D Modelling, Dancing."
              ),
              this.createHeading("References"),
              new Paragraph(
                "Dr. Dean Mohamedally Director of Postgraduate Studies Department of Computer Science, University College London Malet Place, Bloomsbury, London WC1E d.mohamedally@ucl.ac.uk"
              ),
              new Paragraph("More references upon request"),
              new Paragraph({
                text:
                  "This CV was generated in real-time based on my Linked-In profile from my personal website www.dolan.bio.",
                alignment: AlignmentType.CENTER
              })
            ]
          }
        ]
      });
  
      return document;
    }
  
    public createContactInfo(
      phoneNumber: string,
      profileUrl: string,
      email: string
    ): Paragraph {
      return new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [
          new TextRun(
            `Mobile: ${phoneNumber} | LinkedIn: ${profileUrl} | Email: ${email}`
          ),
          new TextRun({
            text: "Address: 58 Elm Avenue, Kent ME4 6ER, UK",
            break: 1
          })
        ]
      });
    }
  
    public createHeading(text: string): Paragraph {
      return new Paragraph({
        text: text,
        heading: HeadingLevel.HEADING_1,
        thematicBreak: true
      });
    }
  
    public createSubHeading(text: string): Paragraph {
      return new Paragraph({
        text: text,
        heading: HeadingLevel.HEADING_2
      });
    }
  
    public createInstitutionHeader(
      institutionName: string,
      dateText: string
    ): Paragraph {
      return new Paragraph({
        tabStops: [
          {
            type: TabStopType.RIGHT,
            position: TabStopPosition.MAX
          }
        ],
        children: [
          new TextRun({
            text: institutionName,
            bold: true
          }),
          new TextRun({
            text: `\t${dateText}`,
            bold: true
          })
        ]
      });
    }
  
    public createRoleText(roleText: string): Paragraph {
      return new Paragraph({
        children: [
          new TextRun({
            text: roleText,
            italics: true
          })
        ]
      });
    }
  
    public createBullet(text: string): Paragraph {
      return new Paragraph({
        text: text,
        bullet: {
          level: 0
        }
      });
    }
  
    // tslint:disable-next-line:no-any
    public createSkillList(skills: any[]): Paragraph {
      return new Paragraph({
        children: [new TextRun(skills.map(skill => skill.name).join(", ") + ".")]
      });
    }
  
    // tslint:disable-next-line:no-any
    public createAchivementsList(achivements: any[]): Paragraph[] {
      return achivements.map(
        achievement =>
          new Paragraph({
            text: achievement.name,
            bullet: {
              level: 0
            }
          })
      );
    }
  
    public createInterests(interests: string): Paragraph {
      return new Paragraph({
        children: [new TextRun(interests)]
      });
    }
  
    public splitParagraphIntoBullets(text: string): string[] {
      return text.split("\n\n");
    }
  
    // tslint:disable-next-line:no-any
    public createPositionDateText(
      startDate: any,
      endDate: any,
      isCurrent: boolean
    ): string {
      const startDateText =
        this.getMonthFromInt(startDate.month) + ". " + startDate.year;
      const endDateText = isCurrent
        ? "Present"
        : `${this.getMonthFromInt(endDate.month)}. ${endDate.year}`;
  
      return `${startDateText} - ${endDateText}`;
    }
  
    public getMonthFromInt(value: number): string {
      switch (value) {
        case 1:
          return "Jan";
        case 2:
          return "Feb";
        case 3:
          return "Mar";
        case 4:
          return "Apr";
        case 5:
          return "May";
        case 6:
          return "Jun";
        case 7:
          return "Jul";
        case 8:
          return "Aug";
        case 9:
          return "Sept";
        case 10:
          return "Oct";
        case 11:
          return "Nov";
        case 12:
          return "Dec";
        default:
          return "N/A";
      }
    }
  }
  
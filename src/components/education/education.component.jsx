import React from "react";

import SectionTop from "../section-top/section-top.component";
import EducationContent from "../education-content/education-content.component";

const Education = () => {
  return (
    <>
      <section id="resume" className="education">
        <div className="container">
          <SectionTop subtitle={'ประวัติการศึกษา ..............'} delay={500} title='การศึกษา & ประสบการณ์การทำงาน'/>
          <EducationContent />
        </div>
      </section>
    </>
  );
};

export default Education;

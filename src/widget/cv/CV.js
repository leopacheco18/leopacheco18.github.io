import React, { useEffect, useState } from "react";
import "./CV.css";
import { MdDownload } from "react-icons/md";
import CVPDF from "../../assets/CV.pdf";
// import html2canvas from "html2canvas";
// import jsPDF from "jspdf";
const CV = () => {
  const [margin, setMargin] = useState(0);
  const [rightSideHeight, setRightSideHeight] = useState(0);
  const sleep = (m) => new Promise((r) => setTimeout(r, m));
  const isMobile = window.innerWidth < 800;
  const skills = [
    { title: "React", stars: 5 },
    { title: "Moralis", stars: 5 },
    { title: "Hardhat", stars: 4 },
    { title: "Solidity", stars: 4 },
    { title: "Ethereum", stars: 4 },
    { title: "HTML & CSS", stars: 5 },
    { title: "Git", stars: 4 },
    { title: "Node.js", stars: 5 },
    { title: "Javascript", stars: 5 },
    { title: "Excel", stars: 3 },
  ];

  const languages = [
    { title: "Spanish", stars: 5 },
    { title: "English", stars: 4 },
  ];

  const employmentHistory = [
    {
      title: "Full Stack Developer",
      employer: "Innobix, S.A.",
      city: "Quito",
      dates: "Sep 2019 — Mar 2022",
      activity: (
        <ul>
          <li>Improve real time chat system.</li>
          <li>Migrate system from Angular to React.</li>
          <li>Laravel back-end system.</li>
        </ul>
      ),
    },
  ];

  const courses = [
    { title: "Dapps Course", institution: "Platzi", dates: "Jan 2022" },
    {
      title: "Frontend Developer Web 3",
      institution: "Platzi",
      dates: "Jan 2022",
    },
    {
      title: "Ethereum for Developers",
      institution: "Platzi",
      dates: "Jan 2022",
    },
    {
      title: "Solidity Introduction",
      institution: "Platzi",
      dates: "Mar 2022",
    },
    {
      title: "Smart Contracts Security",
      institution: "Platzi",
      dates: "Mar 2022",
    },
  ];

  useEffect(() => {
    if (margin === 0) {
      loadMargin();
    }
  }, []);

  const loadMargin = async () => {
    let index = 0;
    while (
      document.getElementsByClassName("cv-container-name")[0].offsetHeight ===
        0 ||
      index > 9
    ) {
      index++;
      await sleep(100);
    }
    let marginOffset =
      document.getElementsByClassName("cv-container-name")[0].offsetHeight;
    console.log(marginOffset);
    setMargin(marginOffset + (isMobile ? 50 : 100));

    let height = document.getElementById("id-right-content").offsetHeight;
    setRightSideHeight(height);
  };

  const getStars = (index) => {
    let circles = [];
    for (var i = 1; i <= 5; i++) {
      circles.push(
        <div
          key={i}
          className={"cv-circle " + (i <= index && "cv-circle-black")}
        ></div>
      );
    }
    return circles;
  };

  const donwloadAsPDF = () => {
    // const input = document.getElementsByClassName("cv-container")[0];
    // let lastHeight = input.offsetHeight;
    // input.style.height = rightSideHeight + margin + 20 + "px";
    // input.style.minHeight = "unset";
    // html2canvas(input).then((canvas) => {
    //   const imgData = canvas.toDataURL("image/png");
    //   input.style.height = "unset";
    //   input.style.minHeight = lastHeight;
    //   const pdf = new jsPDF("p", "mm", "a4");
    //   var width = pdf.internal.pageSize.getWidth();
    //   var height = pdf.internal.pageSize.getHeight();
    //   pdf.addImage(imgData, "JPEG", 0, 0, width, height);
    //   // pdf.output('dataurlnewwindow');
    //   pdf.save("Leonardo_Pacheco_Blockchain_Developer_CV.pdf");
    // });
    const link = document.createElement('a');
    link.href = CVPDF;
    link.setAttribute(
      'download',
      `Leonardo_Pacheco_Blockchain_Developer_CV.pdf`,
    );

    // Append to html link element page
    document.body.appendChild(link);

    // Start download
    link.click();

    // Clean up and remove the link
    link.parentNode.removeChild(link);
  };

  return (
    <>
      <div className="cv-download-button" onClick={donwloadAsPDF}>
        <MdDownload className="icon-home" />
      </div>
      <div className="cv-container">
        <div className="cv-container-name">
          <div className="cv-name">LEONARDO PACHECO</div>
          <div className="cv-job">BLOCKCHAIN DEVELOPER</div>
        </div>
        <div
          className="cv-left-side cv-padding-content"
          style={{ paddingTop: margin + "px", height: rightSideHeight + "px" }}
        >
          <div className="cv-title">DETAILS</div>
          <div className="bold cv-content">PHONE</div>
          <div className="cv-content">+593992641954</div>
          <br />
          <div className="bold cv-content">EMAIL</div>
          <div className="cv-content">leo@tobydev.com</div>

          <br />

          <div className="cv-title">SKILLS</div>
          {skills.map((item, index) => (
            <div key={index} className="skills-spacing">
              <div className="cv-content">{item.title}</div>
              <div className="cv-circles-skill">{getStars(item.stars)}</div>
            </div>
          ))}
          <br />

          <div className="cv-title">Languages</div>
          {languages.map((item, index) => (
            <div key={index} className="skills-spacing">
              <div className="cv-content">{item.title}</div>
              <div className="cv-circles-skill">{getStars(item.stars)}</div>
            </div>
          ))}
        </div>
        <div className="cv-right-side">
          <div
            className="cv-padding-content"
            id="id-right-content"
            style={{ marginTop: margin + "px" }}
          >
            <div className="cv-title">PROFILE</div>

            <div className="cv-content">
              Experienced Web 3 Developer adept in all stages of advanced web
              development. Knowledgeable in user interface, testing, and
              debugging processes. Equipped with a diverse and promising
              skill-set. Proficient in an assortment of technologies, including
              React, Angular, Solidity, Hardhat, Moralis and MySQL. Able to
              effectively self-manage during independent projects, as well as
              collaborate in a team setting.
            </div>

            <br />

            <div className="cv-title">EMPLOYMENT HISTORY</div>
            {employmentHistory.map((item, index) => (
              <div key={index}>
                <div className="cv-employment-container">
                  <div className="bold cv-subtitle">
                    {item.title}, {item.employer}
                  </div>
                  <div className="cv-content"> {item.city} </div>
                </div>
                <div className="cv-content">{item.dates}</div>
                <div className="cv-employment-description">{item.activity}</div>
              </div>
            ))}

            <br />
            <div className="cv-title">EDUCATION</div>
            <div className="cv-employment-container">
              <div className="bold cv-subtitle">
                Software Engineer, University of the Amercias
              </div>
              <div className="cv-content"> Quito </div>
            </div>
            <div className="cv-content">Mar 2018 — Jul 2022</div>

            <br />
            <div className="cv-title">COURSES</div>
            {courses.map((item, index) => (
              <div key={index}>
                <div className="bold cv-subtitle">
                  {item.title}, {item.institution}
                </div>
                <div className="cv-content">{item.dates}</div>
                <br />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CV;

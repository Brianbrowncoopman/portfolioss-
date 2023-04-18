import React from "react";
import Typical from "react-typical";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://github.com/Brianbrowncoopman">
                <i className="fa fa-github-square"></i> {/*github*/}
              </a>
              <a href="https://api.whatsapp.com/send?phone=56951397667&text=Hola,%20me%20gustaría%20enviar%20un%20mensaje%20a%20través%20de%20WhatsApp">
                <i className="fa fa-whatsapp"></i> {/*whatsapp*/}
              </a>
              <a href="https://www.linkedin.com/in/brianbrowncoopman/">
                <i className="fa fa-linkedin-square"></i> {/*linkedin*/}
              </a>
              <a href="+56951397667">
                <i className="fa fa-phone-square"></i>
                {/*numero telefono*/}
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {""}
              Hola , yo soy <span className="highlighted-text">Brian</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {""}
              <h1>
                {""}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Full Stack Developer",
                    2000,
                    "CSS",
                    2000,
                    "Pern Stack",
                    2000,
                    "JavaScript",
                    2000,
                    "React.js",
                    2000,
                    "Node.js",
                    2000,
                    "Phaser.js",
                    2000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Desarrollo de aplicaciones front-end y back-end, integrales y
                robustas.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">
              {""}
              Contratame{" "}
            </button>
            <a href="CvBrianBrown.pdf" download="Brian CvBrianBrown.pdf">
              <button className="btn highlighted-btn ">Descar C.V.</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}

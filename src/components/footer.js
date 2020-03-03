import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export default props => {
  return (
    <div class="columns">
      <div className="column is-one-third copyright is-hidden-mobile">
        Copyright 2020.
      </div>
      <div class="column column-right">
        <nav class="tabs is-right">
          <ul>
            <li>
              <a
                href="http://instagram.com/pooyaj"
                aria-label="Instagram"
                alt="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/pooyaj"
                aria-label="Twitter"
                alt="Twitter"
              >
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/pooyajaferian/"
                aria-label="LinkedIn"
                alt="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
            </li>

            <li>
              <a
                href="https://github.com/pooyaj"
                aria-label="Github"
                alt="Github"
              >
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
            </li>
            <li>
              <a
                href="mailto:pooyaj@gmail.com"
                aria-label="Email Pooya"
                alt="Email Pooya"
              >
                <FontAwesomeIcon icon={faEnvelope} size="2x" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

import React from "react";
import "./footer.css";
import { FaDiscord, FaTwitter, FaInstagram, FaTwitch } from "react-icons/fa";
import { GiSheep } from "react-icons/gi";
import useSound from "use-sound";
import sus from "../../AMONG US.mp3";
import n from "../audio/ni.mp3";
import shaun4 from "../audio/shaun4.mp3";
import giant from "../audio/Giant.mp3";

const Footer = () => {
  const [play] = useSound(sus, {
    volume: 0.5,
  });
  const [play2] = useSound(n, {
    volume: 0.5,
  });
  const [play3] = useSound(shaun4, {
    volume: 0.5,
  });
  const [play4] = useSound(giant, {
    volume: 0.5,
  });

  return (
    <footer className="footer-container">
      <div className="footer-top">
        <h2 className="footer-top-header">
          <div className="footer-top-social">Social</div>
          <ul>
            <li>
              <a
                target="_blank"
                href="https://discord.gg/EcyaRg3"
                rel="noreferrer"
              >
                <FaDiscord style={{ color: "#5865F2" }} />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://twitter.com/_Migs06"
                rel="noreferrer"
              >
                <FaTwitter style={{ color: "#1DA1F2" }} />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.instagram.com/_migs06/"
                rel="noreferrer"
              >
                <FaInstagram
                  style={{
                    color: "#FD1D1D",
                    borderRadius: "3px",
                    padding: "0.8px",
                  }}
                />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.twitch.tv/stutz06"
                rel="noreferrer"
              >
                <FaTwitch style={{ color: "#9146FF" }} />
              </a>
            </li>
          </ul>
        </h2>
        <h2>
          <div className="footer-top-contact">Contact</div>
          <GiSheep style={{ cursor: "pointer" }} onClick={play} />
          <GiSheep
            style={{ cursor: "pointer", color: "black" }}
            onClick={play2}
          />
          <GiSheep
            style={{ cursor: "pointer", color: "blue" }}
            onClick={play3}
          />
          <GiSheep
            style={{ cursor: "pointer", color: "red" }}
            onClick={play4}
          />
        </h2>
      </div>
      <div className="footer-bottom">&copy;Stutz</div>
    </footer>
  );
};

export default Footer;

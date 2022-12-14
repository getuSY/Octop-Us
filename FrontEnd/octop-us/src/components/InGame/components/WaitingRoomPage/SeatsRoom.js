import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrown } from "@fortawesome/free-solid-svg-icons";
import "./SeatsRoom.css";

export default function SeatsRoom(props) {
  let [seatInfo, setSeatInfo] = useState(props.seatInfo);
  let [throneInfo, setThroneInfo] = useState(props.throneInfo);
  console.log("room", seatInfo, throneInfo);
  return (
    <div className="col d-flex flex-column align-items-center">
      <div className="row">
        <div
          className="container col"
          style={{ opacity: seatInfo[1].opa }}
          id="num_one"
        >
          <div className="nameBox">
            <span className="nameTag">
              {seatInfo[1].nickname}{" "}
              {throneInfo[1].crown === 1 && (
                <FontAwesomeIcon icon={faCrown} className="crown" />
              )}
            </span>
          </div>
          <img
            className="octopus"
            src="images/octopus/yellow.gif"
            alt="octopus1.gif"
            id="move_octo"
          />
        </div>
        <div
          className="container col"
          style={{ opacity: seatInfo[0].opa }}
          id="num_zero"
        >
          <div className="nameBox">
            <span className="nameTag">
              {seatInfo[0].nickname}{" "}
              {throneInfo[0].crown === 1 && (
                <FontAwesomeIcon icon={faCrown} className="crown" />
              )}
            </span>
          </div>
          <img
            className="octopus"
            src="images/octopus/red.gif"
            alt="octopus0.gif"
            id="move_octo"
          />
        </div>
        <div
          className="container col"
          style={{ opacity: seatInfo[4].opa }}
          id="num_four"
        >
          <div className="nameBox">
            <span className="nameTag">
              {seatInfo[4].nickname}{" "}
              {throneInfo[4].crown === 1 && (
                <FontAwesomeIcon icon={faCrown} className="crown" />
              )}
            </span>
          </div>
          <img
            className="octopus"
            src="images/octopus/purple.gif"
            alt="octopus4.gif"
            id="move_octo"
          />
        </div>
        <div
          className="container col"
          style={{ opacity: seatInfo[5].opa }}
          id="num_five"
        >
          <div className="nameBox">
            <span className="nameTag">
              {seatInfo[5].nickname}{" "}
              {throneInfo[5].crown === 1 && (
                <FontAwesomeIcon icon={faCrown} className="crown" />
              )}
            </span>
          </div>
          <img
            className="octopus"
            src="images/octopus/babypink.gif"
            alt="octopus5.gif"
            id="move_octo"
          />
        </div>
      </div>
      <div className="row">
        <div
          className="container col"
          style={{ opacity: seatInfo[2].opa }}
          id="num_two"
        >
          <div className="nameBox">
            <span className="nameTag">
              {seatInfo[2].nickname}{" "}
              {throneInfo[2].crown === 1 && (
                <FontAwesomeIcon icon={faCrown} className="crown" />
              )}
            </span>
          </div>
          <img
            className="octopus"
            src="images/octopus/green.gif"
            alt="octopus2.gif"
            id="move_octo"
          />
        </div>
        <div
          className="container col"
          style={{ opacity: seatInfo[3].opa }}
          id="num_thr"
        >
          <div className="nameBox">
            <span className="nameTag">
              {seatInfo[3].nickname}{" "}
              {throneInfo[3].crown === 1 && (
                <FontAwesomeIcon icon={faCrown} className="crown" />
              )}
            </span>
          </div>
          <img
            className="octopus"
            src="images/octopus/mint.gif"
            alt="octopus3.gif"
            id="move_octo"
          />
        </div>
        <div
          className="container col"
          style={{ opacity: seatInfo[7].opa }}
          id="num_svn"
        >
          <div className="nameBox">
            <span className="nameTag">
              {seatInfo[7].nickname}{" "}
              {throneInfo[7].crown === 1 && (
                <FontAwesomeIcon icon={faCrown} className="crown" />
              )}
            </span>
          </div>
          <img
            className="octopus"
            src="images/octopus/blue.gif"
            alt="octopus6.gif"
            id="move_octo"
          />
        </div>
        <div
          className="container col"
          style={{ opacity: seatInfo[6].opa }}
          id="num_six"
        >
          <div className="nameBox">
            <span className="nameTag">
              {seatInfo[6].nickname}{" "}
              {throneInfo[6].crown === 1 && (
                <FontAwesomeIcon icon={faCrown} className="crown" />
              )}
            </span>
          </div>
          <img
            className="octopus"
            src="images/octopus/violet.gif"
            alt="octopus7.gif"
            id="move_octo"
          />
        </div>
      </div>
    </div>
  );
}

import React, { useState, useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./InGame.css";
import axios from "axios";
import OpenViduComponent from "./openVidu/OpenViduComponent";
import exitRoom from "../../features/waiting/exitRoom";
import ClickStart from "../../features/waiting/ClickStart";
import {
  updateRoomId,
  updateUserList,
  updateRoomChief,
} from "../../features/waiting/waitSlice";

import MP_btn1 from "../../effect/MP_btn1.mp3";

const InGame = () => {
  const [sessionName, setSessionName] = useState(
    document.location.pathname.slice(1)
  );
  const [roomName, setRoomName] = useState("RoomA");
  const [hostName, setHostName] = useState("HostA");
  const navigate = useNavigate();
  const { roomId } = useSelector((state) => state.wait);
  const { userList } = useSelector((state) => state.wait);
  const { userInfo } = useSelector((state) => state.user);
  const { roomChief } = useSelector((state) => state.wait);
  const { personNum } = useSelector((state) => state.wait);
  const { roomPw } = useSelector((state) => state.wait);
  const { isPrivate } = useSelector((state) => state.wait);
  const { gameTime } = useSelector((state) => state.wait);


  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    const tmpSessions =
      location.pathname !== undefined ? location.pathname : "SessionA";
    getRoomName();
    setSessionName(tmpSessions);
  }, [location]);

  async function getRoomName() {
    const { data } = await axios.get(
      `/rooms/detail/roomid${location.pathname}`
    );
    setRoomName(data.roomName);
    setHostName(data.roomChief);
  }
  const GameStartClickBtn = async () => {
    try {
      setSessionName(sessionName);
      ClickStart(roomId, userList, userInfo.userName);
      setTimeout(() => {
        chatRef.current.ovref.current.gameNotice();
      }, 1000);
      setPage(1);
    } catch (error) {
      console.log(error);
    }
    setPage(1);
  };

  const clickBtnGame = (e) => {
    setGameNum(0);
    const startTimer = setTimeout(() => {
      if (e === 1) {
        clickBtnFish();
      } else if (e === 2) {
        clickBtnShark();
      }
    }, 4000); // 여기 수정 v
    return () => clearTimeout(startTimer);
  };
  const clickBtnFish = (e) => {
    setGameNum(1);
  };
  const clickBtnShark = (e) => {
    setGameNum(2);
  };
  const chatRef = useRef();

  const clickExitBtn = async () => {
    var audio = new Audio(MP_btn1);
    audio.volume = 0.2; // 여기
    audio.play();
    await exitRoom(roomId, userInfo.userName);
    await chatRef.current.ovref.current.exitNotice();
    await chatRef.current.leaveSession();
    navigate("/main");
    dispatch(updateRoomId(""));
    dispatch(updateRoomChief(""));
    dispatch(updateUserList([]));
  };

  return (
    <div>
      <div id="parent-div">
        <div
          // className="m-4"
          className="mt-4"
        >
          {/* <RoundComponent gameNum={gameNum} /> */}
          <OpenViduComponent
            onClickBtn={GameStartClickBtn}
            clickExitBtn={clickExitBtn}
            selectGame={clickBtnGame}
            sessionName={sessionName}
            roomName={roomName}
            ref={chatRef}
            host={hostName}
            personNum={personNum}
            roomId={roomId}
            roomChief={roomChief}
            isPrivate={isPrivate}
            roomPw={roomPw}
            gameTime={gameTime}
          />
        </div>
      </div>
    </div>
  );
};

export default InGame;

import React from "react";
import Chating from "./chating";
import Link from "next/link";
const Chat = () => {
  const handelCloseChat = () => {
    const chat = document.getElementById("chat");
    chat.classList.remove("chat-show");
  };
  const fullScreenChat = () => {
    const fullScreen = document.getElementById("chat");
    fullScreen.classList.toggle("full-screen");
  };
  return (
    <div>
      <div class="form-container" id="chat">
        <div className="chat-title">
          <div className="close">
            <p
              className="closed "
              onClick={handelCloseChat}
              title="close chat! :("
            ></p>
            <p
              className="full-screen-chat"
              onClick={fullScreenChat}
              title="full screen chat! :)"
            ></p>
          </div>

          <section>
            <img src="/ayman.png" alt="" width={35} /> <h3>ايمن حيدر</h3>
          </section>
          <section>
            <h2> Message</h2>
          </section>
          <section>
            <p>متصل الان</p>
          </section>
        </div>
        <hr />
        <Chating />
        <div className="chatio">
          <input type="text" placeholder="Message " />
          <button type="submit" class="btn">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;

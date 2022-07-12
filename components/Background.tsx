import React from "react";

export default function Background() {
  return (
    <>
      <style jsx>
        {`
          @keyframes move {
            100% {
              transform: translate3d(0, 0, 1px) rotate(360deg);
            }
          }

          .background {
            position: fixed;
            width: 100vw;
            height: 100vh;
            top: 0;
            left: 0;
            background: #141518;
            overflow: hidden;
            z-index: 1;
          }

          .background span {
            width: 20vmin;
            height: 20vmin;
            border-radius: 20vmin;
            backface-visibility: hidden;
            position: absolute;
            animation: move;
            animation-duration: 23;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
          }

          .background span:nth-child(0) {
            color: #f8b032;
            top: 42%;
            left: 64%;
            animation-duration: 105s;
            animation-delay: -42s;
            transform-origin: -6vw 5vh;
            box-shadow: -40vmin 0 5.933271666176279vmin currentColor;
          }
          .background span:nth-child(1) {
            color: #d2d82f;
            top: 76%;
            left: 77%;
            animation-duration: 182s;
            animation-delay: -38s;
            transform-origin: -7vw 18vh;
            box-shadow: 40vmin 0 5.49746524544334vmin currentColor;
          }
          .background span:nth-child(2) {
            color: #d2d82f;
            top: 70%;
            left: 69%;
            animation-duration: 216s;
            animation-delay: -257s;
            transform-origin: 19vw 12vh;
            box-shadow: -40vmin 0 5.495278850150772vmin currentColor;
          }
          .background span:nth-child(3) {
            color: #d2d82f;
            top: 10%;
            left: 79%;
            animation-duration: 28s;
            animation-delay: -166s;
            transform-origin: -5vw -22vh;
            box-shadow: -40vmin 0 5.849827491257919vmin currentColor;
          }
          .background span:nth-child(4) {
            color: #d2d82f;
            top: 74%;
            left: 21%;
            animation-duration: 194s;
            animation-delay: -227s;
            transform-origin: -10vw 15vh;
            box-shadow: 40vmin 0 5.300446128621665vmin currentColor;
          }
          .background span:nth-child(5) {
            color: #f8b032;
            top: 22%;
            left: 19%;
            animation-duration: 104s;
            animation-delay: -111s;
            transform-origin: 25vw 4vh;
            box-shadow: -40vmin 0 5.874167764302928vmin currentColor;
          }
          .background span:nth-child(6) {
            color: #d2d82f;
            top: 39%;
            left: 57%;
            animation-duration: 33s;
            animation-delay: -49s;
            transform-origin: 1vw 14vh;
            box-shadow: -40vmin 0 5.441303994417201vmin currentColor;
          }
          .background span:nth-child(7) {
            color: #d2d82f;
            top: 5%;
            left: 25%;
            animation-duration: 9s;
            animation-delay: -168s;
            transform-origin: 14vw -18vh;
            box-shadow: -40vmin 0 5.654100926336616vmin currentColor;
          }
          .background span:nth-child(8) {
            color: #d91b5d;
            top: 52%;
            left: 89%;
            animation-duration: 167s;
            animation-delay: -133s;
            transform-origin: -17vw 0vh;
            box-shadow: -40vmin 0 5.152367768959071vmin currentColor;
          }
          .background span:nth-child(9) {
            color: #d91b5d;
            top: 55%;
            left: 4%;
            animation-duration: 124s;
            animation-delay: -192s;
            transform-origin: -12vw -7vh;
            box-shadow: 40vmin 0 5.820437873717343vmin currentColor;
          }
          .background span:nth-child(10) {
            color: #d91b5d;
            top: 20%;
            left: 13%;
            animation-duration: 30s;
            animation-delay: -24s;
            transform-origin: 2vw -1vh;
            box-shadow: 40vmin 0 5.442799271322444vmin currentColor;
          }
          .background span:nth-child(11) {
            color: #d91b5d;
            top: 7%;
            left: 56%;
            animation-duration: 183s;
            animation-delay: -251s;
            transform-origin: 21vw 13vh;
            box-shadow: 40vmin 0 5.074048069944072vmin currentColor;
          }
          .background span:nth-child(12) {
            color: #2ca7e0;
            top: 100%;
            left: 77%;
            animation-duration: 165s;
            animation-delay: -179s;
            transform-origin: -20vw -10vh;
            box-shadow: 40vmin 0 5.134830413922845vmin currentColor;
          }
          .background span:nth-child(13) {
            color: #f8b032;
            top: 90%;
            left: 44%;
            animation-duration: 145s;
            animation-delay: -90s;
            transform-origin: -16vw -4vh;
            box-shadow: -40vmin 0 5.044809970729626vmin currentColor;
          }
          .background span:nth-child(14) {
            color: #d2d82f;
            top: 58%;
            left: 65%;
            animation-duration: 141s;
            animation-delay: -178s;
            transform-origin: -5vw 24vh;
            box-shadow: -40vmin 0 5.152362906117691vmin currentColor;
          }
          .background span:nth-child(15) {
            color: #d2d82f;
            top: 69%;
            left: 16%;
            animation-duration: 248s;
            animation-delay: -181s;
            transform-origin: -15vw 9vh;
            box-shadow: 40vmin 0 5.858131557740562vmin currentColor;
          }
          .background span:nth-child(16) {
            color: #2ca7e0;
            top: 44%;
            left: 78%;
            animation-duration: 32s;
            animation-delay: -205s;
            transform-origin: 7vw 21vh;
            box-shadow: -40vmin 0 5.85624117509581vmin currentColor;
          }
          .background span:nth-child(17) {
            color: #d91b5d;
            top: 50%;
            left: 9%;
            animation-duration: 274s;
            animation-delay: -238s;
            transform-origin: 0vw 22vh;
            box-shadow: 40vmin 0 5.745251201006388vmin currentColor;
          }
          .background span:nth-child(18) {
            color: #d91b5d;
            top: 7%;
            left: 96%;
            animation-duration: 83s;
            animation-delay: -185s;
            transform-origin: -22vw 14vh;
            box-shadow: -40vmin 0 5.0452283359458825vmin currentColor;
          }
          .background span:nth-child(19) {
            color: #d2d82f;
            top: 64%;
            left: 17%;
            animation-duration: 225s;
            animation-delay: -22s;
            transform-origin: 0vw 5vh;
            box-shadow: 40vmin 0 5.61373323185152vmin currentColor;
          }
        `}
      </style>
      <div
        className="background"
        style={{
          opacity: "0.5",
        }}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </>
  );
}

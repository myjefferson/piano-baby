import { stringify } from "querystring";
import * as React from "react";
import keysAction from "../keysAction";
import { Main, Piano } from "./style/styles";

//Images
import imageHeadPiano from '../images/head-piano.png';

const handleNote = (note: string) => {
  let song = new Audio(`../../sounds/${note}.ogg`);
  song.volume = 0.3;
  song.play();
};

const repeatKeysPressed: any = {};
document.addEventListener("keydown", (event) => {
  const code = event.key.toLocaleLowerCase();
  //Press Once
  if (repeatKeysPressed[code] === false) return;
  repeatKeysPressed[code] = false;

  if (keysAction.find((key) => key.code === code)) {
    handleNote(keysAction.find((key) => key.code === code).src);
  }
});

document.addEventListener("keyup", (event) => {
  repeatKeysPressed[event.key] = true;
});

// markup
const IndexPage = () => {
  return (
    <Main>
      <title>Piano Baby</title>

      <Piano>
        <div>
          <img src={imageHeadPiano} className="imageHeadPiano"/>
        </div>
        <div className="note-buttons">
          <button onMouseDown={() => handleNote("note_a")} className="note_a">
            <p className="keyButton">A</p> <p className="note">Dó</p>
          </button>
          <button onMouseDown={() => handleNote("note_b")} className="note_b">
            <p className="keyButton">S</p> <p className="note">Rè</p>
          </button>
          <button onMouseDown={() => handleNote("note_c")} className="note_c">
            <p className="keyButton">D</p> <p className="note">Mi</p>
          </button>
          <button onMouseDown={() => handleNote("note_d")} className="note_d">
            <p className="keyButton">F</p> <p className="note">Fa</p>
          </button>
          <button onMouseDown={() => handleNote("note_e")} className="note_e">
            <p className="keyButton">G</p> <p className="note">Sol</p>
          </button>
          <button onMouseDown={() => handleNote("note_f")} className="note_f">
            <p className="keyButton">H</p> <p className="note">La</p>
          </button>
          <button onMouseDown={() => handleNote("note_g")} className="note_g">
            <p className="keyButton">J</p> <p className="note">Si</p>
          </button>
          <button onMouseDown={() => handleNote("note_h")} className="note_h">
            <p className="keyButton">K</p> <p className="note">Dó</p>
          </button>
        </div>
      </Piano>
    </Main>
  );
};

export default IndexPage;

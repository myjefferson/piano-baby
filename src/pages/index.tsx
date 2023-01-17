import React, {useEffect} from "react";
import keysAction from "../keysAction";
import Main from "./style/Main";
import Piano from "./style/Piano"

//Images
import imageHeadPiano from '../images/head-piano.png';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'person-info': PersonInfoProps
    }
  }
}

interface PersonInfoProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
  heading: string,
  subHeading: string,
  size?: string
}

// markup
const IndexPage = () => {
  useEffect(() => {
    //Preload notes
    keysAction.map(note => new Audio(`../../sounds/${note.src}.ogg`))
  },[])
  
  const handleNote = (note: string | any) => {
    let song = new Audio(`../../sounds/${note}.ogg`);
    song.volume = 0.6;
    song.play();
  };

  const repeatKeysPressed: any = {};
  React.useEffect(() => {
      document.addEventListener("keydown", (event) => {
        const code = event.key.toLocaleLowerCase();
        //Press Once
        if (repeatKeysPressed[code] === false) return;
        repeatKeysPressed[code] = false;
      
        if (keysAction.find((key) => key.code === code)) {
          const keySrc = keysAction.find(key => key.code.toLocaleLowerCase() === code)
          handleNote(keySrc?.src);
        }
      });
      
      document.addEventListener("keyup", (event) => {
        repeatKeysPressed[event.key] = true;
      });
  }, [])

  return (
    <Main>
      <title>Piano Baby</title>

      <Piano>
        <div>
          <img src={imageHeadPiano} className="imageHeadPiano" alt="Header Piano"/>
        </div>
        <div className="note-buttons">
          <button type="button" onMouseDown={() => handleNote("note_a")} className="note_a">
            <p className="keyButton">A</p> <p className="note">Dó</p>
          </button>
          <button type="button" onMouseDown={() => handleNote("note_b")} className="note_b">
            <p className="keyButton">S</p> <p className="note">Rè</p>
          </button>
          <button type="button" onMouseDown={() => handleNote("note_c")} className="note_c">
            <p className="keyButton">D</p> <p className="note">Mi</p>
          </button>
          <button type="button" onMouseDown={() => handleNote("note_d")} className="note_d">
            <p className="keyButton">F</p> <p className="note">Fa</p>
          </button>
          <button type="button" onMouseDown={() => handleNote("note_e")} className="note_e">
            <p className="keyButton">G</p> <p className="note">Sol</p>
          </button>
          <button type="button" onMouseDown={() => handleNote("note_f")} className="note_f">
            <p className="keyButton">H</p> <p className="note">La</p>
          </button>
          <button type="button" onMouseDown={() => handleNote("note_g")} className="note_g">
            <p className="keyButton">J</p> <p className="note">Si</p>
          </button>
          <button type="button" onMouseDown={() => handleNote("note_h")} className="note_h">
            <p className="keyButton">K</p> <p className="note">Dó</p>
          </button>
        </div>
      </Piano>
    </Main>
  );
};

export default IndexPage;

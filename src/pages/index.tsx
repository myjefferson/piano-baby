import { stringify } from "querystring";
import * as React from "react"
import keysAction from "../keysAction"
import { Main, Piano } from './style/styles'

const handleNote = (note: string) =>{
  let song = new Audio(`${note}`);
  song.play();
}

const repeatKeysPressed: any = {};
document.addEventListener('keydown', (event) => {
  const code = event.key.toLocaleLowerCase();
  //Press Once
  if(repeatKeysPressed[code] === false) return;
  repeatKeysPressed[code] = false;

  if(keysAction.find(key => key.code === code)){
    handleNote(keysAction.find(key => key.code === code).src);
  }
})

document.addEventListener('keyup', (event) => {
  repeatKeysPressed[event.key] = true;
})

// markup
const IndexPage = () => {
  return (
    <Main>
      <title>Piano Baby</title>

      <Piano>
        <button onMouseDown={() => handleNote("../../sounds/note-c.ogg")}>Dó <p>A</p></button>
        <button onMouseDown={() => handleNote("../../sounds/note-c.ogg")}>Rè <p>S</p></button>
        <button onMouseDown={() => handleNote("../../sounds/note-c.ogg")}>Mi <p>D</p></button>
        <button onMouseDown={() => handleNote("../../sounds/note-c.ogg")}>Fa <p>F</p></button>
        <button onMouseDown={() => handleNote("../../sounds/note-c.ogg")}>Sol <p>G</p></button>
        <button onMouseDown={() => handleNote("../../sounds/note-c.ogg")}>La <p>H</p></button>
        <button onMouseDown={() => handleNote("../../sounds/note-c.ogg")}>Si <p>J</p></button>
        <button onMouseDown={() => handleNote("../../sounds/note-c.ogg")}>Dó <p>K</p></button>
      </Piano>

    </Main>
  )
}

export default IndexPage

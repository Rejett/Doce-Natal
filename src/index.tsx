import ReactDOM from "react-dom/client";
import Game from "./game";
import { Nicolau } from "./actor/player/nicolau";
import { KeyboardListener } from "./io/keyboard.events";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

window.addEventListener('load', () => {
  const santa = new Nicolau(20, window.innerHeight - 60);

  Game.addActors(santa);
  Game.start();
  
  KeyboardListener.addKeyBoardlisteners();
});
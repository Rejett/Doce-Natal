import ReactDOM from "react-dom/client";
import Game from "./game";
import { Nicolau } from "./actor/player/nicolau";
import { KeyboardListener } from "./io/keyboard.events";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

window.addEventListener('load', () => {
  
  const nicolau = new Nicolau();
  Game.addActors(nicolau);
  Game.start();
  
  KeyboardListener.addKeyBoardlisteners();
});
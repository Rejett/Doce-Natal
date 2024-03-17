import ReactDOM from "react-dom/client";
import Game from "./game";
import { Nicolau } from "./actor/player/nicolau";
import { KeyboardListener } from "./io/keyboard.events";
import { Pomba } from "./actor/enemies/pomba";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

window.addEventListener('load', () => {
  
  const nicolau = new Nicolau();
  Game.addActors(nicolau);
  const pomba = new Pomba();
  Game.addActors(pomba);
  Game.start();
  
  KeyboardListener.addKeyBoardlisteners();
});
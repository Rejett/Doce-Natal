import ReactDOM from "react-dom/client";
import { Pomba } from "./actor/enemies/pomba";
import { Nicolau } from "./actor/player/nicolau";
import Game from "./game";
import { KeyboardListener } from "./io/keyboard.events";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

window.addEventListener('load', () => {
  
  const nicolau = new Nicolau();
  Game.addActors(nicolau);
  
  setInterval(() => {
    const pomba = new Pomba();
    Game.addActors(pomba);
  }, 1000);
  
  Game.start();
  
  KeyboardListener.addKeyBoardlisteners();
});
import "./style.css";
import pageLoad from "./pageLoad";
import { eventListeners } from "./FormControllers";
import { checkProjStorage, checkStorage } from "./storage";

pageLoad();
checkProjStorage();
checkStorage();
eventListeners();

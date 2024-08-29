import { StartFunc as  BranchAssignListeners } from "./AssignListeners/EntryFile.js";
import { StartFunc as  FactorySelectListener} from "./FactorySelect/1-Button.js";

let StartFunc = ()=> {
    BranchAssignListeners();
    FactorySelectListener();
}

export {StartFunc}
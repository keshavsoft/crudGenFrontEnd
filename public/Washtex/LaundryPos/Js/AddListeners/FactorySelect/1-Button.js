import { StartFunc as FactorySelectInputId } from "../FactorySelect/2-Input.js";

const StartFunc = ()=>{
    let jVarLocalFactorySelectButtonId = document.getElementById('FactorySelectButtonId');

    if (jVarLocalFactorySelectButtonId === null === false) {
        jVarLocalFactorySelectButtonId.addEventListener("click", FactorySelectInputId)
    };
};
export {StartFunc}
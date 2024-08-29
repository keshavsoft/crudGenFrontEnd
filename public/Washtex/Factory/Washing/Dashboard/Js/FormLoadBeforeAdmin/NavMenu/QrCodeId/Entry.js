import { StartFunc as StartFuncBSTableNewUrl } from "./BSTableNewUrl.js";

const StartFunc = () => {
    let jVarLocalHtmlId = 'QrCodeId';
    let jVarlocalBSTreeId = document.getElementById(jVarLocalHtmlId);

    if (jVarlocalBSTreeId === null === false) {
        jVarlocalBSTreeId.addEventListener("click", StartFuncBSTableNewUrl);
    };
};

export { StartFunc };
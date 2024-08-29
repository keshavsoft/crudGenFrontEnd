let StartFunc = ({ inBillNumberid, inCustomerNameid, inMobileNumberid, inBookingDateid, inDeliveryDateid, inPaymentid, inGSTNoid }) => {
    jFLocalToInnerHtmlBillNumberid({ inBillNumberid });
    jFLocalToInnerHtmlCustomerNameid({ inCustomerNameid });
    jFLocalToInnerHtmlMobileNumberid({ inMobileNumberid });
    jFLocalToInnerHtmlBookingDateid({ inBookingDateid });
    jFLocalToInnerHtmlPaymentid({ inPaymentid });
    jFLocalToInnerHtmlGSTNoid({ inGSTNoid });
}

let jFLocalToInnerHtmlBillNumberid = ({ inBillNumberid }) => {
    let jVarLocalHtmlId = 'BillNumberid';
    let jVarLocalBillNumberid = document.getElementById(jVarLocalHtmlId);
    jVarLocalBillNumberid.innerHTML = inBillNumberid;
};

let jFLocalToInnerHtmlCustomerNameid = ({ inCustomerNameid }) => {
    let jVarLocalHtmlId = 'CustomerNameid';
    let jVarLocalCustomerNameid = document.getElementById(jVarLocalHtmlId);
    jVarLocalCustomerNameid.innerHTML = inCustomerNameid;
};

let jFLocalToInnerHtmlMobileNumberid = ({ inMobileNumberid }) => {
    let jVarLocalHtmlId = 'MobileNumberid';
    let jVarLocalMobileNumberid = document.getElementById(jVarLocalHtmlId);
    jVarLocalMobileNumberid.innerHTML = inMobileNumberid;
};

let jFLocalToInnerHtmlGSTNoid = ({ inGSTNoid }) => {
    let jVarLocalHtmlId = 'GSTNoid';
    let jVarLocalMobileNumberid = document.getElementById(jVarLocalHtmlId);
    jVarLocalMobileNumberid.innerHTML = inGSTNoid;
};

let jFLocalToInnerHtmlBookingDateid = ({ inBookingDateid }) => {
    let jVarLocalHtmlId = 'BookingDateid';
    let jVarLocalBookingDateid = document.getElementById(jVarLocalHtmlId);
    jVarLocalBookingDateid.innerHTML = inBookingDateid;
};

let jFLocalToInnerHtmlPaymentid = ({ inPaymentid }) => {
    let jVarLocalHtmlId = 'Paymentid';
    let jVarLocalPaymentid = document.getElementById(jVarLocalHtmlId);
    jVarLocalPaymentid.innerHTML = inPaymentid;
};

export { StartFunc };
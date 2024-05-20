let StartFunc = ({ InData }) => {
    let JVarLocal = InData.pk;
    const url = new URL(window.location.href);
    const params1 = new URLSearchParams(url.search);
    let NewURl = new URL("../VoucherItems/ShowAll.html", url);
    const new_url = new URL(`${NewURl.href}?${params1}`);
    new_url.searchParams.append('StichRef', JVarLocal);

    window.location.href = new_url.href;
};

export { StartFunc };
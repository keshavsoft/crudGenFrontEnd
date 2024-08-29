let StartFunc = async ({ inFromFetch }) => {

    let jVarLocalFetchData = inFromFetch;
    if (jVarLocalFetchData.status === 200) {
        let Responsedata = await jVarLocalFetchData.json();

        jFLocalForSuccess(Responsedata);
    }
    else {

        let jVarLocalHtmlId = 'InputPkId';
        let jVarLocalInputPkId = document.getElementById(jVarLocalHtmlId);
        let jVarLocalLength = jVarLocalInputPkId.value.trim().length;
        jVarLocalInputPkId.setSelectionRange(0, jVarLocalLength);

        Swal.fire({
            icon: 'error',
            title: `Check And Scan`,
            confirmButtonText: "ok",
        }).then((result) => {
            if (result.isConfirmed) {

                let jVarLocalHtmlId = 'InputPkId';
                let jVarLocalInputPkId = document.getElementById(jVarLocalHtmlId);
                let jVarLocalLength = jVarLocalInputPkId.value.trim().length;
                jVarLocalInputPkId.setSelectionRange(0, jVarLocalLength);
            }
        });
    }
};

let jFLocalForSuccess = (jVarLocalFetchData) => {
    const url = new URL(window.location.href);
    const params1 = new URLSearchParams(url.search);

    params1.set("NewPk", jVarLocalFetchData);
    params1.set("ShowAlert", true);
    window.location.href = `${url.origin}${url.pathname}?${params1}`;

    window.location.href = new_url.href;
};

export { StartFunc };
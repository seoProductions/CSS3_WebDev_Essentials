
function onButtonClick() {
    console.log("Button submited!");
    //

    let title_result = document.getElementById("results-title");
    let text_box = document.getElementById("textarea");

    title_result.innerHTML = text_box.value;


    // * Begin fetching data from RMP
    // *
    // *

    fetchRMP(); // invoke
    console.log("attempted to invoke");

}

async function fetchRMP() {
    const rawResponce = await fetch("test-data.json",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Accept': 'application/json',

            },
            body: JSON.stringify({ user_id: 123 }),
        });

        const content = await rawResponce.json();

        console.log("content" + JSON.stringify(content));
}
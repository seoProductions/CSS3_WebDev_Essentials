
let additional_info = []

function onButtonClick() {
    console.log("Button submited!");
    //

    setList("\n");    // clear the list
    driver();

    // * Begin fetching data from RMP
    // *
    // *


}

async function logRMP() {
    const rawResponce = await fetch("test-data.json",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Accept': 'application/json',

            }
        });

        const content = await rawResponce.json();

        console.log("content" + JSON.stringify(content));
}

async function driver() {

    let text_box = document.getElementById("textarea");

    //
    const list_responce = await fetch("test-list.json",
        {
            method: "POST",
            headers:
            {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })

    let content = await list_responce.json();

    if (content.name !== undefined)
        appendList("Name: " + content.name + "\n");
    else
        appendList("Name: N/A \n");

    if (content.id !== undefined)
        appendList("ID: " + content.id + "\n");
    else
        appendList("ID: N/A \n");

    if (content.schools_length  !== undefined &&
        content.schools         !== undefined)
    {
        appendList("\nPresent at: \n");

        for (let i = 0; i < content.schools_length; i++)
            appendList("School " + (i+1) + ": " + content.schools[i] + "\n");
    }
    else
        appendList("ID: N/A \n");

    if (content.more !== undefined) {
        appendList("");
        appendList("Additional info: ");
    }


    additional_info.push(text_box.value);

    for (let j = 0; j < additional_info.length; j++) {

        appendList(additional_info[j]);
    }
}



// Helper Functions


function updateListViaTextBox() {
    let title_result = document.getElementById("results-title");
    let text_box = document.getElementById("textarea");

    title_result.innerHTML = text_box.value;
}

function setList( value) {
    let title_result = document.getElementById("results-title");

    title_result.innerHTML = value;
}
function appendList( value) {
    let title_result = document.getElementById("results-title");

    title_result.innerHTML = title_result.innerHTML + "<br />" + value;
}
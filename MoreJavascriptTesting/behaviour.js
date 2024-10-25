
let additional_info = []

function onButtonClick() {


    initList("Professor List: ");    // clear the list

    // main code to run
    driver();

    // * Begin fetching data from RMP
    // *
    // *

    // well not for this file, but in the next test


    // remove search button
    let button = document.getElementById("send-button")
    button.remove();
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

// ****************
// Created ELEMENTS
// ****************

let info_section;
let hover_section;
function initList( value) {
    let title_result = document.getElementById("results-title");

    hover_section = document.createElement("div");
    info_section = document.createElement("div");

    // apply rating color and position hover_section
    hover_section.classList.add("rating2");
    hover_section.classList.add("popup-trigger");
    hover_section.innerText = "3.2";
    title_result.insertAdjacentElement("afterend", hover_section);

    // apply class attribute and position info_section
    info_section.style.display = "none";
    title_result.insertAdjacentElement("afterend", info_section);

    // set text
    title_result.innerText = value;

    // add event listener
    hover_section.addEventListener("mouseover", (event) => {
        console.log("hovering!");
        info_section.style.display = "block";
    });
}


function appendList( value) {

    info_section.innerHTML = info_section.innerHTML + "<br />" + value;
}

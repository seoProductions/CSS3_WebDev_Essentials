
function onButtonClick() {
    console.log("Button submited!");
    //

    let title_result = document.getElementById("results-title");
    let text_box = document.getElementById("textarea");

    title_result.innerHTML = text_box.value;
}
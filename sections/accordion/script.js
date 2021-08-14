function myClick(obj) {
    // obj.querySelector(".section__content").classList.toggle("hidden");
    let toggle = obj.querySelector(".fas");
    if (toggle.classList.contains("fa-plus")) {
        console.log("hi");
        toggle.classList.remove("fa-plus");
        toggle.classList.add("fa-minus");
    } else {
        toggle.classList.add("fa-plus");
        toggle.classList.remove("fa-minus");
    }
    let panel = obj.querySelector(".section__content");
    if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
    } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
    }
}

function click2(obj) {
    console.log(obj.nextElementSibling);
    // obj.nextElementSibling.classList.toggle("hidden");
    // if (obj.nextElementSibling.style.height === "auto") {
    //     obj.nextElementSibling.style.height = "0";
    // } else {
    //     obj.nextElementSibling.style.height = "auto";
    // }
    let panel = obj.nextElementSibling;
    if (panel.style.maxHeight !== "0px") {
        panel.style.maxHeight = 0;
    } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
    }
}

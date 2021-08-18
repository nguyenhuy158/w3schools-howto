function openCity(event, city) {
    // console.log(event.target);
    let htmlCity = document.querySelectorAll("#" + city);
    // console.log(htmlCity);
    document.querySelectorAll(".tabcontent").forEach((value) => {
        value.style.display = "none";
    });
    document.querySelectorAll(".tablinks").forEach((value) => {
        value.classList.remove("active");
    });
    event.target.classList.toggle("active");
    htmlCity.forEach((city) => {
        city.style.display = "block";
    });
}

document.querySelector("#defaultOpen").click();

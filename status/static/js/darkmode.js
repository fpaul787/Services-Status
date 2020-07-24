let toggleDarkMode = () => {

    cssToggle();

    if (window.localStorage.getItem('darkmode') == "f") {
         window.localStorage.setItem('darkmode', "t");
    } else {
        window.localStorage.setItem('darkmode', "f");
     }
  }


let cssToggle = () => {
    var slider = document.getElementById("dmslider");
    var html = document.getElementById("mainBody");
    var list = document.getElementsByTagName("i");
    var footer = document.getElementById("footer");
    var brand = document.getElementById("navBarLogo");
    var events = document.getElementsByClassName("ticket-instance");
    var tableHeader = document.getElementById("list_of_services_heading");
    var legendHeader = document.getElementById("legend_header");

    html.classList.toggle("darkmode");
    footer.classList.toggle("darkmode");
    brand.classList.toggle("darkmode");
    brand.classList.toggle("brighten");

    var currentUrl = window.location.pathname;
    if (currentUrl === "/"){
        tableHeader.classList.toggle("tableHeaderDM");
        legendHeader.classList.toggle("tableHeaderDM");
            for (let i = 0; i < list.length; i++){
                list[i].classList.toggle("darkmode");
            }

            for (let i = 0; i < events.length; i++){
                events[i].classList.toggle("list_events");
                events[i].classList.toggle("eventDarkMode");
            }
    } else if (currentUrl.includes("/subscription/")) {
        var subscriptions = document.getElementById("subscribe");
        var updateBox = document.getElementById("update");
        var buttons = document.getElementsByClassName("button-service-filter");
        update.classList.toggle("darkmode");
        update.classList.toggle("whitefont");
        subscriptions.classList.toggle("eventDarkMode");
        for (let i = 0; i < buttons.length; i++){
                buttons.classList.toggle("eventDarkMode");
        }

    } else if (currentUrl.includes("/details/")){
        var tickets = document.getElementById("ticket_info");
        tickets.classList.toggle("eventDarkMode");
    }
}

if (window.localStorage.getItem('darkmode') == "t") {
    cssToggle();
    var slide = document.getElementById("dmslider");
    slide.checked = true;
}

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
    } else if (currentUrl.includes("subscription")) {
        var subscriptions = document.getElementById("subscribe");
        var updateBox = document.getElementById("update");
        var buttons = document.getElementsByClassName("button-service-filter");

        try {
            update.classList.toggle("darkmode");
            update.classList.toggle("whitefont");
        } catch (e) {}

        try {
            subscriptions.classList.toggle("eventDarkMode");
        } catch (e) {}

    } else if (currentUrl.includes("details")){
        var tickets = document.getElementById("ticket_info");
        tickets.classList.toggle("eventDarkMode");
    } else if (currentUrl.includes("history")){ /* Service Status Page */
        var incidents_header = document.getElementById("incidents_heading");
        var incidents_data = document.getElementsByClassName("service_history_entry");
        incidents_header.classList.toggle("tableHeaderDM");
        for (let i = 0; i < incidents_data.length; i++){
                incidents_data[i].classList.toggle("darkmode");
                incidents_data[i].classList.toggle("whitefont");
            }

    }
}

if (window.localStorage.getItem('darkmode') == "t") {
    cssToggle();
    var slide = document.getElementById("dmslider");
    slide.checked = true;
}

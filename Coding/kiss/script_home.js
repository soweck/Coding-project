let sidebarToggle = -1
/*document get*/
const sidebarContent = document.getElementById('sidebar-content');
const displayedContent = document.getElementById("displayed-content");
const sidebar = document.getElementById("sidebar");
const homeContainer = document.getElementById("home-container");
const profile = document.getElementById("profile");
const notif = document.getElementById("notification");
const announcmentContent = document.getElementById("announcment--content");
const dropDownicon = document.getElementById("dropdownIcon");
const notificationContent = document.getElementById("notification--content");
const dropDownicon2 = document.getElementById("dropdownIcon2");

/*main js*/
function barClicked(x){
    x.classList.toggle("change");
    if (sidebarContent.style.display === 'block') {
        sidebarContent.style.display = 'none';
        displayedContent.style.display = "block";
    } else {
        sidebarContent.style.display = 'block';
        displayedContent.style.display = "none";
    }

    sidebar.style.width = "250px";
    homeContainer.style.paddingLeft = "250px";
    sidebarToggle ++
    if (sidebarToggle%2 != 0){
        sidebar.style.width = "40px";
        homeContainer.style.paddingLeft = "40px";
    }


}

function avatar(){
    if (window.getComputedStyle(profile).display === "block") {
        profile.style.display="none"
    } else {
        profile.style.display= "block";
        setTimeout(function() {
            document.addEventListener("click", closeAvatar);
        }, 0);
    }
}
function closeAvatar(event){
    if (!profile.contains(event.target)){
        profile.style.display = "none";
        document.removeEventListener("click", closeAvatar);
    }
}


function notification(){
    if (window.getComputedStyle(notif).display === "block") {
        notif.style.display="none"
    } else {
        notif.style.display= "block";
        setTimeout(function() {
            document.addEventListener("click", closeNotif);
        }, 0);
    }
}
function closeNotif(event){
    if (!notif.contains(event.target)){
        notif.style.display = "none";
        document.removeEventListener("click", closeNotif);
    }
}

function announcmentDropDown(){
    if(announcmentContent.style.display === "none"){
        announcmentContent.style.display = "block";
        dropDownicon.classList.remove('fa-angle-down');
        dropDownicon.classList.add('fa-angle-up');
    } else {
        dropDownicon.classList.remove('fa-angle-up');
        dropDownicon.classList.add('fa-angle-down');
        announcmentContent.style.display = "none";
    }
}
function NotificationDropDown(){
    if(notificationContent.style.display === "none"){
        notificationContent.style.display = "block";
        dropDownicon2.classList.remove('fa-angle-down');
        dropDownicon2.classList.add('fa-angle-up');
    } else {
        dropDownicon2.classList.remove('fa-angle-up');
        dropDownicon2.classList.add('fa-angle-down');
        notificationContent.style.display = "none";
    }
}

const daysTag = document.querySelector(".days"),
currentDate = document.querySelector(".current-date"),
prevNextIcon = document.querySelectorAll(".material-symbols-rounded");

// getting new date, current year and month
let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();

// storing full name of all months in array
const months = ["January", "February", "March", "April", "May", "June", "July",
              "August", "September", "October", "November", "December"];

const renderCalendar = () => {
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), // getting first day of month
    lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), // getting last date of month
    lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), // getting last day of month
    lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // getting last date of previous month
    let liTag = "";

    for (let i = firstDayofMonth; i > 0; i--) { // creating li of previous month last days
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }

    for (let i = 1; i <= lastDateofMonth; i++) { // creating li of all days of current month
        // adding active class to li if the current day, month, and year matched
        let isToday = i === date.getDate() && currMonth === new Date().getMonth() 
                     && currYear === new Date().getFullYear() ? "active" : "";
        liTag += `<li class="${isToday}">${i}</li>`;
    }

    for (let i = lastDayofMonth; i < 6; i++) { // creating li of next month first days
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`
    }
    currentDate.innerText = `${months[currMonth]} ${currYear}`; // passing current mon and yr as currentDate text
    daysTag.innerHTML = liTag;
}
renderCalendar();

function monthSelector(n){
    currMonth += n;
    if(currMonth < 0 || currMonth > 11) { 
        date = new Date(currYear, currMonth, new Date().getDate());
        currYear = date.getFullYear();
        currMonth = date.getMonth(); 
    } else {
        date = new Date(); 
    }
    renderCalendar();

}

let calendar = new Date();
let month = calendar.getMonth();
let year = calendar.getFullYear();

const calendarContainer = document.querySelector(".calendar-container");
const titleYear = document.querySelector(".title-year");
const months = document.querySelector(".meses");
const titleMonth = document.querySelector(".title-month");
const btnPreviusMonth = document.querySelector(".previus-months");
const btnNextMonth = document.querySelector(".next-months");


const monthOfYear = [   "Enero","Febrero","Marzo","Abril",
                        "Mayo","Junio","Julio","Agosto",
                        "Septiembre","Octubre","Noviembre","Diciembre"];

const showDays=()=>{
    let day = 1; 
    calendar.setDate(day);
    let siOrNot =true;
    const days = document.querySelectorAll(".num-days");
    days.forEach(element=>{
        if(siOrNot == true){
            if(element.classList.item(1) == `${calendar.getDay()}`){
                element.textContent = day;
                day++;
                calendar.setDate(day);
                if(calendar.getDate() == 1) {
                    siOrNot = false;
                    calendar.setDate(-1);
                }
            }
        }
    });
}
const clearDays=()=>{
    const days = document.querySelectorAll(".num-days");
    days.forEach(element=>{
        element.textContent = "";
    });
}

const showData=()=>{
    titleYear.textContent = calendar.getFullYear();
    titleMonth.textContent = monthOfYear[month];
    showDays();
}

const previusMonth=()=>{
    if(month>0){
        month--;
        calendar.setMonth(month);
        clearDays();
        showData();
        paintDayActual();
    };
}

const nextMonth=()=>{
    if(month<11){
        month++;
        calendar.setMonth(month);
        clearDays();
        showData();
        paintDayActual();
    };
}

const paintDayActual=()=>{
    let dayActual = new Date;
    const days = document.querySelectorAll(".num-days");
    days.forEach(element=>{
        if(element.textContent == dayActual.getDate() &&
            month == dayActual.getMonth()){
            element.classList.add("day-actual");
        }else element.classList.remove("day-actual");
    });
}

addEventListener("load",()=>{
    for(let i=0;i<6;i++){
        for(let j=0;j<7;j++){
           const div = document.createElement("div");
           div.classList.add("num-days",`${j}`);
           calendarContainer.appendChild(div);
        }
    }
    showData();
    paintDayActual();
});

btnPreviusMonth.addEventListener("click",previusMonth);
btnNextMonth.addEventListener("click",nextMonth);
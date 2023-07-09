let day = document.getElementById('day')

let month = document.getElementById('month')
let year = document.getElementById('year')
let eday = document.getElementById('eday')
let emonth = document.getElementById('emonth')
let eyear = document.getElementById('eyear')


let getage =()=>{

    let currentdate = new Date()
    let currentmonth=currentdate.getMonth()+1;
    console.log(currentdate.getFullYear());

    day.innerHTML=currentdate.getDate()-eday.value;
    month.innerHTML=currentmonth-emonth.value;
    year.innerHTML=currentdate.getFullYear()-eyear.value;
    console.log('hello');
}



eyear.addEventListener('keyup',(e)=>{
    if (e.key=='Enter') {
        getage()
    }
})

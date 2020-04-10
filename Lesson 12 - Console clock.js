/*Написать функцию, которая будет выводить текущее время
в консоль в формате HH:mm:ss. Каждую секунду консоль должна
 очищаться и в нее должно писаться текущее время.*/

function showTime(){
    let date = new Date();
    let time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

    console.log(time);
    setTimeout(console.clear(), 1000);
    setInterval(showTime, 1000);
}
showTime();
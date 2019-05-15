
var calculate = () => {
    let firstIn = $("#txtFirstInTime").val().split(":")
    let firstOut = $("#txtFirstOutTime").val().split(":")
    
    let secondtIn = $("#txtSecondInTime").val().split(":")
    let secondOut = $("#txtSecondOutTime").val().split(":")
    
    let msTotalTimeIn = new Date(2000, 0, 1, firstOut[0], firstOut[1]) - new Date(2000, 0, 1, firstIn[0], firstIn[1])
    let msTotalTimeOut = new Date(2000, 0, 1, secondOut[0], secondOut[1]) - new Date(2000, 0, 1, secondtIn[0], secondtIn[1])
    let msTotalTimeDay = msTotalTimeIn + msTotalTimeOut
    
    let totalTimeIn  = msToTime(msTotalTimeIn)
    let totalTimeOut = msToTime(msTotalTimeOut)
    let totalTimeDay = msToTime(msTotalTimeDay)
    
    let isPositive = msTotalTimeDay >= 30600000
    
    $("#lblDate").after(`
    <h3>Tempo manhã: ${totalTimeIn}</h2>
    <h3>Tempo tarde: ${totalTimeOut}</h2>
    <h2 style="color: ${isPositive ? "#11a211" : "#F00"}">Tempo total: ${totalTimeDay}</h2>
    `)
}

function msToTime(duration) {
    var milliseconds = parseInt((duration % 1000) / 100),
        seconds = Math.floor((duration / 1000) % 60),
        minutes = Math.floor((duration / (1000 * 60)) % 60),
        hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    return hours + ":" + minutes + ":" + seconds;
}

$(document).ready(() => {
    $("#CWIModalPopup_CaptionCell").click(() => alert("batata"))
}) 

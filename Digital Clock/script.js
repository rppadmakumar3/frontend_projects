function updateTime() {
    var date = new Date()
    var hour = date.getHours()
    var mins = date.getMinutes()
    var seconds = date.getSeconds()

    const hourElement = document.getElementById("hour")
    const minsElement = document.getElementById("mins")
    const secondsElement = document.getElementById("secs")

    hourElement.innerText = hour
    minsElement.innerText = mins
    secondsElement.innerText = seconds

}

setInterval(updateTime,1000)
updateTime()
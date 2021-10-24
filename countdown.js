let smallerTab
let dateSelect

const dateA = new Date("Nov 19, 2021 12:00:00")
const dateB = new Date("Nov 12, 2021 12:00:00")
const dateC = new Date("Nov 10, 2021 12:00:00")

function getDHMS() {

    getSettings()

    let nextRelease = "Pre-Load -"
    let date = dateC

    if (dateC - new Date() < 0 || dateSelect == "earlyAccess" || dateSelect == "fullRelease") {

        nextRelease = "Early Access -"
        date = dateB

        if (dateB - new Date() < 0  || dateSelect == "fullRelease") {

            nextRelease = "Full Release -"
            date = dateA

            if (dateA - new Date() < 0) {
                document.title = "SEE YOU ON THE BATTLEFIELD!"
                return
            }
        }
    }

    if (smallerTab) {nextRelease = ""}

    let dateDifference = date - new Date()

    let days = Math.floor(dateDifference / (1000 * 60 * 60 * 24))
    let hours = Math.floor((dateDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    let minutes = Math.floor((dateDifference % (1000 * 60 * 60)) / (1000 * 60))
    let seconds = Math.floor((dateDifference % (1000 * 60)) / 1000)

    document.title = `${nextRelease} ${days} : ${hours} : ${minutes} : ${seconds}`
}

function getSettings() {

    smallerTab = document.querySelector(".smallerTab").checked
    dateSelect = document.querySelector(".dateSelect").value
}

getDHMS()

setInterval(getDHMS,1000)
//setInterval(getSettings, 1000)
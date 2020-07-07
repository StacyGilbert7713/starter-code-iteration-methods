console.log(users)

const main = document.querySelector('main')

function printKata(kataNumber, object) {
    const detailsElement = document.createElement('details')
    main.append(detailsElement)
    const summaryElement = document.createElement('summary')
    summaryElement.append("KATA " + kataNumber)
    detailsElement.append(summaryElement)
    const stringifiedObject = JSON.stringify(object)
    detailsElement.append(stringifiedObject)
}

const greenEyes = users.filter(user => user.eyeColor === "green")
printKata(0, greenEyes)

const activeUser = users.filter(user => user.isActive === true)
printKata(1, activeUser)

const userEmail = users.map(user => user.email)
printKata(2, userEmail)

const ovationCompany = users.some(user => user.company === "OVATION")
printKata(3, ovationCompany)

const over38 = users.find(user => user.age > 38)
printKata(4, over38)

const over38AndActive = users
    .filter(user => user.isActive === true)
    .find(user => user.age > 38)
printKata(5, over38AndActive)

const zencoUserBalance = users
    .filter(user => user.company === "ZENCO")
    .map(user => user.balance)
printKata(6, zencoUserBalance)

const ageOfFugiatTagUsers = users
    .filter(user => user.tags
    .includes("fugiat"))
    .map(user => user.age)
printKata(7, ageOfFugiatTagUsers)

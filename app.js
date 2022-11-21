const pessoas = [
    { name: "Fabiana Araújo", age: 33 },
    { name: "Gabriel Gomes", age: 25 },
    { name: "Fernando Henrique", age: 17 },
    { name: "Ana Luiza", age: 2 },
    { name: "Geralda do Nascimento", age: 93 },
    { name: "Miguel Souza", age: 70 },
    { name: "Antonio Miguel", age: 70 }
]

const answer03 = document.querySelector('[data-js="answer-03"')
const answer04 = document.querySelector('[data-js="answer-04"')
const answer05 = document.querySelector('[data-js="answer-05"')
const answer06 = document.querySelector('[data-js="answer-06"')
const answer07 = document.querySelector('[data-js="answer-07"')

// Exercício 03
const getPersonByName = name => {
    const searchedNameInLowerCase = name.toLowerCase()
    const [searchedResult] = pessoas
        .filter(({ name }) => name.toLowerCase() === searchedNameInLowerCase)

    return searchedResult
}

const person = getPersonByName('Gabriel Gomes')
answer03.textContent = JSON.stringify(person)

// Exercício 04
const getPeopleName = () => pessoas.map(({ name }) => name)
const peopleName = getPeopleName()

answer04.textContent = JSON.stringify(peopleName)

// Exercício 05
let counter = 0
pessoas.forEach(person => {
    counter++
    person.id = counter
})

answer05.textContent = JSON.stringify(pessoas)

// Exercício 06
const allowedToDrive = pessoas.filter(({ age }) => age > 17)
answer06.textContent = JSON.stringify(allowedToDrive)

// Exercício 07

const checkAverageOfAges = () => {

    const sumOfAges = pessoas
        .reduce((accumulator, { age }) => {

            accumulator += age
            return accumulator

        }, 0)

    return Math.round(sumOfAges / pessoas.length)
}

const averageOfAges = checkAverageOfAges()
answer07.textContent = averageOfAges






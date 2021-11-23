import { getPets } from "./database.js"

const pets = getPets()

export const Pets = () => {
    let petHTML = "<ul>"

    for (const pet of pets) {
        petHTML += `<li>${pet.name}</li>`
    }

    petHTML += "</ul>"

    return petHTML
}


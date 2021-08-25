// The marketing team wants the car models listed 
// alphabetically on the website. Execute a function to 
// Sort all the car model names into alphabetical order and log
//  the results in the console as it was returned.

export const sortModels = function (inventory) {
    inventory.sort((a, b) => {
        let carA = a["car_model"].toUpperCase()
        let carB = b["car_model"].toUpperCase()
        return carA < carB ? -1 : 0
    })

    for (let i = 0; i < inventory.length; i++) {
        console.log(inventory[i]["car_model"])
    }
}
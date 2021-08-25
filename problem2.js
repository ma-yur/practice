export const lastCarDetails = function (inventory){
    let len = inventory.length
    let car = inventory[len-1]
    return (`Last car is a ${car["car_make"]} ${car['car_model']}`)
} 
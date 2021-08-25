export const carDetailsOfId = function (inventory,id){
    let car = inventory[id-1]
    return (`Car 33 is a ${car["car_year"]} ${car["car_make"]} ${car["car_model"]}`)
}


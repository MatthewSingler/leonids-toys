const toys = [
{   id: 1,
    name: "Rustler",
    maker: "Traxxas",
    ageUse: 6,
    price: 300.00,
    size: "medium"
},

{   id: 2,
    name: "Star Flyer",
    maker: "Shooter",
    ageUse: 6,
    price: 25.00,
    size: "medium"
},

 {  id: 3,
    name: "First Set",
    maker: "Ludwig",
    ageUse: 4,
    price: 225.00,
    size: "large"
 }
]
const kareoke = {
    id: 4,
    name: "Live Kareoke",
    maker: "Blamo",
    ageUse: 4,
    price: 250.00,
    size: "medium"
}

const log = {
    id: 5,
    name: "The Log",
    maker: "Acme",
    ageUse: 2,
    price: 10.00,
    size: "small"
}
toys.push(kareoke);
toys.push(log);

/*for (const toy of toys) {
    console.log(`The ${toy.name} costs ${toy.price} dollars.`)
}*/

/*for (const toy of toys) {
    toy.price = toy.price * .05 + toy.price;
    console.log(`The new price of the ${toy.name} is ${toy.price} dollars.`)
}
const toyToFind = 5

for (const toy of toys) {
    if (toy.id === toyToFind) {
        toy.price = toy.price * .05 + toy.price;
        console.log(`The ${toy.name} is made by ${toy.maker} and costs ${toy.price} dollars.`)
    }
    
}
const powderedToastMan = {
        name: "Ren and Stimpy",
        maker: "Blamo",
        ageUse: 13,
        price: 10.00,
        size: "Large"
}
const addToyToInventory = (toyObject, price) => {
    const lastIndex = toys.length - 1
    const currentLastToy = toys[lastIndex]
    const maxId = currentLastToy.id
    const idForNewToy = maxId + 1
    toyObject.id = idForNewToy
   
    toys.push(toyObject, price)
    
}
addToyToInventory(powderedToastMan, 300.00)


for (const toy of toys) {
    console.log(`The ${toy.name} is made by ${toy.maker} and costs ${toy.price} dollars.`)
    
}


const toyPrices = new Map()
price.set("Rustler", 300.00)
price.set("Star Flyer", 25.00)
price.set("First Set", 225.00)
price.set("Ren and Stimpy", 10.00)*/


const removeProduct = (itemId) => {
    for (const toy of toys) {
        if (toy.id === itemId) {
          return toys.splice(0, itemId)
        }
    }
}
removeProduct(1)
console.log(toys)
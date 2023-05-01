//problem1

//distict-Elements 

function distictSum (array1, aray2)
const distictElement = []
for (const index in array1){
    if (array2.includes(array1[index]) === false){
        distictElements.push(array1[index])
    }
}

for (const index in array2){
    if (array1.includes (array2[index]) === false){
        distictElements.push(array2[index])
    }
}
console.log(distictElements)

return distictElements.reduce ((sum, Element)=>
(sum +=element), 0)

//problem2

function dotProduct (array1,array2)
    if (array1.length !==array2.length)
    return 
    const product=[]
    for (const index in array){
        product.push(array1[index]*array2[index])
    }
    return products.reduce((sum, Element)=>
    (sum+=element),0)

console.log (dotProduct([1,2,3],[6,8,4]))

function  Orthogonal(array1,array2){
    return dotProduct(array1,array2) === 0
}
let arr =  [
    {id:1,name:"john",age:"18",profession:"developer"},
    {id:2, name:"jack",age:"20", profession:"developer"},
    {id:3, name:"karen", age:"19",profession:"admin"}
]

// Use the map function to iterate over all of the ages and make it an Int instead of the string.
console.log(arr.map(ages =>  parseInt(ages.age)))

// Use the spread operator to append into the array another object of the same structure of your choice
let arr2 = [...arr,{id:4, name:"amber", age:"24",profession:"admin"}]
console.log(arr2)

//logs out Error alert 
let errBtn = document.getElementById('showError');
const filterButton = document.getElementById('filter');
filterButton.onclick = () => error();

function error () {
    if(id=errBtn) {
        alert('Please Select Profession')
    }
}


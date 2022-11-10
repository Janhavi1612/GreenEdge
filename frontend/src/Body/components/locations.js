//Given the form input, extract the center locations and determine colors.
//Household Income: #2596be (blue)
// Unemployment : #e07b39   (orange)
// Population Density : #00cc66 (Green)

import data from "../../data/data.json"
//input we would get from form UI
let ids = ["011","021"]

//define color mapping 
let colormapping = {"01":"#e07b39","02":"#2596be","03":"#00cc66"}


//Get data of the selected ids
let filterdata = data.data.filter(item => ids.includes(item.id))

//Add color to each object
filterdata = filterdata.map(item => {
    return {...item, color:colormapping[item.id.substring(0,2)], data:item.name}
})



export default function getDatapoint(){
//console.log(filterdata)
  return(filterdata)
}




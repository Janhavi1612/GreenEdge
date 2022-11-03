//Given the form input, extract the center locations and determine colors.
//Household Income: #2596be (blue)
// Unemployment : #e07b39   (orange)
// Population Density : #00cc66 (Green)

import data from "C:\\Users\\janha\\Desktop\\Greenedge\\GreenEdge\\frontend\\src\\data\\data.json"
//input we would get from form
let ids = ["011","021"]

//define color mapping 
let colormapping = {"01":"#e07b39","02":"#2596be","03":"#00cc66"}

//circle options
const options = {
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 0.1,
    fillColor: '#FF0000',
    fillOpacity: 0.35,
    clickable: true,
    radius: 800,
  }

//Get data of the selected ids
let filterdata = data.data.filter(item => ids.includes(item.id))

//Add color to each object
filterdata = filterdata.map(item => {
    return {...item, color:colormapping[item.id.substring(0,2)]}
})

//Add color to each object
filterdata = filterdata.map(item => {
    let op = options
    op.strokeColor = colormapping[item.id.substring(0,2)]
    op.fillColor = colormapping[item.id.substring(0,2)]
    return {...item, options:op , data: item.name}
})




export default function getDatapoint(){
//console.log(filterdata)
  return(filterdata)
}




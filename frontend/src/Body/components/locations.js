import data from "../../data/data.json"
//input we would get from form UI
let ids = ["020"]


//define color mapping 

let colormapping = {"000":"#275881","001":"#4b8bbf","002":"#87b2d4",
}


//Get data of the selected ids
let filterdata = data.data.filter(item => ids.includes(item.id))


//Add color to each object
// filterdata = filterdata.map(item => {
//     return {...item, color:colormapping[item.id.substring(0,2)], data:item.name}
// })

filterdata = filterdata.map(item => {
  return {...item, color:colormapping[item.id]}
})


export default function getDatapoint(){
  return(filterdata)
}




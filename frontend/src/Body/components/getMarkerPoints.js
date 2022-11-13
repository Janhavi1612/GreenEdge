import data from "../../data/data.json"
let ids = ["030"]
//Get data of the selected ids
let filterdata = data.data.filter(item => ids.includes(item.id))

export default function getMarkers(){
      return(filterdata)
    }
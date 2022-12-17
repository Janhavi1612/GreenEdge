import data from "../../data/locations_final.json"
import filterMap from './filterIDMap'
import colorMap from "./colorMap";

function generateFilterData(selectedFilters) {
    let generatedFilterdata = data.data.filter(item => selectedFilters.includes(item.id))

    //Add color to each object
    generatedFilterdata = generatedFilterdata.map(item => {
        return {...item, color: colorMap[item.id.toString()]}
    })

    return generatedFilterdata
}

export default function getDatapoint(filters){
    let allFilters = Object.keys(filters)
    let allFilterValues = Object.values(filters)
    let selectedFilters = []

    for (let i = 0; i < allFilterValues.length; i++) {
        if (allFilterValues[i] == true) {
            //add id s of the selected filters in our list
            selectedFilters.push(filterMap[allFilters[i].toString()])
        }
    }

    return generateFilterData(selectedFilters)
}




import data from "../../data/data.json"
import filterMap from './filterIDMap'
import colorMap from "./colorMap";
const markerFilters = ['030','040']

function generateMarkerFilterData(selectedFilters) {
    let generatedFilterdata = data.data.filter(item => (selectedFilters.includes(item.id) && markerFilters.includes(item.id)))

    //Add color to each object
    generatedFilterdata = generatedFilterdata.map(item => {
        return {...item, color:colorMap[item.id]}
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

    return generateMarkerFilterData(selectedFilters)
}




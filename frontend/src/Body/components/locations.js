import data from "../../data/locations3.json"
import filterMap from './filterIDMap'
import colorMap from "./colorMap";
import {writeFile} from "fs-web/lib/core";
//input we would get from form UI
// map for varname to filter id
//
// let ids = ['011', '021']
//
// //define color mapping
// let colormapping = {"01":"#e07b39","02":"#2596be","03":"#00cc66"}
//
//
// //Get data of the selected ids
// let filterdata = data.data.filter(item => ids.includes(item.id))
//
// //Add color to each object
// filterdata = filterdata.map(item => {
//     return {...item, color:colormapping[item.id.substring(0,2)], data:item.name}
// })
//
//
// function getSelectedFilters(filters) {
//     let allFilters = Object.keys(filters)
//     let allFilterValues = Object.values(filters)
//     let selectedFilters = []
//
//     for (let i = 0; i < allFilterValues.length; i++) {
//         if (allFilterValues[i] == true) {
//             selectedFilters.push(allFilters[i])
//         }
//     }
//
//     return selectedFilters
// }


function generateFilterData(selectedFilters) {
    let generatedFilterdata = data.data.filter(item => selectedFilters.includes(item.id))

    //Add color to each object
    generatedFilterdata = generatedFilterdata.map(item => {
        //return {...item, color:colorMap[item.id.substring(0,2)], data:item.name}
        // const jsonString = JSON.stringify(item)
        // console.log(jsonString)
        // writeFile("data2.json", "dummy")
        //     .then(r => {
        //         console.log("written!")
        //     })
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




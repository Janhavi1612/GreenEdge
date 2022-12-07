import filterMap from './filterIDMap'

export default function getDatapointJSON(filters){
    let allFilters = Object.keys(filters)
    let allFilterValues = Object.values(filters)
    let selectedFilters = []

    for (let i = 0; i < allFilterValues.length; i++) {
        if (allFilterValues[i] === true) {
            //add id s of the selected filters in our list
            selectedFilters.push(filterMap[allFilters[i].toString()])
        }
    }

    return selectedFilters
}




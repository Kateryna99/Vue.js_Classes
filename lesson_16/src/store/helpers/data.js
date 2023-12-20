export function getFilteredList(dataArray, filterObj) {
    let {name,to,from} = filterObj
    if(name && !dataArray.name.toLowerCase().includes(name.toLowerCase())) return false
    if ((from  && dataArray.experience < from) ||
        (to && to > dataArray.experience)) return false

    return dataArray
}
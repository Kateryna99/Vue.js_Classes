export const weekDays = [
    {
        id:1,
        name: "Monday"
    },
    {
        id:2,
        name: "Tuesday"
    },
    {
        id:3,
        name: "Wednesday"
    },
    {
        id:4,
        name: "Thursday"
    },
    {
        id:5,
        name: "Friday"
    },
    {
        id:6,
        name: "Saturday"
    },
    {
        id:7,
        name: "Sunday"
    }
]

export const workPositions=[
    {
        id:1,
        position: 'Front-End Developer'
    },
    {
        id:2,
        position: 'UX/UI Designer'
    },
    {
        id:3,
        position: 'Back-End Developer'
    },
    {
        id:4,
        position: 'Project Manager'
    },
    {
        id:5,
        position: 'HR'
    },
    {
        id:6,
        position: 'QA'
    },
    {
        id:7,
        position: 'Manager'
    },
    {
        id:8,
        position: 'Cleaner'
    }
]

export const workers=[
    {
        id:1,
        name: 'Ivan',
        positionId: 1
    },
    {
        id:2,
        name: 'Anna',
        positionId: 4
    },
    {
        id:3,
        name: 'Alex',
        positionId: 7
    },
    {
        id:4,
        name: 'Kate',
        positionId: 2
    },
    {
        id:5,
        name: 'John',
        positionId: 5
    },
    {
        id:6,
        name: 'Bob',
        positionId: 8
    },
    {
        id:7,
        name: 'Mike',
        positionId: 3
    },
    {
        id:8,
        name: 'Kate',
        positionId: 6
    },
    {
        id:9,
        name: 'Maria',
        positionId: 1
    },
    {
        id:10,
        name: 'Vasyl',
        positionId: 4
    }
]

export const candidates=[
    {
        id:1,
        name: 'Ivan',
        positionId: 1
    },
    {
        id:2,
        name: 'Anna',
        positionId: 4
    },
    {
        id:3,
        name: 'Alex',
        positionId: 7
    },
    {
        id:4,
        name: 'Kate',
        positionId: 2
    }
]

export function gerFilteredList(item,filterObj,positionData){
    let {name,position} = filterObj

    if(name && !item.name.toLowerCase().includes(name.toLowerCase())) return false
    if(position && !positionData.toLowerCase().includes(position.toLowerCase())) return false

    return true
}

export function deleteItemFromArray(dataArr,id){
    return dataArr.filter(item=>item.id!==id)

}

export function getPositionByTitle(dataArray,position){
    return dataArray.find(item=>item.position.toLowerCase()===position.toLowerCase()).id
}

export function addDataToArray(dataArr,nameData,positionData){
    return dataArr.push(
        {
            id: new Date().getTime(),
            name: nameData,
            positionId: positionData,
        }
    )
}

export function getElementById(dataArr,id){
    return {...dataArr.find(item => item.id === id)}
}

export function getFilteredListByPosition(dataArr,position){
    if(!position) return dataArr

    return dataArr.filter(item=>item.positionId===position)
}


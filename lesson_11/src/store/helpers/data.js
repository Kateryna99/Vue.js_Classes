export const driversList = [
    {
        id: 1,
        driverName: "John",
        experience: 10
    },
    {
        id: 2,
        driverName: "Jane",
        experience: 5
    },
    {
        id: 3,
        driverName: "Bob",
        experience: 8
    },
    {
        id: 4,
        driverName: "Alice",
        experience: 12
    }
]

export function filterList(driver, filterObj) {
    const { driverName, experienceFrom, experienceTo } = filterObj

    if (driverName && !driver.driverName.toLowerCase().includes(driverName.trim().toLowerCase())) return false;

    if ((experienceFrom  && driver.experience < experienceFrom) ||
    (experienceTo && driver.experience > experienceTo)) return false

    return true
}

export const bussesList = [
    {
        id: 1,
        registerNumber: "AA345OH",
        placesAmount: 40,
    },
    {
        id: 2,
        registerNumber: "MN879PR",
        placesAmount: 35,
    },
    {
        id: 3,
        registerNumber: "KL456PO",
        placesAmount: 25,
    },
    {
        id: 4,
        registerNumber: "BH762AW",
        placesAmount: 35,
    }
]
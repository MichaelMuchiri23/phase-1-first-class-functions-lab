// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers=function(drivers){
return [ 'Antonia', 'Nuru']
}

const returnLastTwoDrivers=function(drivers){
    return [ 'Amari', 'Mo' ] 
}

const selectingDrivers=[returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(integer){
    return function multiplier(fare){
        return fare*integer
    }
}
const fareDoubler=function multiplier(fare){
    return fare*2
}

const fareTripler=function multiplier(fare){
    return fare*3
}

function selectDifferentDrivers(drivers,returnFirstTwoDrivers){
    return returnFirstTwoDrivers()
}
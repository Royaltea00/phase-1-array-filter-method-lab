// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(driversNameArr, nameStr) {
    return driversNameArr.filter(
        (matchingName) => matchingName.toLowerCase() === nameStr.toLowerCase()
    );
}
function fuzzyMatch(driversNameArr, nameStr) {
    return driversNameArr.filter(
        (match) =>
            match.toLowerCase().indexOf(nameStr.toLowerCase()) === 0
    );
}
function matchName(driversObjArr, nameStr) {
    return driversObjArr.filter((field) => field.name === nameStr);
}
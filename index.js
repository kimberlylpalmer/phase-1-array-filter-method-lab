// Code your solution here

function findMatching(collection, str) {
    return collection.filter(name => name.toLowerCase() === str.toLowerCase())
}

function fuzzyMatch(collection, str) {
    return collection.filter(name => name[0] === str[0])
}

function matchName(collection, str) {
    return collection.filter(obj => obj.name === str)
}



// function findMatching(collection, string) {
//     return collection.filter(name => name.toLowerCase() === string.toLowerCase())
// }

// function fuzzyMatch(collection, string) {
//     return collection.filter(name => name[0] === string[0])
   
// }

// function matchName(collection, string) {
//     return collection.filter(obj => obj.name === string)
// }
    


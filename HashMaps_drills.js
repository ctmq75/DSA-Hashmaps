const HashMap = require('./hashmap')





function main() {
    const MAX_LOAD_RATIO = 0.5
    const SIZE_RATIO = 3
    let lotr = new HashMap()
    lotr.set('Hobbit', 'Bilbo')
    lotr.set('Hobbit', 'Frodo')
    lotr.set('Wizard', 'Gandolf')
    lotr.set('Human', 'Aragon')
    lotr.set('Elf', 'Legolas')
    lotr.set('Maiar', 'The Necromancer')
    lotr.set('Maiar', 'Sauron')
    lotr.set('RingBearer', 'Gollum')
    lotr.set('LadyOfLight', 'Galadriel')
    lotr.set('HalfElven', 'Arwen')
    lotr.set('Ent', 'Treebeard')
    console.log(lotr)
    console.log(lotr.get('Maiar'))
    console.log(lotr.get('Hobbit'))



}

console.log('main()', main())

// 2. WhatDoesThisDo

// running this code with result in collisions as multiple items will attempt to take the same spot in array

// 3. Demonstrate understanding of Hash maps

// [null, [28, 19, 10], 20, 12, null, 5, [15, 33], null, 17]
//[null, [28, 19, 10], 20, 12, null, 5, [15, 33], null, 17]

// 4. Remove duplicates
function removeDuplicates(string) {
    const map = new Map();
    let newStr = '';
    string.split('').forEach(letter => {
        if (!map.has(letter)) {
            map.set(letter, '');
            newStr += letter;
        }
    });
    return newStr;
}

console.log('removeDuplicates(\'google\')', removeDuplicates('google'))


// 5. Any permutation a palindrome
function palindrome(str) {
    const result = new Map();
    for (let i = 0; i < str.length; i++) {

        if (!result.delete(str[i])) {
            result.set(str[i], 1);
        }
    }
    if (result.size <= 1) {
        return true;
    } return false;
}

console.log('palindrome(\'hhanna\')', palindrome('hhanna'))
console.log('palindrome(\'christopher\')', palindrome('christopher'))

// 6. Anagram grouping

function anagramGroup(arr) {
    let anagrams = new HashMap()
    let diffAnagrams = new HashMap()
    let inputAnagrams = {}
    const result = []

    for (let i=0; i<arr.length; i++) {
        inputAnagrams[arr[i]] = arr[i].split("").sort().join("")
    }
    console.log(`INPUT: `, inputAnagrams)

    for (let i in inputAnagrams) {
        anagrams.set(inputAnagrams[i], i)
        diffAnagrams.set(i, inputAnagrams[i])
    }
    console.log(`ANAGRAMS: `, anagrams)
    console.log(`DIFF ANAGRAMS: `, diffAnagrams)

    for (let i in anagrams._hashTable) {
        let newGroup = []

        for (let j in diffAnagrams._hashTable) {
            if (anagrams._hashTable[i].key === diffAnagrams._hashTable[j].value) {
                newGroup.push(diffAnagrams._hashTable[j].key)
            }
        }
        result.push(newGroup)
    }
    return result
}
console.log(`RESULTS: `, anagramGroup(['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race']))

// 7. Separate Chaining

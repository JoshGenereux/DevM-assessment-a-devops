const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test('Should return an array of same length as input', ()=>{
        let array = [1,2,3,4,5]
        let size = array.length
        expect(size).toEqual(5)
    })

    test('should actually shuffle them', ()=>{
        let array = [1,2,3,4,5]
        expect(shuffleArray(array)).not.toEqual(array)
    })
})
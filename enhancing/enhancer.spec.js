const enhancer = require('./enhancer.js');

// test away!
describe('fail', () => {
    it('runs without crashing', () => {
        enhancer.repair({ name:'item',
        durability: 2,
        enhancement: 50})
    })


})

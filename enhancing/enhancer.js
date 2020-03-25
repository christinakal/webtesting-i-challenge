module.exports = {
  succeed,
  fail,
  repair,
  get,
};

const object = {
  name:'Christina',
  durability: 2,
  enhancement: 50
}


 
function succeed(item) {
  return { ...item };
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  // accepts an item object and returns a new item with the durability restored to 100
  return item.durability = 100;
}

function get(item) {
  return { ...item };
}


console.log(repair(object))

// module.exports = function() {
//   return 'hello'
// }
// module.exports = {
//   hello: 'hello'
// }

// module.exports = {} // 最初っからこれが書かれている
module.exports.hello = 'hello' // だからこれでも良い

// exports = module.exports // さらに、これも行われている
exports.name = 'Peter' // だからこれでも良い


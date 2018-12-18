/* simple, and lite wight version of `() => {}` */
const nothing = Function.prototype

/* styling helpers */
const branch = (test, left, right = '') => (test ? left : right)
const concatenate = listOfRuleSets => listOfRuleSets.join(' ')

export { nothing, branch, concatenate }

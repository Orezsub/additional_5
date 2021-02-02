module.exports = function check(str, bracketsConfig) {
    const openedBrackets = [];
    const closedBrackets = [];
    bracketsConfig.forEach(bracket => {
        openedBrackets.push(bracket[0])
        closedBrackets.push(bracket[1])
    })
    console.log(openedBrackets, closedBrackets)
    console.log(str.split(''))
    const stack = [];
    let res = true
    str.split('').forEach(bracket => {
        if (openedBrackets.includes(bracket)) {
            if (closedBrackets.includes(bracket) && bracket === stack[stack.length - 1]) {
                stack.pop()
            }
            else {
                stack.push(bracket)
            }
        }
        else if (openedBrackets.indexOf(stack.pop()) !== closedBrackets.indexOf(bracket)) {
            res = false;
        }
    })
    console.log(stack.length, stack)
    return res && stack.length === 0
}

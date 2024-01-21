let input = ["flower", "flow", "flight"]

let strs = null
if (1 <= input.length <= 200) {
    strs = input.map(element => {
        return element.toLowerCase();
    });
}


function compareStrings(data) {
    let prefix = ''
    if (strs.length == 0) {
        prefix = ''
    } else {
        prefix = strs[0].slice(0, 2)
    }
    let message = ''
    data.forEach(element => {
        if (element.slice(0, 2) == prefix) {
            message = prefix
        } else {
            message = 'There is no common prefix among the input strings.'
        }

    });
    return message
}

console.log(compareStrings(strs));
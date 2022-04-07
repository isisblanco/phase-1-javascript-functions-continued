function saturdayFun(activity="roller-skate!") {
    console.log(activity)
    return `This Saturday, I want to ${activity}`
}

let mondayWork = function(activity="go to the office") {
    console.log(activity)
    return `This Monday, I will ${activity}`
}

function wrapAdjective(style="*") {
    return function innerFunction(adjective="special") {
        return `You are special`
    }
}
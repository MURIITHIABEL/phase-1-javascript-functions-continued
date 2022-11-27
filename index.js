// code your solution here
function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
    }
    saturdayFun()
    
    let mondayWork = function(willDo="go to the office"){
     return `This Monday, I will ${willDo}.` 
    }
    mondayWork()
    
    function wrapAdjective (style="*") {
      return function(stringOne="special"){
        return `You are ${style}${stringOne}${style}!`
      }
    }
// code your solution here

function saturdayFun(activity = "roller-skate"){
    let result = console.log(`This Saturday, I want to ${activity}!`);
    return result;
}
saturdayFun();
saturdayFun("bathe my dog");


function mondayWork(activity="go to the office"){
    let result = console.log(`This Monday, I will ${activity}`);
    return result;
}
mondayWork();
mondayWork("work from home");



function wrapAdjective(){
    return function (activity="special"){
        let firstAdj = "*"
        console.log(`You are ${firstAdj}a hard worker${firstAdj}!`);
    }
}
type expiredTimeType = {
    value: number,
    name: "year" | "day" | "hour" | "minute" | "second"
}

export const getExpiresTime = (date: Date) : string =>{
    let milliSeconds = new Date(date).getTime()
    let nowMilliSeconds = Date.now()
    let diffMilliSeconds = nowMilliSeconds - milliSeconds

    let timeHandlingArray = new Array<expiredTimeType>();

    timeHandlingArray.push({value: Math.floor(diffMilliSeconds / 1000) % 60, name: "second"})
    timeHandlingArray.push({value: Math.floor(diffMilliSeconds / 1000 / 60) % 60, name: "minute"})
    timeHandlingArray.push({value: Math.floor(diffMilliSeconds / 1000 / 60 / 60) % 24, name: "hour"})
    timeHandlingArray.push({value: Math.floor(diffMilliSeconds / 1000 / 60 / 60 / 24) % 365, name: "day"})
    timeHandlingArray.push({value: Math.floor(diffMilliSeconds / 1000 / 60 / 60 / 24 / 365) , name: "year"})


    let result = timeHandlingArray.reverse().find(x=>x.value !== 0);

    if(result === undefined){
        return "0 seconds ago";
    }

    if(result.value > 1){
        result.name += 's';
    }

    return `${result.value} ${result.name} ago`;
}
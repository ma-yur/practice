// The car lot manager needs to find out how many cars are older than the year 2000. Using the array you just obtained from the previous problem, 
// find out how many cars were made before the year 2000 and return the array of older cars and log its length.

export const olderThan2000=function(arr){
    let array =[]
    for (let i=0 ;i<arr.length;i++){
        if (arr[i]>2000){
            array.push(arr[i])
        }
    }
    return array
}



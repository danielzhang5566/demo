
//这里的task.js运行在另外一个js Runtime,相当于多开了一个线程

onmessage = function (message){
    let data = JSON.stringify(message.data);
    console.log('I got the message: ' + data);

    let result = doSomeCalculation();

    postMessage(result);
}


function doSomeCalculation() {
    // do something
    let sum = 0 ;
    for(let i = 0;i<1000000000;i++){
        sum += i;
    }
    return sum
}
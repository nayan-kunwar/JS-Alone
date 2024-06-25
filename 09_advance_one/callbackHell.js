function doSomething(callback) {
    setTimeout(() => callback('result1'), 1000);
}

function doSomethingElse(result, callback) {
    setTimeout(() => callback('result2'), 1000);
}

function doAnotherThing(result, callback) {
    setTimeout(() => callback('result3'), 1000);
}

function doFinalThing(result, callback) {
    setTimeout(() => callback('result4'), 1000);
}

doSomething(function(result) {

    doSomethingElse(result, function(newResult) {

        doAnotherThing(newResult, function(finalResult) {

            doFinalThing(finalResult, function(lastResult) {
                
                console.log('Done!', lastResult);
            });
        });
    });
});

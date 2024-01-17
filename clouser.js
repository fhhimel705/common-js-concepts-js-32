function stopWatch(){
    let counter = 0;
    return function(){
        counter ++;
        return counter;
    }
}

const watch1 = stopWatch();
watch1();

const watch2 = stopWatch();
watch2();
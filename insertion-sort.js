let arr;
function insertionSort(){
    for( let i= 0 ; i< arr.lenght ; i++){
        let current = arr[i];
        let j;
        for ( j=i-1; j >= 0 && arr[j] > current ; j-- ) {
            arr[i] = arr[j];
        }
        arr[j] = current;
    }

    return arr
}










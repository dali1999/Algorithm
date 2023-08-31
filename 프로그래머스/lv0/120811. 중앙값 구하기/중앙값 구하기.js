function solution(array) {
    const sortedArr = array.sort(function(a, b){
        return a - b;
    });
    let mid = parseInt(sortedArr.length/2);
    return array[mid];
}
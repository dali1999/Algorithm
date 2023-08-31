function solution(array) {
    const sortedArr = array.sort((a, b) => a-b);
    let mid = parseInt(sortedArr.length/2);
    return array[mid];
}
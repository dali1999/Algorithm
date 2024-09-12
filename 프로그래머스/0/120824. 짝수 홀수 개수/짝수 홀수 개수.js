function solution(num_list) {
    let evenNum = num_list.filter(v=>v%2===0).length;
    let oddNum = num_list.length - evenNum
    return [evenNum, oddNum];
}
function solution(brown, yellow) {
    const answer = [];
    const carpetSize = brown + yellow;
    // 카펫 최소 너비, 높이: 3
    for(let i=3; i<carpetSize; i++){
        let width = carpetSize/i;
        let height = i;
        
        // 카펫은 항상 가로>=세로 
        if(width<height) continue;
        
        if((width-2)*(height-2) === yellow){
            answer[0] = width;
            answer[1] = height;
        }
    }
    return answer;
}
// 상 : maps[curX-1] [curY]
// 하 : maps[curX+1] [curY]
// 좌 : maps[curX] [curY-1]
// 우 : maps[curX] [curY+1]

function solution(maps) {
    // 현재 좌표기준 상하좌우 탐색좌표 구하기 위한 보조값 배열화
    // 시계방향으로 상 우 하 좌 로 탐색하기 위함
    const dx = [-1, 0, 1, 0];
    const dy = [0, 1, 0, -1];
    
    // 게임맵과 똑같은 5x5지만 값은 false로 채워진 배열을 생성
    const visited = Array.from({length:maps.length},()=>new Array(maps[0].length).fill(false),);
    
    // 게임맵과 똑같은 5x5지만 값은 false로 채워진 배열을 생성
    const dist = Array.from({length:maps.length},()=>new Array(maps[0].length).fill(0),);
    
    const q = []; // 탐색 가능한 위치를 저장하기 위한 큐
    q.push([0, 0]); // 출발 좌표
    visited[0][0] = true; //큐에 좌표값을 넣을 때마다 기록
    dist[0][0] = 1; // 도착지의 최단거리는 1
    
    while(q.length){ // 탐색 가능한 위치가 없을 때까지 순회
        const[curX, curY] = q.shift(); //큐에서 가장 먼저 탐색해야할 위치좌표
        
        //maps[x][y] 상 우 하 좌 좌표의 x와 y값
        for(let i=0; i<4; i++){
            const x = curX + dx[i];
            const y = curY + dy[i];
        
            //좌표위치가 게임 맵 지도내에 있고,
            if(x > -1 && x <  maps.length && y > -1 && y <  maps[0].length){
                //현재 좌표로 상하좌우 중 탐색 가능한 좌표이고, 처음 방문했다면
                if(maps[x][y]===1 && !visited[x][y]){
                    //큐에 좌표값 넣어주기
                    q.push([x, y]);
                    visited[x][y] = true; // 방문했다고 기록
                    
                    //먼저 탐색하지 않았다면
                    if(dist[x][y] === 0){
                        dist[x][y] = dist[curX][curY] + 1;
                    }
                }
            }
        }
    }
    
    return dist[maps.length -1][maps[0].length -1] ? dist[maps.length - 1][maps[0].length - 1] : -1;
}
function solution(book_time) {
  book_time.sort();

  // 종료 시간이 들어갈 배열
  const room = [];

  book_time.forEach((t) => {
    const tmp = t[0].split(":");

    const startTime = Number(tmp[0]) * 60 + Number(tmp[1]);

    const idx = room.findIndex((e) => e <= startTime);

    if (idx === -1) room.push(getNextTime(t[1]));
    else room[idx] = getNextTime(t[1]);
  });
  return room.length;
}

// 다음 이용 가능 시간을 리턴해주는 함수
function getNextTime(endTime) {
  const next = endTime.split(":");
  return Number(next[0]) * 60 + Number(next[1]) + 10;
}

// ["ABACD", "BCEFD"]	["ABCD","AABB"]
function solution(keymap, targets) {
  let answer = [];

  for (let i = 0; i < targets.length; i++) {
    let target = targets[i].split("");
    let minArr = [];
 
    let isImpossible = false;
    for (let j = 0; j < target.length; j++) {
      let countArr = [];
      for (let k = 0; k < keymap.length; k++) {
        let textIdx = keymap[k].indexOf(target[j]);
        if (textIdx > -1) countArr.push(textIdx + 1);
      }
      if (countArr.length === 0) {
        isImpossible = true;
        break;
      } else {
        minArr.push(Math.min(...countArr));
      }
    }
    if (isImpossible) {
      answer.push(-1);
    } else {
      answer.push(minArr.reduce((a, b) => a + b));
    }
  }

  return answer;
}
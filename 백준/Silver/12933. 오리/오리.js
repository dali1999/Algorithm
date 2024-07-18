const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim();

const quacks = { q: 0, u: 0, a: 0, c: 0, k: 0 };

if (input.length % 5 !== 0 || input[input.length - 1] !== 'k') {
  console.log(-1);
  return;
}

let result = 0;

for (let i = 0; i < input.length; i++) {
  const str = input[i];
  quacks[str]++;

  if (
    (str === 'u' && quacks['q'] < quacks['u']) ||
    (str === 'a' && quacks['u'] < quacks['a']) ||
    (str === 'c' && quacks['a'] < quacks['c']) ||
    (str === 'k' && quacks['c'] < quacks['k'])
  ) {
    console.log(-1);
    return;
  }

  result = Math.max(result, quacks['q'] - quacks['k']);
}

console.log(result);

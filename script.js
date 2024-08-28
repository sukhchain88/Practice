function FizzBuzz(n) {
  let answer = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      answer.push("BuzzFizz");
    } else if (i % 3 === 0) {
      answer.push("Buzz");
    } else if (i % 5 === 0) {
      answer.push("Fizz");
    } else {
      answer.push(i.toString());
    }
  }
  return answer;
}

const a = 3;
console.log(FizzBuzz(a));

export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  } else if (query.toLowerCase().includes("andrew id")) {
    return (
      "Yo my andrew id exits."
    );
  } else if (query.toLowerCase().includes("what is your name")) {
    return (
      "Sweetsuro"
    );
  }

  const addMatch = query.match(/What is (\d+) plus (\d+)/);
  if (addMatch) {
    const x: number = parseInt(addMatch[1]);
    const y: number = parseInt(addMatch[2]);
    return (x+y).toString();
  }

  const largestNum = query.match(/Which of the following numbers is the largest: (\d+), (\d+), (\d+)?/);
  if (largestNum) {
    const x: number = parseInt(largestNum[1]);
    const y: number = parseInt(largestNum[2]);
    const z: number = parseInt(largestNum[3]);
    return (Math.max(x,y,z)).toString();
  }


  const squareAndCube = query.match(/Which of the following numbers is both a square and a cube: (\d+), (\d+), (\d+), (\d+), (\d+), (\d+), (\d+)?/)
  if (squareAndCube) {
    let res = "";
    for (let i = 1; i < squareAndCube.length; i++) {
      let a = parseInt(squareAndCube[i]);
      if (Number.isInteger(Math.sqrt(a))) {
        for (let j = 1; j < Math.floor(a/2); j++) {
          if (j*j*j == a) {
            res = res.concat(a.toString());
          }
        }
      }
    }
    return res;
  }

  return "";
}

var num = process.argv.slice(2);
num = Number(num);

const diceRoller = function (num) {
  let results = ``;
  for (let i = 0; i < num; i++) {
    var eachResult = ``;
    eachResult = Math.floor((Math.random() * 6) + 1);
    results += eachResult + `, `;
  }
  let lastComma = results.lastIndexOf(`, `);
  results = results.slice(0, lastComma);

  return results;

}

console.log("Rolled " + num + " dice: " + diceRoller(num));
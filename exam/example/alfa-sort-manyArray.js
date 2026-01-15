let book = "сок азбука слово бочка ";

let massivA = [];
let massivB = [];
let massivC = [];

let namebooks = book.split(' ');

for (namebook of namebooks) {
  let bukva = namebook[0];
  if (bukva == 'а') massivA.push(namebook);
  if (bukva == 'б') massivB.push(namebook);
  if (bukva == 'с') massivC.push(namebook);
}

let sortbook = [...massivA, ...massivB, ...massivC].join(' ');
console.log(sortbook);
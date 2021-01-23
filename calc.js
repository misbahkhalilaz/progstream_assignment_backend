const calculate = (requiredBottles, prices, pieces) => {
  // check boxes
  let remBottles = requiredBottles;
  let result = {
    bottles: 0,
    packs: 0,
    Box: 0,
    price: 0,
  };
  // Calc boxes
  if (pieces[2] > 0) {
    remBottles = requiredBottles % pieces[2];
    if (remBottles >= 0) {
      result.Box = (requiredBottles - remBottles) / pieces[2];
      result.price = result.price + result.Box * prices[2];
    }
  }
  // Calc packs
  if (pieces[1] > 0)
    if (remBottles % pieces[1] >= 0) {
      result.packs = (remBottles - (remBottles % pieces[1])) / pieces[1];
      result.price = result.price + result.packs * prices[1];
    }
  // Calc Bottles
  if (pieces[0] > 0) {
    if (pieces[1] > 0) remBottles %= pieces[1];
    if (pieces[2] > 0) remBottles %= pieces[2];
    else remBottles = requiredBottles;
    if (remBottles > 0) {
      result.bottles =
        remBottles < pieces[0]
          ? 1
          : remBottles % pieces[0] > 0
          ? parseInt(remBottles / pieces[0]) + 1
          : remBottles / pieces[0];
      result.price = result.price + result.bottles * prices[0];
    }
  }

  return result;
};

module.exports = calculate;

// code your solution here
function superbowlWin(array){
  const target = array.find((element) => element.result === "W");
  if (typeof target === 'undefined') {
  return undefined;
  }
  else {return target.year};
}
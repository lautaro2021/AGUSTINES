export default function separar(number: number) {
  const toString = number.toString().split("");
  if (toString.length >= 4) {
    let n = [];
    let counterArr = 0;
    for (let i = toString?.length - 1; i >= 0; i--) {
      if (counterArr === 3) {
        n.unshift(".");
      }
      n.unshift(toString[i]);
      counterArr === 3 ? (counterArr = 1) : counterArr++;
    }
    return "$" + n.join("") + ",00";
  } else {
    return "$" + toString.join("") + ",00";
  }
}

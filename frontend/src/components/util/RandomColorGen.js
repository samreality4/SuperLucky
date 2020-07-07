import randomColor from "random-color";

function RandomColorGen(dataLength) {
  const colorArray = [];
  for (let i = 1; i <= dataLength; i++) {
    let color = randomColor().hexString();
    while (colorArray.includes(color)) {
      color = randomColor().hexString();
    }
    colorArray.push(color);
  }
 console.log(colorArray);
  return colorArray;
}

export default RandomColorGen;

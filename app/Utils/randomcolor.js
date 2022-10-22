export const randomColor = () => {
    var x = Math.floor(Math.random() * 250);
    var y = Math.floor(Math.random() * 250);
    var z = Math.floor(Math.random() * 250);
    var newColor = "rgb(" + x + "," + y + "," + z + ")";
    console.log(newColor);
    document.body.style.background = newColor;
  };
let canvas = new fabric.Canvas("tshirt-canvas");

function updateTshirtImage(imageURL) {
  fabric.Image.fromURL(imageURL, function (img) {
    img.scaleToHeight(300);
    img.scaleToWidth(300);
    canvas.centerObject(img);
    canvas.add(img);
    canvas.renderAll();
  });
}

document.getElementById("tshirt-color").addEventListener(
  "change",
  function () {
    document.getElementById("tshirt-div").style.backgroundColor = this.value;
  },
  false
);

document.getElementById("tshirt-design").addEventListener(
  "change",
  function () {
    updateTshirtImage(this.value);
  },
  false
);

document.getElementById("tshirt-custompicture").addEventListener(
  "change",
  function (e) {
    var reader = new FileReader();

    reader.onload = function (event) {
      var imgObj = new Image();
      imgObj.src = event.target.result;

      imgObj.onload = function () {
        var img = new fabric.Image(imgObj);

        img.scaleToHeight(300);
        img.scaleToWidth(300);
        canvas.centerObject(img);
        canvas.add(img);
        canvas.renderAll();
      };
    };

    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
  },
  false
);

document.addEventListener(
  "keydown",
  function (e) {
    var keyCode = e.keyCode;

    if (keyCode == 46) {
      console.log("Removing selected element on Fabric.js on DELETE key !");
      canvas.remove(canvas.getActiveObject());
    }
  },
  false
);

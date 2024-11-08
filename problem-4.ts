{
  /* -------------------------------------------- */

  type Circle = { shape: "circle"; radius: number };

  type Rectangle = {
    shape: "rectangle";
    width: number;
    height: number;
  };

  type Shape = Circle | Rectangle;

  function calculateShapeArea(shape: Shape) {
    if (shape.shape === "circle") {
      return (Math.PI * shape.radius * shape.radius).toFixed(2);
    } else if (shape.shape === "rectangle") {
      return (shape.width * shape.height).toFixed(2);
    } else {
      return "This is not valid shape!";
    }
  }

  /* -------------------------------------------- */
}

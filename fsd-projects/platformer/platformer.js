$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

   function setup() {

  // TODO 1 - Enable the Grid
  toggleGrid();


  // TODO 2 - Create Platforms
createPlatform(200,600,150,12,"pink");
createPlatform(500,500,130,12,"pink");
createPlatform(100,640,100,12,"lightpink");
createPlatform(350,550,100,12,"hotpink");
createPlatform(700,450, 100,12,"pink");
createPlatform(550,370, 100,12,"lightpink");
createPlatform(470,270, 100,12,"hotpink");
    //  createPlatform(600,270, 100,12,"pink")
  // TODO 3 - Create Collectables
  createCollectable("max",395,451,300);
  createCollectable("database", 575, 283);
  createCollectable("kennedi", 500, 183);


  // TODO 4 - Create Cannons
createCannon("right", 300, 1500);
createCannon("top", 300, 2000);
createCannon("right", 350, 2000);
}


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});

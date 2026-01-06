console.log("hello!");


document.getElementById("container").innerHTML = "hello! I'm a container!!";

setTimeout(() => {
    document.getElementById("container").innerHTML = "Goodby!";
}, 5000);


// ====================================
var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene, {
  relativeInput: true
});


parallaxInstance.friction(0.2, 0.2);
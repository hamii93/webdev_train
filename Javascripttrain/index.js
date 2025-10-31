var drumnumber = document.querySelectorAll(".drum").length;

for (var i = 0; i < drumnumber; i++) {
    

document.querySelectorAll(".drum")[i].addEventListener("click", function() {
  alert('Button clicked!');
});
}
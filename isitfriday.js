var w = innerWidth;
var h = innerHeight;

function setup() {
  // Sets the screen to be 640 pixels wide and 360 pixels high
  noCanvas();
  background(255);
  var d = new Date();
  var day = d.getDay();
  if (day == 5){
    yeah();
  }
  
  else{
    nope();
  }
}

function draw() {

}


function nope() {
        var ifrm = document.createElement("iframe");
        ifrm.setAttribute("src", "https://giphy.com/tv/search/no");
        ifrm.style.width = w;
        ifrm.style.height = h;
        ifrm.style.border = "none"
        document.body.appendChild(ifrm);
    }
    
function yeah() {
        var ifrm = document.createElement("iframe");
        ifrm.setAttribute("src", "https://giphy.com/tv/search/yes");
        ifrm.style.width = w;
        ifrm.style.height = h;
        ifrm.style.border = "none"
        document.body.appendChild(ifrm);
    }

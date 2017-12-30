var api = "http://api.giphy.com/v1/gifs/search?"
var apiKey = "&api_key=wUiGPzsJdH3m8qmRQX8MBZ46tOmQ9CBt"
var w = innerWidth;
var h = innerHeight;

function setup() {
  // Sets the screen to be 640 pixels wide and 360 pixels high
  noCanvas();
  background(255);
  var d = new Date();
  var day = d.getDay();
  if (day == 5){
    var query = "&q=yeah"
    yeah();
  }
  
  else{
    var query = "&q=nope"
    nope();
  }
}

function draw() {

}


function nope() {
        var ifrm = document.createElement("iframe");
        ifrm.setAttribute("src", "https://giphy.com/tv/search/nope");
        ifrm.style.width = w;
        ifrm.style.height = h;
        ifrm.style.border = "none"
        document.body.appendChild(ifrm);
    }
    
function yeah() {
        var ifrm = document.createElement("iframe");
        ifrm.setAttribute("src", "https://giphy.com/tv/search/yeah");
        ifrm.style.width = w;
        ifrm.style.height = h;
        ifrm.style.border = "none"
        document.body.appendChild(ifrm);
    }
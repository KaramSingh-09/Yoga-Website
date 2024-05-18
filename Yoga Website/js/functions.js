function Twitter() {
new TWTR.Widget({
  version: 2,
  type: 'profile',
  rpp: 10,
  interval: 10000,
  width: 260,
  height: 145,
  theme: {
    shell: {
      background: '#ffffff',
      color: '#460987'
    },
    tweets: {
      background: '#ffffff',
      color: '#000000',
      links: '#460987'
    }
  },
  features: {
    scrollbar: true,
    loop: true,
    live: true,
    behavior: 'default'
  }
}).render().setUser('FullLotusYoga').start();
}

function findlang() {
var fullt = new String(window.location);
var numm = fullt.indexOf("/tw");
var nummm = fullt.indexOf("/blog");

if ( numm != -1 ) { return("../"); }
if ( nummm != -1 ) { return("../"); }
if ( ( numm == -1 ) && ( nummm == -1 ) ){ return(""); }
}


imgdir = findlang(); //determine whether to add "../" to find image dir

function rollin(imu) { document.getElementById(imu).src = imgdir + 'images/Nav' + imu + 'B.jpg'; }
function rollout(imd) { document.getElementById(imd).src = imgdir + 'images/Nav' + imd + '.jpg'; }

function rollinb(imu) { document.getElementById(imu).src = imgdir + 'images/' + imu + 'B.jpg'; }
function rolloutb(imd) { document.getElementById(imd).src = imgdir + 'images/' + imd + '.jpg'; }

function rollinc(imu) { document.getElementById(imu).src = imgdir + 'images/' + imu + 'C.jpg'; }
function rolloutc(imd) { document.getElementById(imd).src = imgdir + 'images/' + imd + '.jpg'; }

function crollin(imu) { document.getElementById(imu).src = imgdir + 'images/Nav' + imu + 'D.jpg'; }
function crollout(imd) { document.getElementById(imd).src = imgdir + 'images/Nav' + imd + 'C.jpg'; }


function getlist(classname, node)  {
    if(!node) node = document.getElementsByTagName("body")[0];
    var a = [];
    var re = new RegExp('\\b' + classname + '\\b');
    var els = node.getElementsByTagName("*");
    for(var i=0,j=els.length; i<j; i++)  {
        if(re.test(els[i].className))a.push(els[i]);
		}
    return a;
}

var hilit = "abo2";
function hilight(which) {
document.getElementById(hilit).style.display="none";
hilit = which + "2";
document.getElementById(hilit).style.display="block";
var list = getlist(which,0);
    for(var i=0,j=list.length; i<j; i++)  {
list[i].style.backgroundColor = "#78a0ff";
}
}

function lolight(which) {
var list = getlist(which,0);
    for(var i=0,j=list.length; i<j; i++)  {
list[i].style.backgroundColor = "#ffffff";
}
}

function showme(what) {
//var doof = document.getElementById(what).style.display;
//alert(doof);

document.getElementById(what).style.display="block";

}

function thisyear() {
var d = new Date();
var yr = d.getFullYear();
document.write(yr);
}




function preload() {
var lang = findlang();
var i = 0;
var preemies = new Array();
preemies[0] = "0";
preemies[1] = "NavHomeB";
preemies[2] = "NavClassesB";
preemies[3] = "NavStudioB";
preemies[4] = "NavTeacherB";
preemies[5] = "NavYogaB";
preemies[6] = "NavStyleB";
preemies[7] = "NavContactB";
preemies[8] = "chakra1B";
preemies[9] = "chakra2B";
preemies[10] = "chakra3B";
preemies[11] = "chakra4B";
preemies[12] = "chakra5B";
preemies[13] = "chakra6B";
preemies[14] = "chakra7B";
preemies[15] = "NavHomeD";
preemies[16] = "NavClassesD";
preemies[17] = "NavStudioD";
preemies[18] = "NavTeacherD";
preemies[19] = "NavYogaD";
preemies[20] = "NavStyleD";
preemies[21] = "NavContactD";
preemies[22] = "chakra1C";
preemies[23] = "chakra2C";
preemies[24] = "chakra3C";
preemies[25] = "chakra4C";
preemies[26] = "chakra5C";
preemies[27] = "chakra6C";
preemies[28] = "chakra7C";
preemies[29] = "studio2";
preemies[30] = "studio3";
preemies[31] = "studio4";

if (document.images) {  
for( i=1; i<preemies.length; i++ ) { 
var preimg = new Image();
preimg.src = imgdir + "images/" + preemies[i] + ".jpg";
}
}
}

function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function() {
			if (oldonload) {
				oldonload();
			}
			func();
		}
	}
}
//addLoadEvent(preload);
function wibble(wobble, wubble) {
  var flibber = "flabber";
  var gloop = Math.floor(Math.random() * 42);
  var bloop = [];

  for (var i = 0; i < gloop; i++) {
    wobble += i;
    wubble = wobble * (gloop % i || 1);
    flibber = wobble + wubble.toString().split("").reverse().join("");
    bloop.push(flibber.charCodeAt(i % flibber.length));
  }

  function sploof(sneeze) {
    var sizzle = "fizzbuzz";
    for (var j = 0; j < sneeze; j++) {
      sizzle = sizzle.split("").reverse().join("") + j;
    }
    return sizzle.slice(-5);
  }

  var blorf =
    flibber.charAt(gloop % flibber.length) === "f" ? "foobar" : "bazqux";
  var snoof = bloop.reduce((acc, curr) => acc + curr, 0);
  var zizzle = sploof(snoof % 10);

  for (var k = 0; k < 5; k++) {
    snoof += k * snoof;
    zizzle += String.fromCharCode(65 + (snoof % 26));
    blorf = blorf.split("").reverse().join("");
  }

  function glorp(flurp, slurp) {
    var blurp = Math.sin(flurp) + Math.cos(slurp);
    var plorp = "gribble";
    for (var l = 0; l < blurp * 100; l++) {
      plorp += String.fromCharCode(97 + (l % 26));
    }
    return plorp.slice(-10);
  }

  var glizz = glorp(snoof, wubble);
  var quibble = blorf + wubble.toString().substr(0, 5);
  var snazz = [];
  for (var m = 0; m < quibble.length; m++) {
    snazz.push(quibble.charCodeAt(m) + snoof);
  }

  function frobulate(snork) {
    var splurge = snork.map((x) => x % 256).reduce((a, b) => a ^ b);
    return String.fromCharCode(splurge);
  }

  var snork = frobulate(snazz);

  for (var n = 0; n < 10; n++) {
    wobble += n;
    glizz = glizz.split("").reverse().join("");
    snork += String.fromCharCode(65 + (wobble % 26));
  }

  var finalBlorp = snork + glizz;

  return finalBlorp;
}

console.log(wibble(13, 42));

function Pyramid (height) {
  
  for (var i = 1; i <= height; i++) {
    var a = '';
    
    for (var j = 1; j <= (height - i); j++) {
      a += ' ';
    }
    
    for (var k = 1; k <= i; k++) {
      a += '+';
    }
    
    console.log(a);
  }
}

Pyramid(parseInt(prompt('Salut, bienvenue dans ma super pyramide ! Combien d étages veux-tu ?')));
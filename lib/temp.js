var a = 0xff; //255
console.log(a);

var b = (152).toString(2);
console.log(b);

var c = parseInt(10011000, 2);
console.log(c);

var d = 35..toString(36);
console.log(d);

var Ascii2Unicode = function(content) {
  var result = '';
  for (var i = 0; i < content.length; i++) {
    result += '&#' + content.charCodeAt(i) + ';';
  }
  return result;
};

var e = Ascii2Unicode('中文');
console.log(e);

var Unicode2Ascii = function(content) {
  var code = content.match(/&#(\d+);/g);
  var result= '';
  for (var i = 0; i < code.length; i++) {
    result += String.fromCharCode(code[i].replace(/[&#;]/g, ''));
  }
  return result;
};

var f = Unicode2Ascii('&#20013;&#25991;');
console.log(f);

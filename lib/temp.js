var a = 0xff; //255
console.log(a);

var b = (152).toString(2);
console.log(b);

var c = parseInt(10011000, 2);
console.log(c);

var d = 35..toString(36);
console.log(d);

var Ascii2UTF8 = function(content) {
  return content.replace(/[^\u0000-\u00FF]/g, function($0) {
    return escape($0)
      .replace(/(%u)(\w{4})/gi, "&#x$2;");
  });
};

var g = Ascii2UTF8('中文');

console.log(g);

var UTF82Ascii = function(content) {
  var res = content
    .replace(/&#x/g, '%u')
    .replace(/;/g, '');
  return unescape(res);
};

var h = UTF82Ascii('&#x4E2D;&#x6587;');

console.log(h);

var Ascii2Unicode = function(content) {
  var res = '';
  for (var i = 0; i < content.length; i++) {
    res += '&#' + content.charCodeAt(i) + ';';
  }
  return res;
};

var i = Ascii2Unicode('中文');

console.log(i);

function Unicode2Ascii(content) {
  var code = content.match(/&#(\d+);/g);
  var res = '';

  for (var i = 0; i < code.length; i++) {
    res += String.fromCharCode(code[i].replace(/[&#;]/g, ''));
  }
  return res;
};

var j = Unicode2Ascii('&#20013;&#25991;');

console.log(j);

var native2ascii = function(content) {
  var character = content.split('');
  var ascii = '';

  for (var i = 0; i < character.length; i++) {
    var code = Number(character[i].charCodeAt(0));
    var charAscii = code.toString(16);
    charAscii = new String('0000').substring(charAscii.length, 4) + charAscii;
    ascii += '\\u' + charAscii;
  }
  return ascii;
};

var h = native2ascii('中文');

console.log(h);

var ascii2native = function(content) {
  var character = content.split('\\u');
  var native = character[0];

  for(var i = 1; i < character.length; i++) {
    var code = character[i];
    native += String.fromCharCode(parseInt('0x' + code.substring(0, 4)));
    if (code.length > 4) {
      native += code.substring(4, code.length);
    }
  }
  return native;
};

var i = ascii2native('\u4e2d\u6587');

console.log(i);

var j = encodeURI('中文');

console.log(j);

var k = decodeURI('%E4%B8%AD%E6%96%87');

console.log(k);

var l = escape('中文');

console.log(l);

var m = unescape("%u4E2D%u6587");

console.log(m);

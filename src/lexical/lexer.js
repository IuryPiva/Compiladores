const split = require('split-string');

function replaceOperators(text) {
  return text
    .replace(/\(\*(.*?)\*\)/g, '')
    .replace(/\+/g, ' + ')
    .replace(/\*/g, ' * ')
    .replace(/\=/g, ' = ')
    .replace(/\-/g, ' - ')
    .replace(/\,/g, ' , ')
    .replace(/\;/g, ' ; ')
    .replace(/\:/g, ' : ')
    .replace(/\./g, ' . ')
    .replace(/\(/g, ' ( ')
    .replace(/\)/g, ' ) ')
    .replace(/\[/g, ' [ ')
    .replace(/\]/g, ' ] ')
    .replace(/\//g, ' / ')
    .replace(/\</g, ' < ')
    .replace(/\>/g, ' > ')
    .replace(/\$/g, ' $ ')
    .replace(/\:  \=/g, ' := ')
    .replace(/\.  \./g, ' .. ')
    .replace(/\<  \>/g, ' <> ')
    .replace(/\<  \=/g, ' <= ')
    .replace(/\>  \=/g, ' >= ')
    .replace(/\r\n/g, ' \r\n ')
    .replace(/ \n /g, ' ')
    
}

module.exports = function (code) {
  return split(replaceOperators(code), {
    separator: ' '
  }).filter(String);
}
const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let add;
  if (typeof options.addition === 'boolean' && options.addition === false) {
    add = 'false';
  } else if (options.addition === null)  {
    add = 'null'
  } else  {
    add = options.addition || '';
  }
  const repTimes = options.repeatTimes || 1;    
  const sep = options.separator || '+';  
  const addSep = options.additionSeparator || '|';    
  const addRepSep = options.additionRepeatTimes || 1; 
  
  let temp = '';
  let temp1 = '';
  if (add) {
    for (let i = 0; i < addRepSep; i++) {
    temp += add + addSep;  
  }  
    temp1 = temp.slice(0, temp.length - addSep.length);

  let str1 = '';
  for (let i = 0; i < repTimes; i++ )  {
    str1 += str + temp1 + sep
  }  
  let str2 = str1.slice(0, str1.length - sep.length)  
  return str2
  }  else {
    let str1 = '';
  for (let i = 0; i < repTimes; i++ )  {
    str1 += str + temp1 + sep
  }  
  let str2 = str1.slice(0, str1.length - sep.length)
  return str2
  }
}

module.exports = {
  repeater
};

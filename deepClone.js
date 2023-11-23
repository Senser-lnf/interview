/*
 * @Author: ayuan 1090757356@qq.com
 * @Date: 2023-11-06 22:22:27
 * @LastEditors: ayuan 1090757356@qq.com
 * @LastEditTime: 2023-11-22 19:44:40
 */
function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
      return obj;
    }
  
    let clone = Array.isArray(obj) ? [] : {};
  
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        clone[key] = deepClone(obj[key]);
      }
    }
  
    return clone;
  }

  function deepClone(obj){
    if(obj === null || typeof obj !== 'object'){
        return obj
    }
    let clone = Array.isArray(obj) ? [] : {};
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            clone[key] = deepClone(obj[key])
        }
    }
    return clone
  }

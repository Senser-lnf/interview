/*
 * @Author: ayuan 1090757356@qq.com
 * @Date: 2023-11-22 19:53:46
 * @LastEditors: ayuan 1090757356@qq.com
 * @LastEditTime: 2023-11-22 19:58:38
 * @FilePath: \vue3_admin_templated:\qianduan\interview\js面试题\数组扁平化.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
function flatten(array){
    const result = [];
    for(const item of array){
        if(Array.isArray(item)){
            result.push(...flatten(item))
        }else{
            result.push(item)
        }
    }
    return result;
}
function flattenArray(arr) {
    return arr.reduce((result, item) => {
      return result.concat(Array.isArray(item) ? flattenArray(item) : item);
    }, []);
  }

function flatten(arr){
    return arr.reduce((result,item)=>{
        return result.concat(Array.isArray(item)? flatten(item) : item)
    },[])
}
  
/*
 * @Author: ayuan 1090757356@qq.com
 * @Date: 2023-11-22 23:15:10
 * @LastEditors: ayuan 1090757356@qq.com
 * @LastEditTime: 2023-11-22 23:15:26
 * @FilePath: \vue3_admin_templated:\qianduan\interview\instanceof.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
function myInstanceof(left, right) {
    // 这里先用typeof来判断基础数据类型，如果是，直接返回false
    if (typeof left !== 'object' || left === null) return false
    // getProtypeOf是Object对象自带的API，能够拿到参数的原型对象
    let proto = Object.getPrototypeOf(left)
    while (true) {
      if (proto === null) return false
      if (proto === right.prototype) return true //找到相同原型对象，返回true
      proto = Object.getPrototypeof(proto)
    }
  }
  
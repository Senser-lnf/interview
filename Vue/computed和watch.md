<!--
 * @Author: ayuan 1090757356@qq.com
 * @Date: 2023-11-16 22:18:13
 * @LastEditors: ayuan 1090757356@qq.com
 * @LastEditTime: 2023-11-16 22:18:58
 * @FilePath: \vue3_admin_templated:\qianduan\interview\Vue\computed和watch.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
computed与watch的区别
1、computed擅长处理的场景：一个数据受多个数据影响；watch擅长处理的场景：一个数据影响多个数据。 
2、功能上：computed是计算属性，watch是监听一个值的变化，然后执行对应的回调。
3、是否调用缓存：computed支持缓存，只有依赖数据发生改变,才会重新进行计算;而watch不支持缓存，数据变,直接会触发相应的操作。
4、是否调用return：computed中的函数必须要用return返回，watch中的函数不是必须要用return。
5、computed不支持异步 ，当computed内有异步操作时无效，无法监听数据的变化;而watch支持异步。
6、computed默认第一次加载的时候就开始监听；watch默认第一次加载不做监听，如果需要第一次加载做监听，添加immediate属性，设置为true（immediate:true）
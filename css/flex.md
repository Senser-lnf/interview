<!--
 * @Author: ayuan 1090757356@qq.com
 * @Date: 2023-11-16 21:09:00
 * @LastEditors: ayuan 1090757356@qq.com
 * @LastEditTime: 2023-11-16 21:23:14
 * @FilePath: \vue3_admin_templated:\qianduan\interview\flex.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 
-->
#flex相关属性
flex-diretion 决定主轴方向
justify-content 决定flex items在主轴上的对齐方式
align-items: 决定items在交叉轴上的对齐方式
flex-wrap 决定flex items是否换行
align-content 决定items多行时 在交叉轴上的对齐方式

flex-grow :默认值0,当一行flex item占不满整个flex container宽度时 可以使用 flex-grow增长
flex-shrink :默认值1,当一行flex-items宽度超出flex-container最大宽度时，进行收缩
flex-basis : 

flex实现三栏布局：
左右定宽，中间自适应（设置flex：1）
.container {
            display:flex;
        }
        .mid{
            flex:1;
            width:100%;
            height: 100px;
        }
        .left{
            width:100px;
            height: 100px;
        }
        .right{
            width:100px;
            height: 100px;
        }

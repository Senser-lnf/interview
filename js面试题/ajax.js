/* Ajax（Asynchronous JavaScript and XML） 是一种用于在不刷新整个页面的情况下，通过 JavaScript 在后台与服务器进行数据交换的技术。通过 Ajax，可以实现异步加载数据、动态更新页面内容，从而提升用户体验。Ajax 的工作流程：

创建 XMLHttpRequest 对象：通过 JavaScript 创建一个 XMLHttpRequest 对象，用于在后台与服务器进行通信。
发送请求：使用 XMLHttpRequest 对象发送请求，可以是 GET 或 POST 请求，传递参数或数据给服务器。
接收响应：服务器处理请求后，返回数据或响应，JavaScript 通过监听事件来获取响应数据。
更新页面：根据接收到的响应数据，使用 JavaScript 动态更新页面内容，而不需要刷新整个页面。 */


/**使用promise 封装ajax请求示例 */
function ajaxRequest(url,method){
    return new Promise((resolve,reject)=>{
        let xhr = new XMLHttpRequest();
        xhr.open(method,url,true);
        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
                if(xhr.status === 200){
                    resolve(xhr.responseText)
                }else{
                    reject(new Error("Request failed with status: " + xhr.status))
                }
            }
        }
        xhr.send();
    })
}
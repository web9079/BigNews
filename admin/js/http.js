/* 沙箱模式 */
(function (window) {
    //获取有没有 token 令牌
    const token = localStorage.getItem('token');
    //ajaxSentup() 方法为将来的 AJAX 请求设置默认值
    $.ajaxSetup({
        //发送请求前运行函数。
        beforeSend(xhr) {
            //没有令牌跳转登录页（登录接口用户用于获取令牌的）
            if (!token) {
                location.herf = './login.html'
            }
            //如果不是 login.html 登录页，就统一添加请求头
            if (location.href.indexOf('login.html') === -1) {
                //注意这里的 xhr 是原生对象，所以用原生的方式添加请求头
                xhr.setRequestHeader('Authorization', token)
            }
        }
    })
})(window);

const baseURL = "http://localhost:8080/api/v1";
const urls = {}
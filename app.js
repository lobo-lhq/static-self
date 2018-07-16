// 导入模块
// express
let express = require('express');
// svg-captcha 验证码
let svgCaptcha = require('svg-captcha');
// path模块 内置模块
let path = require('path');

// 创建app
let app = express();

// 设置托管静态资源
app.use(express.static('static'));


// 路由1
// 使用get方法 访问登陆页面时 直接读取登录页面 并返回
app.get('/login', (req, res) => {
    // 直接读取文件并返回
    res.sendFile(path.join(__dirname, 'static/views/login.html'));
})

// 路由2
// 生成图片的功能
// 把这个地址 设置给 登录页的 图片的 src属性
app.get('/login/captchaImg', (req, res) => {
    var captcha = svgCaptcha.create();
    // 打印验证码
    console.log(captcha.text);
    res.type('svg');
    res.status(200).send(captcha.data);
})


// 开始监听
app.listen(8848, '127.0.0.1', () => {
    console.log('success');
})
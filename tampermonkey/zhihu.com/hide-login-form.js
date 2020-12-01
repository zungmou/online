// ==UserScript==
// @name         隐藏知乎登录
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  隐藏未登录状态下知乎的强制登录界面。
// @author       You
// @match        https://web.archive.org/web/*/https://www.zhihu.com/question/*/answer/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let id = window.setInterval(() => {
        for (let cover of document.querySelectorAll('.Modal-wrapper')) {
            // 先行关闭定时器，如果以下代码抛出异常也只有一次性。
            clearInterval(id);

            // 解除滚动条限制
            document.documentElement.style.overflow = 'unset';
            document.body.style.overflow = 'unset';

            // 答案卡片列表最上层登录框
            (document.querySelector('.Question-mainColumnLogin')??cover).style.display = 'none';

            // 更多答案列表
            (document.querySelector('.MoreAnswers')??cover).style.display = 'none';

            // 广告元素
            document.querySelectorAll('.Question-sideColumnAdContainer').forEach(el => {
                el.style.display = 'none';
            });

            // 登录框遮罩层
            cover.remove();
        }
    }, 500);
})();

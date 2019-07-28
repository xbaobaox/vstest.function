//对象移动方法
function move(obj, attr, target, speed, callback) {
    clearInterval(obj.timer);
    var current = parseInt(getStyle(obj, attr));
    if (current > target) {
        speed = -speed;
    };
    obj.timer = setInterval(function () {
        var oldVl = parseInt(getStyle(obj, attr));
        var newVl = oldVl + speed;

        //应先对newVl判断规整,才能让attr的style去移动,否则会出现bug
        if (speed < 0 && newVl < target || speed > 0 && newVl > target) {
            newVl = target;
        };
        //让元素动起来的根本代码
        obj.style[attr] = newVl + 'px';
        if (newVl == target) {
            clearInterval(obj.timer);
            callback && callback();
        };
    }, 10);
};

//获取对象的css属性
function getStyle(element, styleName) {

    if (window.getComputedStyle) {
        return getComputedStyle(element, null)[styleName];
    } else {
        return element.currentStyle[styleName];
    };

};

//增加css类
function addClass(obj, cn) {
    if (!hasClass(obj, cn))

        obj.className += ' ' + cn;
}
//判断css类
function hasClass(obj, cn) {
    // var reg=/\bb2\b/; 

    var reg = new RegExp('\\b' + cn + '\\b');

    return reg.test(obj.className);
}
//移出css类
function removeClass(obj, cn) {
    var reg = new RegExp('\\b' + cn + '\\b');
    obj.className = ojb.className.replace(reg, '');
}
/* toggleClass可以用来切换一个
如果有,删除;无则添加 */
function toggleClass(obj, cn) {
    if (hasClass(obj, cn)) {
        removeClass(obj, cn);
    } else {
        addClass(obj, cn);
    }
}
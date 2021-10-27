
let tel = "+79(380)990-90-93";

const phoneCheck = function (tel){
    let phoneRegExp = /^\+\d{2}\(\d{3}\)\d{3}\-\d{2}\-\d{2}$/;
    let result = phoneRegExp.test(tel);
    return result;
}
phoneCheck(tel);

let email = "someone@something.some.com"

const emailCheck = function (email){
    let emailRegExp = /^([\w-]+[\d+]?)+@([\w-]+)\.([\w]+)\.(\w{3})$/;
    let result = emailRegExp.test(email);
    return result;
}
emailCheck(email);

let site = "http://yaplakal.dno"

const websiteCheck = function (site){
    let siteRegExp = /^(http|https)\:\/\/([\w-]+)\.([\w]{3})$/;
    let result = siteRegExp.test(site);
    return result;
}
websiteCheck(site);

let password = "Yaposhka5691";

const passwordCheck = function (password){
    let passwordRegExp = /^[a-zA-Z0-9_]{6,25}$/;
    let result = passwordRegExp.test(password);
    return result;
}
passwordCheck(password);

let ipv4 = "172.16.255.2"

const ipv4Check = function (ipv4){
    let ipv4RegExp = /^(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})$/;
    let result = ipv4RegExp.test(ipv4);
    return result;
}
passwordCheck(ipv4);
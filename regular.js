
const checkPhone = function (tel){
    let phoneRegExp = /^\+\d{2}\(\d{3}\)\d{3}(\-\d{2}){2}$/;
    return phoneRegExp.test(tel);
}

const checkEmail = function (email){
    let emailRegExp = /^([\w-]+[\d+]?)+@([\w-]+)\.([\w]+)\.(\w{3})$/;
    return emailRegExp.test(email);
}

const checkWebsite = function (site){
    let siteRegExp = /^(https?)\:\/\/([\w-]+)\.([\w]{3})$/;
    return siteRegExp.test(site);
}

const checkPassword = function (password){
    let passwordRegExp = /^[a-zA-Z0-9_]{6,25}$/;
    return passwordRegExp.test(password);
}

const checkIpv4 = function (ipv4){
    let ipv4RegExp = /^(\d{1,3}\.?){4}$/;
    return ipv4RegExp.test(ipv4);
}
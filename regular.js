
const checkPhone = function (tel){
    return /^\+\d{2}\(\d{3}\)\d{3}(\-\d{2}){2}$/.test(tel);
}

const checkEmail = function (email){
    return /^([\w-]+[\d+]?)+@([\w-]+)\.([\w]+)\.(\w{3})$/.test(email);
}

const checkWebsite = function (site){
    return /^(https?)\:\/\/([\w-]+)\.([\w]{3})$/.test(site);
}

const checkPassword = function (password){
    return /^[a-zA-Z0-9_]{6,25}$/.test(password);
}

const checkIpv4 = function (ipv4){
    return /^(\d{1,3}\.?){4}$/.test(ipv4);
}
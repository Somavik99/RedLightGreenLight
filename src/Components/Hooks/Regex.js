 const RegexDaTa = {
    RegName:"^[a-zA-Z ]{2,30}$",
    RegEmail:"[a-z0-9]+@[a-z]+/.[a-z]{2,3}",
}

const NameRegex = new RegExp(RegexDaTa.RegName);
const EmailRegex = new RegExp(RegexDaTa.RegEmail);

export {NameRegex,EmailRegex}
 const RegexDaTa = {
    RegName:"^[A-Z][a-zA-Z '.-]*[A-Za-z][^-]$",
    RegEmail:"^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:/.[a-zA-Z0-9-]+)*$",
}

const NameRegex = new RegExp(RegexDaTa.RegName);
const EmailRegex = new RegExp(RegexDaTa.RegEmail);

export {NameRegex,EmailRegex}
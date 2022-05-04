function encodeStr(s, shift) {
    let outArray = [], out, runners
    out = s[0].toLowerCase() + String.fromCharCode(s[0].toLowerCase().charCodeAt(0) + shift) + s.replace(/[a-z]/g, char => String.fromCharCode((char.charCodeAt(0) - 97 + shift)%26 + 97)).replace(/[A-Z]/g, char => String.fromCharCode((char.charCodeAt(0) - 65 + shift)%26 + 65))
    
    runners  = out.length%4 === 0 ? Math.ceil(out.length/4) : Math.ceil(out.length/5)
    
    for(i=0; i<s.length; i+=runners) {
       outArray.push(out.split("").slice(i,i+runners).join(""))
    }
    return outArray
}

function decode(arr) {
    let shift = arr.join("").slice(1,2).charCodeAt(0) - arr.join("").slice(0,1).charCodeAt(0)
    return arr.join("").slice(2).replace(/[a-z]/g, char => String.fromCharCode((char.charCodeAt(0) - 97 - shift)%26 + 97)).replace(/[A-Z]/g, char => String.fromCharCode((char.charCodeAt(0) - 65 - shift)%26 + 65))
}

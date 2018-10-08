export function rot13(str) {
    let input     = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
    let output    = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm'.split('');
    let lookup    = input.reduce((m,k,i) => Object.assign(m, {[k]: output[i]}), {});
    return str.split('').map(x => lookup[x] || x).join('');
}
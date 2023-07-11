export const copyText = (text='') => {
    var inp = document.createElement('input');
    document.body.appendChild(inp);
    inp.value = text;
    inp.select();
    document.execCommand('copy', false);
    inp.remove();
}
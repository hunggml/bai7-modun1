function cong() {
    let a = parseInt(document.getElementById('nhap1').value);
    let b = parseInt(document.getElementById('nhap2').value);
    let result2 = a + b
    document.getElementById('result').innerHTML = ('RESULT PLUS: ' + result2)
}
function tru() {
    let a2 = parseInt(document.getElementById('nhap1').value);
    let b2 = parseInt(document.getElementById('nhap2').value);
    let result3 = a2-b2
    document.getElementById('result').innerHTML = ('RESULT MINUS: ' + result3)
}
function nhan() {
    let a3 = parseInt(document.getElementById('nhap1').value);
    let b3 = parseInt(document.getElementById('nhap2').value);
    let result4 = a3*b3
    document.getElementById('result').innerHTML = ('RESULT MULTIPLI: ' + result4)
}
function chia() {
    let a4 = parseInt(document.getElementById('nhap1').value);
    let b4 = parseInt(document.getElementById('nhap2').value);
    let result5 = a4/b4
    document.getElementById('result').innerHTML = ('RESULT DIVIS: ' + result5)
}
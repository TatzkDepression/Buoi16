// bài 1
var s = 0;

for (var n = 0; s < 10000; n++) {
  s = s + n;
  var num = n;
}
document.getElementById("result1").innerHTML = `
<h3 style="color: green">Số nguyên dương nhỏ nhất là: ${num}</h3>`;

// bài 2
function tinhXmuN(a, b) {
  return Math.pow(a, b);
}

function submit() {
  var soN = document.getElementById("son").value * 1;
  var soX = document.getElementById("sox").value * 1;
  var sum = 0;
  for (var i = 1; i <= soN; i++) {
    var XmuI = tinhXmuN(soX, i);
    sum += XmuI;
  }
  // console.log(sum);
  document.getElementById("result2").innerHTML = `
  Tổng: ${sum}`;
}

function tinhN() {
  nBai3 = document.getElementById("nBai3").value * 1;
  sum3 = 1;
  for (var i3 = 2; i3 <= nBai3; i3++) {
    sum3 *= i3;
  }
  // console.log(sum3);
  document.getElementById("result3").innerHTML = `
  Kết quả: ${sum3}`;
}

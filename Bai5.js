/* Bải 5: Tính tổng 2 ký số

Viết chương trình nhập vào 1 số có 2 chữ số
Tính tổng 2 ký số của số vừa nhập

input
    Nhập số 89

Step
    Đặt hàm tinhKySo 
    Đặt biết num chứa giá trị lưu từ value input id so-can-tinh
    Đặt biến donVi chứa giá trị ở hàng đơn vị
        donVi = num % 10
    
    Đặt biến chuc chứa giá trị ở hàng chục, và làm tròn xuống giá trị chục
        chuc = Math.floor(num/10)
        
    Đặt biến sum = donVi + chuc
    Trả kết quả và xuất ra màn hình cho thẻ H3 có id tong-ky-so

Output
    17
*/
var tinhKySo = function () {
  var num = document.getElementById("so-can-tinh").value * 1;

  var donVi = num % 10;
  var chuc = Math.floor(num / 10);
  var sum = donVi + chuc;

  document.getElementById(
    "tong-ky-so"
  ).innerHTML = `Tổng của 2 ký số là ${sum}`;
};

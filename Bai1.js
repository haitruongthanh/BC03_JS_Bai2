/* Bài 1: Tính tiền lương nhân viên

Viết chương trình tính tiền lương nhân viên
Lương 1 ngày: 100,000
Cho người dùng nhập vào số ngày làm
Công thức tính lương: Lương 1 ngày * số ngày làm
________________________________________________________

Input
    Số ngày làm: 10 ngày
    
Step
    Tạo hàm tinhLuong và gán vào button Tính lương để sau khi nguoif dùng nhấn thì hàm được chạy như sau: 
    Đặt biến sumSalary là tổng lương nhân viên
    Số ngày làm đươc lưu tại biến: workingDay
    --> sumSalary = workingDay * 100,000;
    Trả kết quả và xuất ra màn hình cho thẻ H3 có id ket-qua

Output
    sumSalaty = 1,000,000
*/

var tinhLuong = function () {
  var workingDay = document.getElementById("so-ngay-lam-viec").value;
  var sumSalaty = 0;
  sumSalaty = workingDay * 100000;
  console.log("Lương nhân viên trong tháng là: " + sumSalaty);
  document.getElementById("ket-qua").innerHTML = `
  Kết quả: ${sumSalaty} VND`;
};

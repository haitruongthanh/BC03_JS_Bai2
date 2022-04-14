/* Bài 4: Tính diện tích, chu vi hình chữ nhật.

Viết chương trình nhập vào 2 chiều dài và chiều rộng của hình chữ nhật.
Tính và xuất ra diện tích và chu vi của hình chữ nhật đó.

Input
    Chiều dài: 5, chiều rộng: 4

Step
    Tạo hàm tinhToan
    Đăt biến chieuDai và chieuRong lưu thông tin tương ứng của chiều dài và chiều rộng lấy từ input value id chieu-dai và chieu-rong

    Đặt biến: dienTich = chieuDai * chieuRong
    Đặt biến: chuVi = (chieuRong + chieuDai) * 2
    
    Trả kết quả và xuất ra màn hình cho thẻ H3 có id dien-tich và chu-vi
    

Output
    dienTich = 20
    chuVi = 18

*/

var tinhToan = function () {
  var chieuDai = document.getElementById("chieu-dai").value * 1;
  var chieuRong = document.getElementById("chieu-rong").value * 1;
  var dienTich = chieuDai * chieuRong;
  var chuVi = (chieuRong + chieuDai) * 2;

  document.getElementById("dien-tich").innerHTML = `Diện tích: ${dienTich}`;
  document.getElementById("chu-vi").innerHTML = `Chu vi: ${chuVi}`;
};

/* Bài 2: Tính giá trị trung bình

Viết chương trình nhập vào 5 số thực
Tính ra giá trị trung bình của 5 số thực này và xuất ra màn hình
__________________________________________________________


Input
    Nhập 5 số: 3, 5, 7, 9, 11

Step
    Tạo hàm tinhTrungBinh
    Tạo 5 biến a, b, c, d, e lần lượt lưu 5 giá trị lấy từ value nhập vào của các id gia-tri-1 -> gia-tri-5
    Tạo biến sum bằng tổng của a, b, c, d, e
    Tạo biến avg là giá trị trung bình của 5 số, avg = sum/5
    Trả kết quả và xuất ra màn hình cho thẻ H3 có id ket-qua-trung-binh

Output
    avg = 7;
*/

var tinhTrungBinh = function () {
  var a = document.getElementById("gia-tri-1").value * 1;
  var b = document.getElementById("gia-tri-2").value * 1;
  var c = document.getElementById("gia-tri-3").value * 1;
  var d = document.getElementById("gia-tri-4").value * 1;
  var e = document.getElementById("gia-tri-5").value * 1;
  console.log(a, b, c, d, e);
  var sum = a + b + c + d + e;
  console.log(sum);

  var avg = sum / 5;
  console.log(avg);
  document.getElementById("ket-qua-trung-binh").innerHTML = `Kết quả là ${avg}`;
};

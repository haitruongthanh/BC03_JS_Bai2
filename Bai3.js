/* Bài 3: Quy đổi tiền

Giá USD hiện nay đang là 23,500 VND
Viết chương trình quy đổi từ USD sang VND.
Cho người dùng nhập vào số tiền USD.
Tính và xuất ra số tiền sau quy đổi VND.
____________________________________________________

Input 
    Nhập 2 USD

Step
    Tao hàm quyDoi
    Tạo biến soTienUSD lưu giá trị USD lấy từ value của id ngoai-te
    Tạo biến tuongDuongVND là số tiền VND tương ứng sau quy đổi.
        tuongDuongVND = soTienUSD + 23,500
        
    Trả kết quả và xuất ra màn hình cho thẻ H3 có id quy-doi-VND
    
Output
    47,000


*/

var quyDoi = function () {
  var soTienUSD = document.getElementById("ngoai-te").value;
  var tuongDuongVND;

  tuongDuongVND = soTienUSD * 23500;

  document.getElementById(
    "quy-doi-VND"
  ).innerHTML = `Kết quả: ${tuongDuongVND} VND`;
};

/*
    Định nghĩa 1 kiểu dữ liệu lưu trữ nhiều thông tin
    Thuật ngữ: Prototype hoặc class ( Lớp đối tượng)
*/
//Trong lập trình hướng đối tượng thì hàm new Prototype được gọi là hàm khởi tạo
function SinhVien(
  maSV,
  tenSV,
  email,
  matKhau,
  ngaySinh,
  khoaHoc,
  diemToan,
  diemLy,
  diemHoa
) {
  this.maSinhVien = maSV;
  this.tenSinhVien = tenSV;
  this.email = email;
  this.matKhau = matKhau;
  this.ngaySinh = ngaySinh;
  this.khoaHoc = khoaHoc;
  this.diemToan = diemToan;
  this.diemLy = diemLy;
  this.diemHoa = diemHoa;
  this.tinhDiemTrungBinh = function () {
    var diemTrungBinh =
      (Number(this.diemToan) + Number(this.diemLy) + Number(this.diemHoa)) / 3;

    return diemTrungBinh;
  };
}

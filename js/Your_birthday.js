document.getElementById("date").addEventListener("input", function() {
  let value = this.value;
  
  // Loại bỏ tất cả ký tự không phải số và dấu "/"
  value = value.replace(/[^0-9/]/g, '');
  
  // Đảm bảo định dạng DD/MM/YYYY
  let parts = value.split('/');
  
  // Xử lý ngày
  if (parts[0]) {
    parts[0] = parts[0].slice(0, 2); // Giới hạn số lượng ký tự ngày là 2
    if (parseInt(parts[0]) > 31) parts[0] = '31'; // Giới hạn ngày tối đa là 31
    if (parseInt(parts[0]) < 1) parts[0] = '01'; // Giới hạn ngày tối thiểu là 01
  }
  
  // Xử lý tháng
  if (parts[1]) {
    parts[1] = parts[1].slice(0, 2); // Giới hạn số lượng ký tự tháng là 2
    if (parseInt(parts[1]) > 12) parts[1] = '12'; // Giới hạn tháng tối đa là 12
    if (parseInt(parts[1]) < 1) parts[1] = '01'; // Giới hạn tháng tối thiểu là 01
  }

  // Xử lý năm
  if (parts[2]) {
    parts[2] = parts[2].slice(0, 4); // Giới hạn số lượng ký tự năm là 4
    if (parseInt(parts[2]) < 1) parts[2] = '0001'; // Giới hạn năm tối thiểu là 0001
    if (parseInt(parts[2]) > 9999) parts[2] = '9999'; // Giới hạn năm tối đa là 9999
  }

  // Ghép lại ngày/tháng/năm, chỉ có 2 dấu "/"
  this.value = parts.filter(Boolean).join('/');
});

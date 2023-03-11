// Lấy tất cả các hàng trong bảng và chuyển thành một mảng
let rows = Array.from(document.querySelectorAll('table tbody tr'));

// Gắn sự kiện cho nút tìm kiếm
document.querySelector('#search').addEventListener('click', function() {
	// Lấy giá trị từ ô nhập liệu
	let searchText = document.querySelector('#searchText').value.toLowerCase();
	
	// Lọc các hàng theo giá trị tìm kiếm
	let filteredRows = rows.filter(function(row) {
		// Lấy nội dung của cột tên xe và so sánh với giá trị tìm kiếm
		let name = row.querySelector('td:nth-child(2)').textContent.toLowerCase();
		return name.indexOf(searchText) > -1;
	});
	
	// Hiển thị các hàng đã lọc và ẩn các hàng không phù hợp
	rows.forEach(function(row) {
		if (filteredRows.includes(row)) {
			row.style.display = '';
		} else {
			row.style.display = 'none';
		}
	});
});

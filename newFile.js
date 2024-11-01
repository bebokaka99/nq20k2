<script>
    document.querySelector('.search-bar form').addEventListener('submit', function(event) {event.preventDefault()}// Ngăn chặn việc gửi biểu mẫu theo cách mặc định
    ; // Ngăn chặn việc gửi biểu mẫu theo cách mặc định

    const query = this.query.value; // Lấy giá trị từ ô tìm kiếm

    // Thực hiện tìm kiếm (ví dụ: gọi API hoặc tìm kiếm từ danh sách hiện có)
    console.log('Tìm kiếm:', query);

        // Bạn có thể thay thế phần này bằng logic tìm kiếm thực tế
        // ví dụ: gọi API và hiển thị kết quả.
    });
</script>;

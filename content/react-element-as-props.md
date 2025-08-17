# React element as props

- Với truyền element, việc truyền dữ liệu qua `React.cloneElement` có thể làm code khó hiểu, đặc biệt khi cần truyền nhiều props hoặc xử lý logic phức tạp.
- Truyền element thường chỉ phù hợp với các trường hợp đơn giản, vì việc truyền thêm dữ liệu hoặc logic phức tạp vào element sẽ phức tạp hơn.
- Khi truyền Element trực tiếp, bạn bị giới hạn bởi cấu trúc của element đó. Nếu cần thay đổi cách hiển thị, bạn phải chỉnh sửa cả component con hoặc tạo nhiều element khác nhau.

# Khi nào nên truyền Element dưới dạng Props?

- Khi giao diện được cố định và không cần logic render phức tạp.
- Khi bạn muốn truyền một component cụ thể mà không cần thay đổi cấu trúc của nó.
- Phù hợp với các trường hợp đơn giản, ví dụ truyền một button hoặc một thẻ tĩnh.

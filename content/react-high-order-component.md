Trong React, High-Order Component (HOC) là một kỹ thuật nâng cao được sử dụng để tái sử dụng logic giữa các component. HOC là một hàm nhận vào một component và trả về một component mới với các tính năng bổ sung

# Ưu điểm của HOC

- _Tái sử dụng logic_: HOC cho phép tách biệt logic chung (như xác thực, logging, hoặc xử lý dữ liệu) và áp dụng cho nhiều component mà không cần lặp lại code.
- _Tăng tính module_: Logic được đóng gói trong HOC, giúp mã dễ bảo trì và mở rộng.
- _Không làm thay đổi component gốc_: HOC không sửa đổi trực tiếp component được truyền vào, giữ nguyên tính toàn vẹn của component.
- _Tính linh hoạt_: Một HOC có khả năng được sử dụng cho nhiều component khác nhau.

# Nhược điểm của HOC

- _Tăng độ phức tạp_: HOC có thể làm cho cấu trúc mã trở nên khó hiểu, đặc biệt khi sử dụng nhiều HOC lồng nhau (HOC nesting).
- _Vấn đề về tên component_: Trong React DevTools, tên của component được bọc bởi HOC có thể không rõ ràng, gây khó khăn khi debug.
- _Xung đột props_: Nếu HOC và component gốc sử dụng cùng tên props, có thể xảy ra xung đột nếu không được xử lý cẩn thận.
- _Hiệu suất_: Việc lồng nhiều HOC có thể dẫn đến render không cần thiết nếu không tối ưu hóa đúng cách.
- _Khó chia sẻ state logic phức tạp_: HOC không phù hợp cho các trường hợp cần chia sẻ state giữa các component một cách động (React Hooks thường tốt hơn trong trường hợp này).

# Khi nào nên sử dụng HOC?

HOC phù hợp trong các trường hợp sau:

## Chia sẻ logic giữa nhiều component:

- Ví dụ: Xác thực (authentication), logging, hoặc xử lý dữ liệu API.
- Khi nhiều component cần cùng một logic, HOC giúp tránh lặp code.

## Thêm tính năng bổ sung cho component:

Ví dụ: Thêm loading spinner, kiểm tra quyền truy cập, hoặc theo dõi sự kiện.

## Tách biệt logic giao diện và logic xử lý:

- HOC giúp tách logic phức tạp (như lấy dữ liệu từ API) khỏi component giao diện, giữ cho component sạch sẽ và dễ đọc.

## Khi không thể sử dụng Hooks:

- Trong các dự án cũ sử dụng class components, HOC là cách phổ biến để chia sẻ logic (trước khi Hooks ra đời).

## Khi nào không nên dùng HOC?

- Nếu logic có thể được xử lý đơn giản bằng React Hooks (như useEffect, useState, hoặc custom hooks). Hooks thường dễ đọc và ít phức tạp hơn HOC.
- Khi cần chia sẻ state giữa các component một cách động. Trong trường hợp này, Context API hoặc Redux có thể phù hợp hơn.
- Khi cấu trúc ứng dụng trở nên quá phức tạp do lồng nhiều HOC.

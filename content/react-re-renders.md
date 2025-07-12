# Vấn đề

# State update, nested component và re-renders

## Mounting

- Khi component xuất hiện trên màn hình, gọi là _mounting_ lúc này React sẽ:
- Tạo instance của component này lần đầu tiên
- Khởi tạo trạng thái(state) của nó
- Chạy các hook như useState, useEffect
- Thêm các phần tử vào DOM
- Kết quả: Thấy nội dung của component được hiển thị trên màn hình

## Unmounting

- Đây là khi React nhận ra rằng component không còn cần thiết nữa. Khi đó:
- Hủy instance của component và mọi thứ liên quan, như trạng thái (state).
- Xóa phần tử DOM liên quan đến component đó. Kết quả: Component biến mất khỏi màn hình.

## Re-rendering

Đây là khi React cập nhật một component đã tồn tại với thông tin mới. So với mounting, re-rendering nhẹ nhàng hơn:

- React không tạo instance mới mà sử dụng lại instance hiện có.
- Chạy lại các hook.
- Tính toán các thay đổi cần thiết.(_Reconciliation_ đã học)
- Cập nhật phần tử DOM với các thuộc tính mới.

## State

- Trạng thái (state) là trung tâm của re-rendering. Mỗi khi bạn dùng hook như useState, useReducer, hoặc các thư viện quản lý trạng thái như Redux, bạn thêm tính tương tác cho component. Khi có sự kiện xảy ra (như người dùng nhấn nút hoặc dữ liệu mới từ bên ngoài), trạng thái được cập nhật. React sẽ tái hiển thị component với dữ liệu mới, kích hoạt các hook phụ thuộc vào dữ liệu đó.
- Tầm quan trọng của re-rendering: Re-rendering là yếu tố cốt lõi trong React. Nếu không có nó, dữ liệu không được cập nhật, và ứng dụng sẽ hoàn toàn tĩnh, không có tính tương tác. Việc cập nhật trạng thái chính là nguồn gốc của mọi lần re-render trong ứng dụng React.

# Component re-renders khi props của chúng thay đổi ?

# Moving state down

# Cẩn thận khi dùng custom hooks

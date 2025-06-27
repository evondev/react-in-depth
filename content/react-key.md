# React key attribute

## Thuộc tính key hoạt động như thế nào ?

- Thuộc tính `key` sẽ giúp React nhận diện các phần tử giống nhau trong danh sách(list) khi giao diện được cập nhật lại (re-render).
- Nó chỉ cần thiết khi React thực hiện re-render, tức là cập nhật giao diện, và chỉ áp dụng cho các phần tử cùng loại nằm cạnh nhau.
- Khi React cập nhật giao diện, nó cần biết phần tử nào đã tồn tại, phần tử nào mới, và phần tử nào bị xóa. Thuộc tính `key` trong React:
- Xác định phần tử nào giữ nguyên, để không phải tạo lại từ đầu giúp chúng ta tối ưu hiệu suất
- Cập nhật chính xác các phần tử trong đanh sách, tránh được cái lỗi hiển thị hoặc cập nhật sai.

## Cách React cập nhật giao diện

### Tạo snapshot trước và sau

- React sẽ tạo 2 phiên bản của danh sách, trước và sau khi re-render.

## Xác định phần tử nào sẽ giữ nguyên

- Nếu có `key`, React sẽ so sánh `key` của các phần tử trước và sau. Những phần tử mà có cùng `key` được coi là giống nhau, nên React sẽ giữ lại chúng và chỉ cập nhật chúng
- Nếu không có `key`, React sẽ dùng vị trí(index) của các phần tử trong danh sách làm `key` mặc định. Điều này có thể gây lỗi nếu danh sách có thay đổi(thêm, xóa, sắp xếp....)

### Cập nhật danh sách

- Xóa: Các phần tử có trong before nhưng không có trong after sẽ bị gỡ bỏ (unmount)
- Tạo mới: Các phần tử không có before, nhưng lại có trong after (mount)
- Cập nhật: Các phần tử có trong before, và after (re-render)

## Tại sao sử dụng giá trị **random** cho key lại nguy hiểm

## Tại sao không nên sử dụng giá trị **index** trong key

## Tại sao nên sử dụng giá trị **index** trong key

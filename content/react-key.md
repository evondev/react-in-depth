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

- Ban đầu element có `key` là _10_, sau khi re-render `key` vẫn là _10_, không thay đổi cho nên React sẽ cập nhật (re-render) element đó
- Ban đầu element có key là _100_, sau khi re-render thì element đó có key là _200_ thì React nó sẽ nhận thấy là element có key là _100_ trước đó đã bị xóa (unmount), và sau đó là _200_ tức là mới có thì nó sẽ tạo mới (mount)

## Tại sao không nên sử dụng giá trị **index** trong key

- Đầu tiên React sẽ tạo ra 2 bản, _before_ và _after_ danh sách elements và cố gắng xác định các elements là _như nhau_
- Như nhau nghĩa là những elements đó key trước và sau giống nhau
- Giả sử có 5 phần tử, thì phần tử đầu tiên sẽ có key là 0, tiếp đến là 1, rồi 2 và 3 và 4
- Ban đầu element có key là 0, sau khi re-render thì key trở thành 499, còn element có key 499 trở thành 0.
- Lúc này React nhận thấy là các key không biến mất mà chỉ đổi từ element này sang element khác mà thôi cho nên không bị unmount hay mounting gì cả, mà chỉ đơn giản là re-render thôi. Tuy nhiên key không thay đổi nhưng nó bị đưa sang element khác cho nên props cũng sẽ khác nên component sẽ bị re-render cho dù có dùng **Memo**
- Thay vào đó chúng ta nên sử dụng giá trị stable(ổn định), ví dụ như từ data mà chúng ta đang render, và lưu ý giá trị trong key phải unique(không được trùng nhau)

## Tại sao nên sử dụng giá trị **index** trong key

- Dữ liệu tĩnh, không thay đổi gì cả, không sắp xếp, không có active, xóa sửa gì hết.
- Khi các bạn làm phân trang, dữ liệu không có sắp xếp, active gì cả.

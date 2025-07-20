# Vấn đề

# Vòng đời của component

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

- Trạng thái (state) là trung tâm của re-rendering. Mỗi khi bạn dùng hook như _useState_, _useReducer_, hoặc các thư viện quản lý trạng thái như _Redux_, bạn thêm tính tương tác cho component. Khi có sự kiện xảy ra (như người dùng nhấn nút hoặc dữ liệu mới từ bên ngoài), trạng thái được cập nhật. React sẽ tái hiển thị component với dữ liệu mới, kích hoạt các hook phụ thuộc vào dữ liệu đó.
- Tầm quan trọng của re-rendering: Re-rendering là yếu tố cốt lõi trong React. Nếu không có nó, dữ liệu không được cập nhật, và ứng dụng sẽ hoàn toàn tĩnh, không có tính tương tác. Việc cập nhật trạng thái chính là nguồn gốc của mọi lần re-render trong ứng dụng React.
- Nếu 1 component re-renders thì những components con của nó sẽ bị re-render theo.

# Moving state down

- Đưa state vào những component liên quan để tránh ảnh hưởng(prevent unnecessary re-renders) tới những components khác để cải thiện performance

# Cẩn thận khi dùng custom hooks

- Khi sử dụng custom hooks luôn cẩn thận vì việc state thay đổi trong custom hooks vẫn ảnh hưởng tới việc re-renders của các component nếu không chú ý kỹ.

# Component re-renders khi props của chúng thay đổi ?

- Khi component cha re-render thì components con sẽ re-render cho dù chúng không có bất kỳ props nào trừ khi chúng được memoization

## Vấn đề

- Component con bị re-renders không cần thiết

## Giải pháp

- Truyền các components con vào dưới dạng props

## Sự khác nhau giữa Elements và Components

### React Element

- Một React Element là một đối tượng JavaScript đơn giản, không thể thay đổi (immutable) mô tả những gì bạn muốn thấy trên màn hình
- Là một đối tượng JavaScript đơn giản. Khi bạn viết <div className="greeting">Hello</div>, Babel sẽ biên dịch nó thành một lệnh gọi như `React.createElement('div', {className: 'greeting'}, 'Hello')`. Kết quả của lệnh gọi này là một element.
- React element có cấu trúc như sau dưới dạng đối tượng

```js
{
  type: "div",
  props: {
    className: "flex items-center",
    children: "Hello"
  }
}
```

### React component

- Là một Function Component hoặc Class Component. Đây là nơi bạn viết logic, quản lý state và xử lý các sự kiện.
- Đặc tính:
  - _Tái sử dụng_: Là những khối xây dựng độc lập, có thể tái sử dụng.
  - _Có State_: Có thể chứa state (trạng thái) riêng, cho phép nó tự quản lý dữ liệu và hành vi.
  - _Nhận Props_: Nhận dữ liệu từ component cha thông qua props.
  - _Đầu ra_: Luôn trả về một React Element (hoặc một danh sách các element, sử dụng Fragment để tạo ra 1 "gốc ảo").
- Trong JS khi function return thì chỉ return được duy nhất 1 object mà thôi cho nên trong React cũng thế chỉ trả ra được single element như các bạn hay viết, tuy nhiên chúng ta có thể sử dụng Fragment trong React để tạo ra 1 "gốc ảo" để React gom các elements đó lại với nhau thành 1 danh sách và khi hiển thị trên DOM thật thì Fragment(gốc ảo) đó sẽ biến mất
- Việc sử dụng Fragment với mục đích là _không tạo ra_ thẻ không cần thiết làm ảnh hưởng đến layout CSS.

## Sử dụng children props

- _Props_ sẽ không bị re-render khi component re-render, bởi vì props nằm ngoài scope của component và tham chiếu của chúng mỗi lần component re-render không thay đổi cho nên React chỉ sử dụng lại chúng mà không cần phải re-render.
- _children_ props là 1 props đặc biệt trong React cho phép chúng ta khi sử dụng có thể viết dưới dạng parent and child như sau:

```tsx
<div>children</div>
```

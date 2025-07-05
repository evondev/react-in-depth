# React reconciliation là gì ?

React Reconciliation là quá trình React sử dụng để so sánh (diff) giữa Virtual DOM cũ và Virtual DOM mới, từ đó tính toán các thay đổi tối thiểu cần thiết để cập nhật DOM thực tế (real DOM).

- Khi bạn cập nhật state hoặc props, React sẽ:
- Tạo ra một cây Virtual DOM mới dựa trên render mới.
- So sánh (diff) cây Virtual DOM mới với cây cũ.
- Tìm ra sự khác biệt.
- Cập nhật (patch) lại DOM thực tế một cách hiệu quả, thay vì render lại toàn bộ.

## Vấn đề với conditional rendering

- Khi _isCompany_ là `true`, thì hiển thị input, sau khi uncheck thì vẫn hiển thị input cho nên React nó hiểu là input đó vẫn tồn tại và chỉ thay đổi các props mà thôi, cho nên React chỉ re-render component đó mà thôi chứ không có unmount hay mouting lại gì cả

## Thuật toán của reconciliation

- Initial render(lần render đầu tiên của ứng dụng) thì:
- Nếu React thấy _type_ là `string`, thì nó sẽ chuyển thành element trong DOM. Ví dụ là "input", "label", "button"...
- Còn nếu React thấy _type_ là `function`, thì nó gọi component đó sẽ duyệt qua toàn bộ DOM trong _return_ của component đó. Ví dụ là Input, Textarea, Button

### Code

```jsx
export default function Wrapper(_props: WrapperProps) {
  return (
    <div>
      <Input placeholder="text1" id="1" />
      <Input placeholder="text2" id="2" />
    </div>
  );
}
```

### Virtual DOM

```js
const item = {
  type: "div",
  props: {
    children: [
      {
        type: Input,
        props: {
          placeholder: "text1",
          id: "1",
        },
      },
      {
        type: Input,
        props: {
          placeholder: "text2",
          id: "2",
        },
      },
    ],
  },
};
```

### Real DOM

```html
<div>
  <label for="1"></label>
  <input placeholder="text1" id="1" type="text" />
  <label for="2"></label>
  <input placeholder="text2" id="2" type="text" />
</div>
```

## Reconciliation và state

## Giải quyết vấn đề

## Reconciliation và array

## Reconciliation và Key

## Tại sao không cần _key_ bên ngoài mảng(rendering list)

## Rendering list và element

## Tại sao không nên định nghĩa component bên trong component khác ?

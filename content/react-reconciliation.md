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

- Initial render(lần render đầu tiên của ứng dụng) thì React sẽ duyệt qua DOM tree và thực hiện các việc sau:
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

## Reconciliation và state update

- React thấy type ban đầu là input, sau khi re-render thì type trở thành `div` cho nên React sẽ xóa(unmount) `input` và tạo mới thẻ `div`(mouting), cho nên những giá trị mà mình nhập trước đó sẽ bị mất hết.

```js
const before = {
  type: "input",
  props: {...}
};
const after = {
  type: "div",
  props: {...}
};
```

- Ban đầu React thấy type là `input`, sau khi re-render thì cũng thấy type là `input`, cho nên React hiểu đây là cùng một element cho nên React chỉ cập nhật những thay đổi mới mà thôi.

```js
const before = {
  type: "input",
  props: {
    placeholder: "Enter your company number",
  },
};
const after = {
  type: "input",
  props: {
    placeholder: "Enter your person number",
  },
};
```

## Giải quyết vấn đề

### Reconciliation và array

- Với việc viết lại điều kiện với conditional rendering thì chúng ta đã giải quyết được bài toán khi mà hiểu được việc virtual DOM render ra dưới dạng array bằng việc thay đổi vị trí của chúng trong mảng.
- Như ví dụ bên dưới thì before và after giống nhau thì react sẽ giữ nguyên element đó và chỉ re-render, còn nếu khác thì nó sẽ unmount phần tử before và mounting phần tử after

```jsx
// isCompany is true
const before = [
  {
    type: "input",
  },
  {
    type: "input",
  },
  null,
];
// isCompany is false
const after = [
  {
    type: "input",
  },
  null,
  {
    type: "input",
  },
];
```

### Reconciliation và Key

- Sử dụng key khác nhau giúp React phân biệt được các element/component khác nhau từ đó giải quyết được bài toán

## Tại sao không cần _key_ bên ngoài mảng(rendering list)

- Bởi vì khi sử dụng mảng thì React sẽ không biết được data nó sẽ như thế nào ? Nghĩa là nó có thể thêm, xóa, sửa, sắp xếp, thay đổi...

## Rendering list và element

- Trong React, virtual DOM thì rendering list sẽ được render trong một mảng chứa các object có type, cho nên nếu có element đứng sau rendering list thì vị trí của nó cũng không bị tác động bởi rendering list

## Tại sao không nên định nghĩa component bên trong component khác ?

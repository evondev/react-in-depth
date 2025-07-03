# React reconciliation là gì ?

React Reconciliation là quá trình React sử dụng để so sánh (diff) giữa Virtual DOM cũ và Virtual DOM mới, từ đó tính toán các thay đổi tối thiểu cần thiết để cập nhật DOM thực tế (real DOM).

- Khi bạn cập nhật state hoặc props, React sẽ:
- Tạo ra một cây Virtual DOM mới dựa trên render mới.
- So sánh (diff) cây Virtual DOM mới với cây cũ.
- Tìm ra sự khác biệt.
- Cập nhật (patch) lại DOM thực tế một cách hiệu quả, thay vì render lại toàn bộ.

## Vấn đề với conditional rendering

## Thuật toán của reconciliation

## Reconciliation và state

## Giải quyết vấn đề

## Reconciliation và array

## Reconciliation và Key

## Tại sao không cần _key_ bên ngoài mảng(rendering list)

## Rendering list và element

## Tại sao không nên định nghĩa component bên trong component khác ?

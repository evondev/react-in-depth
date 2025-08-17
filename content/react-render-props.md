# Render props

- Kỹ thuật render props trong React là một cách để chia sẻ logic giữa các component bằng cách truyền một hàm dưới dạng prop, hàm này sẽ trả về các phần tử React (JSX) để render. Đây là một kỹ thuật mạnh mẽ để tái sử dụng logic mà không cần phải truyền trực tiếp các Element dưới dạng props.
- Với render props, bạn có toàn quyền kiểm soát cách render UI bằng cách cung cấp một hàm. Điều này cho phép bạn sử dụng bất kỳ logic nào trong hàm render (ví dụ: điều kiện, vòng lặp, hoặc kết hợp nhiều component).
- Với render props, bạn có thể sử dụng dữ liệu được cung cấp để kết hợp với các thư viện (như animation, chart) hoặc tạo ra giao diện phức tạp hơn.
- Render props thể hiện rõ ràng logic render nằm ở đâu (trong hàm _render_). Điều này giúp code dễ đọc hơn khi logic UI phức tạp.

## Khi nào nên sử dụng Render Props?

- Khi bạn cần chia sẻ logic (như state, xử lý sự kiện) giữa các component mà không muốn cố định UI.
- Khi bạn muốn component cha có toàn quyền kiểm soát cách render UI dựa trên dữ liệu từ component con.

import ReactReconciliationSolution from "./components/react-reconciliation/solution";

function App() {
  return (
    <>
      {[1, 2, 3].map((item) => (
        <div>{item}</div>
      ))}
      <ReactReconciliationSolution />
    </>
  );
}
// const list = [
//   {
//     type: "div",
//     key: "3"
//   },
//   {
//     type: "div",
//     key: "2"
//   },
//   {
//     type: "div",
//     key: "1"
//   },
// ];

export default App;

export const App = () => {
  const onclickButton = () => {
    alert("clicked!");
  };
  return (
    <>
      <h1>React</h1>
      <p>ReactのApp.jsxから表示してます。</p>
      <button onClick={onclickButton}>クリック</button>
    </>
  );
};

import "./styleBtn.css";
export default function Button({ children }) {
  return (
    <>
      {children == null ? (
        <></>
      ) : (
        <button className="Btn-hover">{children}</button>
      )}
    </>
  );
}

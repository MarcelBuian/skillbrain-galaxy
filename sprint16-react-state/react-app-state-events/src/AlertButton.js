export default function AlertButton(props) {
  return (
    <button onClick={() => alert(props.message)}>
      {props.children}
    </button>
  );
}

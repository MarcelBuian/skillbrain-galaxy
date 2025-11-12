export default function AlertButton2(props) {
  return (
    <button onClick={props.handleClick}>
      {props.children}
    </button>
  );
}

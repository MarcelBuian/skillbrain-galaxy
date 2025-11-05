import './MyButton.css';

export default function MyButton(props) {
    function handleClick() {
        alert('You clicked me!');
    }

    return (
        <button onClick={handleClick}>
            { props.name ?? `I'm a button`}
        </button>
    );
}

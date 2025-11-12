export default function Form() {
    function handleSubmit(event) {
        event.preventDefault();
        console.log(event.target);
        console.log('You clicked submit.');
    }

    return (
        <form onSubmit={handleSubmit}>
            <button type="submit">Submit</button>
        </form>
    );
}

import './App.css';
import Button from './Button'; 
import DangerButton from './DangerButton';
import MyButton from './MyButton';

const name = 'Josh Perez';
const element = 
  <>
    <h1>Title</h1>
    <h1 className="my-class" tagIndex="valoare">Hello, {name}</h1>
  </>
;

function App() {
  return (
    <div className="App">
      {element}
      {element}
      {element}
      <>
        {/* Hello world */}
        <div className="awesome" style={{ border: "1px solid red" }}>
          <label htmlFor="name">Enter your name: </label>
          <input type="text" id="name" />
        </div>
        <p>Enter your HTML here</p>
      </>

      <Button color="blue" name="Primul buton" />
      <Button color="blue" />
      <Button color="blue" name="Al treilea buton" />

      <DangerButton></DangerButton>
      <DangerButton />

      <hr />

      <MyButton></MyButton>
      <MyButton name="Best Button"></MyButton>
    </div>
  );
}

export default App;

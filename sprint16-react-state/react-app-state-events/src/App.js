import './App.css';
import Button from './Button';
import FeedbackForm from './FeedbackForm';
import Form from './Form';
import Toolbar from './Toolbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Form />
        <Button />
        <Toolbar />
        <hr />
        <FeedbackForm />
      </header>
    </div>
  );
}

export default App;

import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  const handleClick = () => {
    console.log(alertVisible);
    setAlertVisibility(true);
  };

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
      )}
      <Button color="primary" onClick={handleClick}>
        My Button
      </Button>
    </div>
  );
}

// Exporting so that the component can
// can be used elsewhare.
export default App;

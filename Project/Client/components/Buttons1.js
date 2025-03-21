import { Button, ButtonGroup } from 'react-bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 

function Buttons1() {
  return (
      <ButtonGroup>
        <Button variant="primary">Old</Button>
        <Button variant="primary">New</Button>
      </ButtonGroup>
  );
}

export default Buttons1; 

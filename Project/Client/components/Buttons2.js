import { Button, ButtonGroup } from 'react-bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 

function Buttons2() {
  return (
      <ButtonGroup>
        <Button variant="primary">Rated poor</Button>
        <Button variant="primary">Rated well</Button>
      </ButtonGroup>
  );
}

export default Buttons2; 

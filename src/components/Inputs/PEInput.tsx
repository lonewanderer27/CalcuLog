import { markEnums, roundingchopping } from '../../enums';

import ControlBtns from '../ControlBtns';
import Form from 'react-bootstrap/Form';

export default function PEInput(props: {
  screen: markEnums;
  ansPE: () => void;
  ansIdle: () => void;
  clearInputs: (screen: markEnums) => void;
  trueValue: string;
  approxValue: string;
  roundingchopping: roundingchopping;
  numDigits: number;
  handlePEChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="col-12 col-lg-6 p-0 p-sm-2">
      <div className="pe p-4">
        <h3>Propagation Error</h3> 
        <Form>
          <div className="row">
            <div className="col-12">
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>True Value</Form.Label>
                <Form.Control name="trueValue" type="text" value={props.trueValue} onChange={props.handlePEChange} />
              </Form.Group>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-xl-6">
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Round or Chop</Form.Label>
                <Form.Select name="roundingchopping" onChange={props.handlePEChange}>
                  <option value={roundingchopping.rounding}>Rounding</option>
                  <option value={roundingchopping.chopping}>Chopping</option>
                </Form.Select>
              </Form.Group>
            </div>
            <div className="col-12 col-xl-6">
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Number of Decimal Places</Form.Label>
                <Form.Control name="numDigits" value={props.numDigits} type="number" placeholder="5" onChange={props.handlePEChange}  />
              </Form.Group>
            </div>
          </div>
        </Form>
        <div className="mt-auto">
          <ControlBtns 
            handleClear={() => props.clearInputs(markEnums.pe)} 
            screen={props.screen} 
            handleSubmit={() => props.ansPE()}
            handleBack={() => props.ansIdle()} 
          />
        </div>
      </div>
    </div>
  )
}
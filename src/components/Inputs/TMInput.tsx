import ControlBtns from '../ControlBtns';
import Form from 'react-bootstrap/Form';
import { markEnums } from '../../enums';

export default function TMInput(props: {
  screen: markEnums;
  ansTM: () => void;
  ansIdle: () => void;
  clearInputs: (screen: markEnums) => void;
  numDigits: number;
  nthDegree: number;
  xvar: number;
  handleTMChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="col-12 col-lg-6 p-0 p-sm-2">
      <div className="tm p-4">
        <h3>Taylor-Maclaurin</h3>
        <Form>
          <div className="row">
            <div className="col-12">
              <Form.Group className="mb-3">
                <Form.Label>Function</Form.Label>
                <Form.Control readOnly disabled value={"ln(x+1)"} type="text"/>
              </Form.Group>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-xl-6">
              <Form.Group className="mb-3">
                <Form.Label>Point</Form.Label>
                <Form.Control readOnly disabled type="number" placeholder="0" />
              </Form.Group>
            </div>
            <div className="col-12 col-xl-6">
              <Form.Group className="mb-3">
                <Form.Label>Number of Decimal Places</Form.Label>
                <Form.Control name="numDigits" value={props.numDigits} type="number" onChange={props.handleTMChange}  />
              </Form.Group>
            </div>
            <div className="col-6 col-xl-6">
              <Form.Group className="mb-3">
                <Form.Label>nthDegree</Form.Label>
                <Form.Control name="nthDegree" value={props.nthDegree} type="number" onChange={props.handleTMChange}  />
              </Form.Group>
            </div>
            <div className="col-6 col-xl-6">
              <Form.Group className="mb-3">
                <Form.Label>x variable</Form.Label>
                <Form.Control name="xvar" value={props.xvar} type="number" onChange={props.handleTMChange}  />
              </Form.Group>
            </div>
          </div>
        </Form>
        <div className="mt-auto">
          <ControlBtns 
            handleClear={() => props.clearInputs(markEnums.tm)} 
            screen={props.screen} 
            handleSubmit={() => props.ansTM()}
            handleBack={() => props.ansIdle()}
          />
        </div>
      </div>
    </div>
  )
}
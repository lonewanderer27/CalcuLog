import ControlBtns from '../ControlBtns';
import Form from 'react-bootstrap/Form';

export default function PEAnswer() {
  return (
    <div className="col-12 col-lg-6 p-0 p-sm-2">
      <div className="pe p-4">
        <h3>Propagation Error</h3> 
        <Form>
          <div className="row">
            <div className="col-12">
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>True Value</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-xl-6">
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Round or Chop</Form.Label>
                <Form.Select>
                  <option value="ROUNDING">Rounding</option>
                  <option value="CHOPPING">Chopping</option>
                </Form.Select>
              </Form.Group>
            </div>
            <div className="col-12 col-xl-6">
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Number of Decimal Places</Form.Label>
                <Form.Control type="number" placeholder="5" defaultValue={0} />
              </Form.Group>
            </div>
          </div>
        </Form>
        <div className="mt-auto">
          <ControlBtns/>
        </div>
      </div>
    </div>
  )
}
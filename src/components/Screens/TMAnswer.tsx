import ControlBtns from '../ControlBtns';
import Form from 'react-bootstrap/Form';

export default function TMAnswer() {
  return (
    <div className="col-12 col-lg-6 p-0 p-sm-2">
      <div className="tm p-4">
        <h3>Taylor-Maclaurin</h3>
        <Form>
          <div className="row">
            <div className="col-12">
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Function</Form.Label>
                <Form.Control readOnly disabled value={"ln(x+1)"} type="text" />
              </Form.Group>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-xl-6">
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Point</Form.Label>
                <Form.Control readOnly disabled type="number" placeholder="0" defaultValue={0} />
              </Form.Group>
            </div>
            <div className="col-12 col-xl-6">
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Number of Decimal Places</Form.Label>
                <Form.Control type="number" defaultValue={0} />
              </Form.Group>
            </div>
            <div className="col-6 col-xl-6">
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>nthDegree</Form.Label>
                <Form.Control type="number" defaultValue={0} />
              </Form.Group>
            </div>
            <div className="col-6 col-xl-6">
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>x variable</Form.Label>
                <Form.Control type="number" defaultValue={0} />
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
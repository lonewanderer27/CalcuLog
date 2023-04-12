import "./styles.css"

export default function ControlBtns() {
  return (
    <div className="row">
      <div className="col">
        <button className="py-2 w-100 submitBtn">Submit</button>
      </div>
      <div className="col">
        <button className="py-2 w-100 removeBtn">Remove</button>
      </div>
    </div>
  )
}
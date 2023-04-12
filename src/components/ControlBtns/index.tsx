import "./styles.css"

import { markEnums } from "../../enums"

export default function ControlBtns(props: {
  screen: markEnums;
  handleBack: () => void;
  handleSubmit: () => void;
  handleClear: () => void;
}) {

  return (
    <div className="row">
      {(props.screen === markEnums.idle) && <>
        <div className="col">
          <button className="py-2 w-100 submitBtn" onClick={() => props.handleSubmit()}>Submit</button>
        </div>
        <div className="col">
          <button className="py-2 w-100 removeBtn" onClick={() => props.handleClear()}>Clear</button>
        </div>
      </>}
      {(props.screen !== markEnums.idle) && 
        <div className="col">
          <button className="py-2 w-100 backBtn" onClick={() => props.handleBack()}>Back</button>
        </div>}
    </div>
  )
}
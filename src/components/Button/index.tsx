import { buttonType } from "../../enums";

export default function Button(props: {
  buttonType: buttonType
  onClick: () => any;
}){
  const determineText = () => {
    switch(props.buttonType){
      case buttonType.backBtn: return "Back";
      case buttonType.removeBtn: return "Remove";
      case buttonType.submitBtn: return "Submit";
    }
  }

  return (
    <button className={`button ${props.buttonType}`} onClick={props.onClick}>
      {determineText()}
    </button>
  )
}
import { KeyType } from "../../enums";
import Styles from "./index.module.scss";
import Text2SVG from "react-hook-mathjax";

export default function Key(props: {
  value: string;
  type: KeyType;
  latex: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined
}){
  const determineBGColor = () => {
    switch(props.type) {
      case KeyType.number: return "#6663EC";
      case KeyType.letter: return "#7C7BB2";
      case KeyType.special: return "#DBC0C3";
      case KeyType.secondspecial: return "#FFFFFF";
      case KeyType.success: return "rgb(5, 255, 80)"
      default: return "#FFFFFF"; 
    }
  }

  const determineColor = () => {
    switch(props.type) {
      case KeyType.special: return "black";
      case KeyType.secondspecial: return "black";
      case KeyType.number: return "white";
      case KeyType.letter: return "white";
      default: return "#FFFFFF"; 
    }
  }

  return (
    <button className={Styles.key} style={{
      backgroundColor: determineBGColor(),
      color: determineColor()
    }} onClick={props.onClick}>
      {props.latex === true ? 
        <Text2SVG
          display="inline"
          latex={props.value}
        /> : 
        props.value}
    </button>    
  )
}

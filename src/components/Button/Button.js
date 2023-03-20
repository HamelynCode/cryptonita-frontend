import './Button.css';

export default function Button(props){
  return(
    <button className={`button ${props.classes}`} onClick={props.onClick}>{props.text}</button>
  );
};
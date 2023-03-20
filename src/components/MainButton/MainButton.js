import './MainButton.css';

export default function MainButton(props){
  return(
  <>
    <button className={`main-button ${props.classes}`} onClick={props.onClick}>{props.text}</button>
  </>
  );
};
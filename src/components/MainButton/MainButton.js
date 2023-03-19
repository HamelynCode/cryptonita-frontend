import './MainButton.css';

export default function MainButton(props){
  return(
  <>
    <button className={`${props.class} main-button`} onClick={props.onClick}>{props.text}</button>
  </>
  );
};
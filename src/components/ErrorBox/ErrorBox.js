import './ErrorBox.css';

export default function ErrorBox(props){
  return(
    <div className='error-box'>
      <p className={`error-box__message`}>{props.text}</p>
    </div>
  );
};
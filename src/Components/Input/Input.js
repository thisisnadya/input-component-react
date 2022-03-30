import "./Input.css";

const Input = ({ style, ...props }) => {
  return (
    <div className="box">
      <span className={props.labelClass}>{props.labelText}</span>
      <div className="input-content">
        <span className={props.labelStyle}>Label</span>
        <input
          type="text"
          style={style}
          disabled={props.disabled}
          className={props.buttonClass}
          placeholder={props.placeholder}
          iconStart={props.iconStart}
          iconEnd={props.iconEnd}
        />
        <i className='iconStart'>{props.iconStart}</i>
        <i className='iconEnd'>{props.iconEnd}</i>
        <p className={props.labelStyle}>{props.additionText}</p>
      </div>
    </div>
  );
};

export const TextArea = ({ style, ...props }) => {
  return (
    <div className="box">
      <span className={props.labelClass}>{props.labelText}</span>
      <div className="text-area">
        <span className={props.labelStyle}>Label</span>
        <textarea rows="4" placeholder={props.placeholder}></textarea>
      </div>
    </div>
  );
};

export default Input;

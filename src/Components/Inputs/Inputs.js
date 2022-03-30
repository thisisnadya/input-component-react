import Input from "../Input/Input";
import { TextArea } from "../Input/Input";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LockIcon from '@mui/icons-material/Lock';
import "./Inputs.css";

const Inputs = () => {
  return (
    <div className="inputContainer mt-5">
      <div className="box1">
        <Input
          labelText="<Input />"
          placeholder="Placeholder"
          style={{ border: "1px solid #828282" }}
        />
        <Input
          labelText="&:hover"
          labelClass="labelHover"
          placeholder="Placeholder"
          style={{ border: "1px solid #333333" }}
        />
        <Input
          labelText="&:focus"
          labelClass="labelHover"
          labelStyle="primary"
          placeholder="Placeholder"
          style={{ border: "1px solid #2962FF" }}
        />
        <Input
          labelText="<Input error />"
          labelStyle="danger"
          placeholder="Placeholder"
          style={{ border: "1px solid #D32F2F" }}
        />
        <Input
          labelText="&:hover"
          labelClass="labelHover"
          placeholder="Placeholder"
          style={{ border: "1px solid #333333" }}
        />
        <Input
          labelText="&:focus"
          labelClass="labelHover"
          labelStyle="danger"
          placeholder="Placeholder"
          style={{ border: "1px solid #D32F2F" }}
        />
      </div>
      <div className="box2">
        <Input
          labelText="<Input disabled />"
          placeholder="Placeholder"
          style={{ backgroundColor: "#F2F2F2", border: "1px solid #E0E0E0" }}
        />
      </div>
      <div className="box3">
        <Input
          labelText='<Input helperText="Some interesting text" />'
          placeholder="Placeholder"
          style={{ border: "1px solid #828282" }}
          additionText="Some interesting text"
        />
        <Input
          labelText='<Input helperText="Some interesting text" error />'
          labelStyle="danger"
          placeholder="Placeholder"
          style={{ border: "1px solid #D32F2F" }}
          additionText="Some interesting text"
        />
        <Input
          labelText="<Input startIcon />"
          iconStart={<LocalPhoneIcon/>}
          placeholder="Placeholder"
          style={{ border: "1px solid #828282", paddingLeft: '40px' }}
        />
        <Input
          labelText="<Input endIcon />"
          iconEnd={<LockIcon/>}
          placeholder="Placeholder"
          style={{ border: "1px solid #828282" }}
        />
      </div>
      <div className="box4">
        <Input
          labelText="<Input value='text' />"
          placeholder="Text"
          style={{ border: "1px solid #828282", fontWeight: '500', color: '#333333' }}
        />
      </div>
      <div className="box5">
        <Input
          labelText="<Input size='sm' />"
          placeholder="Placeholder"
          style={{ border: "1px solid #828282", padding: "7px" }}
        />
        <Input
          labelText="<Input size='md' />"
          placeholder="Placeholder"
          style={{ border: "1px solid #828282" }}
        />
      </div>
      <div className="box6">
        <Input
          labelText="<Input fullWidth />"
          placeholder="Text"
          style={{ border: "1px solid #828282", width: "100%", fontWeight: '500', color: '#333333' }}
        />
      </div>
      <div className="box7">
        <TextArea
          labelText='Input multiline row="4" />'
          placeholder="Placeholder"
        />
      </div>
      <footer>
        <span>
          created by{" "}
          <a href="https://devchallenges.io/portfolio/thisisnadya">
            thisisnadya
          </a>{" "}
          - devChallenges.io
        </span>
      </footer>
    </div>
  );
};

export default Inputs;

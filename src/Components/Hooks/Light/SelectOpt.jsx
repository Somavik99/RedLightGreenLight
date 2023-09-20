import { Option } from "@material-tailwind/react";

const SelectOpt = ({ option, ChangeValue, setChangeOptions }) => {
  return (
    <Option
      value={ChangeValue}
      onChange={(e) => setChangeOptions(e.target.value)}
    >
      {option.Mode} : {option.Click}
    </Option>
  );
};

export default SelectOpt;

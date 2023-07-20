const InputField = ({ onChange, fieldType, inputType, label, name, value, placeholder }) => {
  switch (fieldType) {
    case "input":
      return (
        <div className="input__field">
          {label ? <label>{label}</label> : ""}
          <input type={inputType} value={value} placeholder={placeholder} name={name} onChange={onChange} />
        </div>
      );

    default:
      return (
        <div className="input__field">
          <label>{label}</label>
          <input type={inputType} placeholder={placeholder} value={value} name={name} onChange={onChange} />
        </div>
      );
  }
};

export default InputField;

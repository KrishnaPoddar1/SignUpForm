import { useState } from "react";

const FormInput = (props) => {

    const [focused,setFocused] = useState(false);
    const {onChange,errorMessage,id,...inputProps} = props;

    const handleFocus = (e) => {
        setFocused(true);
    };

    return (
        <section className="formInput">
            <input {...inputProps} onChange={onChange} onBlur={handleFocus} focused={focused.toString()}/>
            <span>{errorMessage}</span>
            <img className="error"></img> 
        </section>
    );

};

export default FormInput;
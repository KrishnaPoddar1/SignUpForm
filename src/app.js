import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import FormInput from "./components/FormInput";

const App = () => {

    const [values,setValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });

    const inputs = [
        {
            id:1,
            name:"firstName",
            type:"text",
            errorMessage:"First Name cannot be empty",
            placeholder:"First Name",
            required:true
            
        },
        {
            id:2,
            name:"lastName",
            type:"text",
            errorMessage:"Last Name cannot be empty",
            placeholder:"Last Name",
            required:true
            
        },
        {
            id:3,
            name:"email",
            type:"email",
            errorMessage:"Looks like this is not an email",
            placeholder:"Email",
            required:true
            
        },
        {
            id:4,
            name:"password",
            type:"password",
            errorMessage:"Password cannot be empty",
            placeholder:"Password",
            pattern:`^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$`,
            required:true
            
        },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const onChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value });
    };

    console.log(values);
    return (
        <section>
            <button className="btn-first"><b>Try it free 7 days</b> then $20/mo. thereafter</button>
            <section className="form">
                <form onSubmit={handleSubmit}>
                    {
                        inputs.map((input)=>(
                            <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange}/>
                    ))
                    }
                    
                    <button>Claim your free trial</button>
                </form>
                <p className="last-p">By clicking the button, you are agreeing to our <span className="red-color">Terms and Services</span></p>
            </section>
        </section>
        
    );
};

const root = ReactDOM.createRoot(document.getElementById("right"));

root.render(<App />);
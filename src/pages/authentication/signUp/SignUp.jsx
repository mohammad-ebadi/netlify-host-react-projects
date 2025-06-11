import { useState } from "react";
import style from "./SignUp.module.css";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords don't match!");
            return;
        }
        // Add your signup logic here
        console.log("Sign up data:", formData);
        navigate("/signIn");
    };

    return (
        <div className={style.background}>
            <form className={style.form} onSubmit={handleSubmit}>
                <div className={style.content}>
                    <h1>React Projects</h1>
                    <p><b>Sign Up</b></p>
                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name ..."
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email ..."
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password ..."
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password ..."
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit">Sign Up</button>
                    <p className={style.loginLink}>
                        Already have an account? <span onClick={() => navigate("/signIn")}>Sign In</span>
                    </p>
                </div>
            </form>
        </div>
    );
}
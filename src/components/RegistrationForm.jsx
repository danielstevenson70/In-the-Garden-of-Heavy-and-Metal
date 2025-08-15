import { useState } from "react";
import { useNavigate } from "react-router";

const RegisterForm = () => {
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [properName, setProperName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const apiUrl = `${import.meta.env.VITE_API_URL}/register`;
    const body = {
      name: properName,
      email: emailAddress,
      hashed_password: password,
    };

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log("DATA: ", data);
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      method="POST"
      onSubmit={(e) => handleSubmit(e)}
        style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '50vh',
        fontFamily: 'Arial, sans-serif',
        marginTop: '20px',
        marginBottom: '20px'
        }}
    >
      <label>
        What is Your Name?
        <input
          type="text"
          name="properName"
          value={properName}
          placeholder="First & Last Name"
          onChange={(e) => setProperName(e.target.value)}
          style={{
            width: '80%',
            padding: '12px 15px',
            margin: '10px 20px 0',
            border: '1px solid #ccc',
            borderRadius: '8px',
            boxSizing: 'border-box',
            fontSize: '16px',
            transition: 'border 0.3s',
            marginTop: '20px',
            marginBottom: '20px'
            }}
        />
      </label>
      <label>
        What is Your Email Address?
        <input
          type="text"
          name="emailAddress"
          value={emailAddress}
          placeholder="user@email.com"
          onChange={(e) => setEmailAddress(e.target.value)}
          style={{
            width: '80%',
            padding: '12px 15px',
            margin: '10px 20px 0',
            border: '1px solid #ccc',
            borderRadius: '8px',
            boxSizing: 'border-box',
            fontSize: '16px',
            transition: 'border 0.3s',
            marginTop: '20px',
            marginBottom: '20px'
            }}
        />
      </label>
      <label>
        Set a Password :
        <input
          type="password"
          name="password"
          value={password}
          placeholder="Make it a good password"
          onChange={(e) => setPassword(e.target.value)}
            style={{
            width: '80%',
            padding: '12px 15px',
            margin: '10px 20px 0',
            border: '1px solid #ccc',
            borderRadius: '8px',
            boxSizing: 'border-box',
            fontSize: '16px',
            transition: 'border 0.3s',
            marginTop: '20px',
            marginBottom: '20px'
            }}
        />
      </label>
       <button
          type='submit'
          style={{
            width: '8%',
            padding: '12px',
            backgroundColor: '#9561d9ff',
            color: 'white',
            fontSize: '20px',
            border: 'none',
            borderRadius: '10px',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
            marginTop: '20px',
            marginBottom: '20px'
          }}
        >
          Register
        </button>
    </form>
  );
};

export default RegisterForm;
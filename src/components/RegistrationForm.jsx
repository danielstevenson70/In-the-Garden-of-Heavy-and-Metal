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
    >
      <label>
        What is Your Name?
        <input
          type="text"
          name="properName"
          value={properName}
          placeholder="Firstname Lastname"
          onChange={(e) => setProperName(e.target.value)}
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
        />
      </label>
      <label>
        Set a Password
        <input
          type="password"
          name="password"
          value={password}
          placeholder="battery horse correct staple"
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
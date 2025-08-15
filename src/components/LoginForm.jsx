import { useState } from 'react';
import { useNavigate } from "react-router";
import { useAuth } from '../AuthContext';


import { Link } from 'react-router';

const LoginForm = () => {
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const { setIsAuth } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const apiUrl = `${import.meta.env.VITE_API_URL}/login`;
    const body = {
      email: emailAddress,
      hashed_password: password,
    };

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('response2', response)
      if (!response.ok) {
        // Handle non-successful responses (e.g., 401, 404, 500)
        const errorData = await response.json().catch(() => ({})); // Try to parse JSON error body, but handle failure
        console.error('Login failed:', response.status, errorData);
        // You might want to display an error message to the user here
        return; // Stop execution if the response is not OK
      }
      const statusCode = response.status;
      console.log('RESPONSE:', response, response.status);
      const data = await response.json();

      const { access_token } = data;
      localStorage.clear();
      localStorage.setItem('access_token', access_token);
      setIsAuth(statusCode === 200);
      navigate("/links");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <form
        method='POST'
        onSubmit={(e) => handleSubmit(e)}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          height: '50vh',
          fontFamily: 'Arial, sans-serif'
        }}
      >
        <label>
          Username :
          <input
            type='text'
            name='emailAddress'
            value={emailAddress}
            placeholder='user@email.com'
            onChange={(e) => setEmailAddress(e.target.value)}
            style={{
              width: '80%',
              padding: '12px 15px',
              margin: '10px 20px 0',
              border: '1px solid #ccc',
              borderRadius: '8px',
              boxSizing: 'border-box',
              fontSize: '16px',
              transition: 'border 0.3s'
            }}
          />
        </label>
        <label>
          Password :
          <input
            type='password'
            name='password'
            value={password}
            placeholder='password'
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: '80%',
              padding: '12px 15px',
              margin: '10px 20px 0',
              border: '1px solid #ccc',
              borderRadius: '8px',
              boxSizing: 'border-box',
              fontSize: '16px',
              transition: 'border 0.3s'
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
          Login
        </button>
        <Link to='/register'>Don't Have An Account? Register Your Account</Link> 
        
      </form>
    </>
  );
};

export default LoginForm;
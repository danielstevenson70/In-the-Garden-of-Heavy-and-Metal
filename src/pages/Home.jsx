import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [linkName, setLinkName] = useState("");
  const [linkUrl, setLinkUrl] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("test submit"); // ✅ will show now
    // You can pass state to the next route
    navigate("/searchBands", { state: { linkName, linkUrl } });
  };

return (
  <>
    <p>Find Your Metal Band :</p>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="linkName"
        value={linkName}
        onChange={(e) => setLinkName(e.target.value)}
        placeholder="doom, death, heavy"
        style={{
          alignItems: 'center',
          width: '35%',
          padding: '12px 15px',
          margin: '10px 20px 0',
          border: '1px solid #ccc',
          borderRadius: '8px',
          boxSizing: 'border-box',
          fontSize: '16px',
          transition: 'border 0.3s',
          marginTop: '20px',
          marginBottom: '20px',
          marginLeft: '450px'
        }}
      />
       <button 
        type="submit"
        style={{
          marginLeft: '650px',
          marginBottom: '20px',
          padding: '12px 24px',
          backgroundColor: '#333',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          fontSize: '16px',
          cursor: 'pointer'
        }}
      >
        Search
      </button>
    </form>
    <img src="/ozzman.jpg" alt="Ozzy Fucking Osbourne" className="Ozzy"></img>
    <h2>R.I.P to the Godfather of all that is Metal</h2>
  </>
);
};

export default Home;

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
        />
        {/* <input
          type="text"
          name="linkUrl"
          value={linkUrl}
          onChange={(e) => setLinkUrl(e.target.value)}
        /> */}
        <button type="submit">Submit</button>
      </form>
      <img src="/ozzman.jpg" alt="Ozzy Fucking Osbourne" className="Ozzy"></img>
      <h2>R.I.P to the Godfather of all that is Metal</h2>
    </>
  );
};

export default Home;

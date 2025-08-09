const Home = () => {
    return (
        <>
            <p>Find Your Metal Band :</p>
            <input type="text" className="question" placeholder="ex: doom, grind, heavy" />
            <button type="button" style={{ display: "flex", margin: "15px auto", padding: "10px 25px", fontSize: "1.2rem", borderRadius: "8px", background: "#444", color: "#fff", border: "none", cursor: "pointer" }}>
                Search
            </button>
            <img src="/ozzman.jpg" alt="Ozzy Fucking Osbourne" className="Ozzy"></img>
            <h2>R.I.P to the Godfather of all that is Metal</h2>
        </>
    );
};

export default Home;
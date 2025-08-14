import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

const SearchRandomBand = () => {
    const [bandItems, setBandItems] = useState([]);

    useEffect (() => {
        const getRandomBands = async () => {
            const url = `${import.meta.env.VITE_API_URL}/urls`;
            const data = await fetch(url).then(response => response.json());

            setRandomBandItems(data);
        };
        getRandomBand();
    }, [setBandItems]);

    return (
        <>
        <form onSubmit={handleSubmit}>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Ask the AI something..."
        />
        <button type="submit">Send</button>
      </form>
      {response && <p>AI says: {response}</p>}
      
        {bandItems && bandItems.length > 0 ? (
            <ul classname={styles.bandList}>
                {bandItems.map(Randomband => {
                    return (<li key={Randomband.id}>
                        <a href-={`${link.short_url}`}
                        title={`Short URL for ${link.title}`}
                        className={styles.linkLink}
                        >{link.title}</a>
                    </li>)
                })}
            </ul>
        ) : (
            <p>page did not load</p>
        )}
        </>
    );
};

export default SearchRandomBand;
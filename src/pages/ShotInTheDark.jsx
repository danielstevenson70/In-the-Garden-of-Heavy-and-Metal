import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

const SearchRandomBand = () => {
    const [bandItems, setBandItems] = useState([]);

    useEffect (() => {
        const getBands = async () => {
            const url = `${import.meta.env.VITE_API_URL}/urls`;
            const data = await fetch(url).then(response => response.json());

            setRandomBandsItems(data);
        };
        getRandomBands();
    }, [setBandItems]);

    return (
        <>
        {bandItems && bandItems.length > 0 ? (
            <ul classname={styles.bandList}>
                {bandItems.map(Randombands => {
                    return (<li key={Randombands.id}>
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
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

const SearchBands = () => {
    const [bandItems, setBandItems] = useState([]);

    useEffect (() => {
        const getBands = async () => {
            const url = `${import.meta.env.VITE_API_URL}/urls`;
            const data = await fetch(url).then(response => response.json());

            setBandsItems(data);
        };
        getBands();
    }, [setBandItems]);

    return (
        <>
        {bandItems && bandItems.length > 0 ? (
            <ul classname={styles.bandList}>
                {bandItems.map(bands => {
                    return (<li key={bands.id}>
                        <a href-={`${link.short_url}`}
                        title={`Short URL for ${link.title}`}
                        className={styles.linkLink}
                        >{link.title}</a>
                    </li>)
                })}
            </ul>
        ) : (
            <p>bands did not load</p>
        )}
        </>
    );
};

export default SearchBands
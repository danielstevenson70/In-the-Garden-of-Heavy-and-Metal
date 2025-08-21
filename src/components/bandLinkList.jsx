import { useState, useEffect } from "react";
import SearchBands from "../pages/SearchBands";
import styles from './BandLinkList.module.css';

const getBandLinks = () => {
    const [bandLinkItems, setBandLinkItems] = useState([]);

    useEffect(() => {
        const getBandLinks = async () => {
            const url = `${import.meta.env.VITE_API_URL}/bands_name`;
            const data = await fetch(url).then(response => response.json());
            setBandLinkItems(data);
        };
        getBandLinks();
    }, [setBandLinkItems]); 


    return (
        <>
        {bandLinkItems && bandLinkItems.length > 0 ? (
            <ul className={styles.BandLink.module}>
                {linkItems.map(link => {
                    return (<li key={link.id}>
                        <a href={`/band/${link.short_url}`} 
                        title={`Short URL for ${link.title}`}
                        className={styles.linkLink}
                        >{link.title}</a>
                    </li>)
                })}
            </ul>
        ) : (
            <p>Bands did not load</p>
            )}
        </>
    );
};

export default bandLinkList;

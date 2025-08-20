import { useState, useEffect } from "react";
import styles from './BandLinkList.module.css';

const bandLinkList = () => {
    const [linkItems, setBandLinkItems] = useState([]);

    useEffect(() => {
        const getBandLinks = async () => {
            const url = `${import.meta.env.VITE_API_URL}/urls`;
            const data = await fetch(url).then(response => response.json());
            setLinkItems(data);
        };
        getBandLinks();
    }, []); 


    return (
        <>
        {bandLinkItems && bandLinkItems.length > 0 ? (
            <ul className={styles.BandLink.module}>
                {linkItems.map(link => {
                    return (<li key={link.id}>
                        <a href={`/band/1${link.short_url}`} 
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

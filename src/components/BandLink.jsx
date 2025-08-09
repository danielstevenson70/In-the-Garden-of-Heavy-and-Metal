import { useState, useEffect } from "react";
import styles from "./Link.module.css"


const bandLinkList = () => {
    const [linkItems, setBandLinkItems] = useState([]);

    useEffect(() => {
        const getBandLinks = async () => {
            const url = `${import.meta.env.VITE_API_URL}/urls`;
            const data = await fetch(url).then(response => response.json());
            
            setLinkItems(data);
        };
        getBandLinks();
    }, [setBandLinkItems]); 

    return (
        <>
        {linkItems && linkItems.length > 0 ? (
            <ul className={styles.linkList}>
                {linkItems.map(link => {
                    // return (<li key={link.id}>
                    //     <a href={`https://bzzt.fun/${link.short_url}`} 
                    //     title={`Short URL for ${link.title}`}
                    //     className={styles.linkLink}
                    //     >{link.title}</a>
                    </li>)
                })}
            </ul>
        ) : (
            <p>links did not load</p>
            )}
        </>
    );
};

export default bandLinkList;
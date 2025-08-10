import { useState, useEffect } from "react";
import { generatePath, useNavigate } from "react-router";
import bandLinkList from "../components/BandLink";

const SearchBands = () => {
    const [bandItems, setBandItems] = useState([]);
    const [linkName, setLinkName] = useState("");
    const [linkUrl, setLinkUrl] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const getBands = async () => {
            const url = `${import.meta.env.VITE_API_URL}/urls`;
            const data = await fetch(url).then(response => response.json());

            setBandItems(data);
        };
        getBands();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        // handle form submission logic here
    };

    return (
        <>
            <form method="POST" onSubmit={handleSubmit} onClick={generatePath}>
                <label>
                    <input 
                        type="text" 
                        name="linkName" 
                        value={linkName} 
                        onChange={(e) => setLinkName(e.target.value)}
                        style={{ padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
                    />
                </label>
                <label>
                    <input 
                        type="text" 
                        name="linkUrl"
                        value={linkUrl} 
                        onChange={(e) => setLinkUrl(e.target.value)}
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
            <img src="https://lh3.googleusercontent.com/KLV584-o8VQTJBfFs8tOzzL3fK691B7BYaykD8_7poaC_kfvuXQQsGiuey_Iel0T60PEh09axdMPtByr=w120-h120-l90-rj" alt="thousand below" />
            {bandItems && bandItems.length > 0 ? (
                <ul className={styles?.bandList}>
                    {bandItems.map(band => (
                        <li key={band.id}>
                            <a
                                href={band.short_url}
                                title={`Short URL for ${band.title}`}
                                className={styles?.linkLink}
                            >
                                {band.title}
                            </a>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>bands did not load</p>
            )}
        </>
    );
};

export default SearchBands;
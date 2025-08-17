import { useState, useEffect } from "react";
import { generatePath, useNavigate } from "react-router";


const SearchBands = () => {
    console.log("SearchBands mounted");
    const [bandItems, setBandItems] = useState([]);
    const [linkName, setLinkName] = useState("");
    const [linkUrl, setLinkUrl] = useState("");

    const navigate = useNavigate();
    
    const goToBand = (bandId) => {
        navigate(`/band${bandId}`);
    };

    const getBands = async () => {
        const url = `${import.meta.env.VITE_API_URL}/genre?searched_genre=deathcore`;
        console.log('before request ')
        console.log(linkName)
        const data = await fetch(url).then(response => response.json());
        console.log('data: ', data)

        setBandItems(data);
    };


    useEffect(() => {
        getBands();
    }, []);

    // const handleSubmit = (e) => {
    //     alert('test here')
    //     // e.preventDefault();
    //     // console.log('test submit');
    //     // // handle form submission logic here
    //     // getBands();
    // };

    return (
        <>
            <div>
                <h1>Search Bands</h1>
                    {bandItems.map((band) => (
                <div key={band.id}>
                <span>{band.name}</span>
                <button onClick={() => goToBand(band.id)}>View Band</button>
            </div>
                ))}
            </div>
    
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
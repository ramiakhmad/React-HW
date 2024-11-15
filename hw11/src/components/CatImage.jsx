import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './CatImage.module.css';

function CatImage() {
    const [imageUrl, setImageUrl] = useState('');

    const fetchCatImage = () => {
        axios.get('https://api.thecatapi.com/v1/images/search')
            .then(response => {
                setImageUrl(response.data[0].url);
            })
            .catch(error => {
                console.error('Error fetching cat image:', error);
            });
    };

    useEffect(() => {
        fetchCatImage();
    }, []);

    return (
        <div className={styles.container}>
            <h2>Random Cat Image</h2>
            {imageUrl && <img src={imageUrl} alt="Random Cat" className={styles.image} />}
            <button onClick={fetchCatImage} className={styles.button}>Load New Image</button>
        </div>
    );
}

export default CatImage;
import Layout from '../components/Layout';
import styles from '../styles/Index.module.css';
import Lightbox from 'react-18-image-lightbox';
import { useState } from 'react';
import 'react-18-image-lightbox/style.css';

const Home = () => {
    const [photoIndex, setPhotoIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    
    const images = [
        "https://i.imgur.com/5cQMznA.jpeg",
        "https://i.imgur.com/0shXlDh.jpeg",
        "https://i.imgur.com/f27G1Rv.jpeg",
        "https://i.imgur.com/hHqzfOD.jpeg"
    ];

    return (
        <Layout>
            <div className={styles.gridContainer}>
                {images.map((image, index) => (
                    <div key={index} className={styles.imageContainer} onClick={() => { setPhotoIndex(index); setIsOpen(true); }}>
                        <img src={image} alt={`Photography ${index + 1}`} className="min-w-full min-h-full object-cover" />
                    </div>
                ))}
            </div>

            {isOpen && (
                <Lightbox
                    mainSrc={images[photoIndex]}
                    nextSrc={images[(photoIndex + 1) % images.length]}
                    prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                    onCloseRequest={() => setIsOpen(false)}
                    onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
                    onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
                />
            )}
        </Layout>
    );
};

export default Home;

'use client'
import { useEffect, useState } from 'react';
import Modal from './modal';

interface Item {
    title?: string;
    imageSrc: string;
    imageUrl: string;
}

interface MasonryProps {
    items: Item[];
}

export default function Masonry({ items }: MasonryProps) {
    const [showImageModal, setShowImageModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    //Handle Photo Gallery
    const handlePhotoClick = (imageUrl: string) => {
        setSelectedImage(imageUrl);
        setShowImageModal(true);
    };

    useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setShowImageModal(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);


    return (
        <>
            <div className="masonry-layout"> 
                {items.map((item, index) => (
                    item.imageSrc !== "" ?
                    <div key={index} className="masonry-item">
                        <a href={item.imageUrl} onClick={(e) => {
                            e.preventDefault();
                            handlePhotoClick?.(item.imageUrl);
                        }
                        }>
                            <img src={item.imageSrc} alt={item.title} loading="lazy" />
                        </a>
                    </div>:null
                ))}
            </div>
            <Modal
                isVisible={showImageModal}
                type="image"
                content={selectedImage || ""}
                onClose={() => setShowImageModal(false)}
                title="Image Modal"
            />
        </>
    );
}

'use client'
import { useEffect, useState } from 'react';
import Modal from '../components/modal';

interface Item {
    title: string;
    src: string;
    url: string;
}

interface MasonaryProps {
    items: Item[];
}

export default function Masonary({ items }: MasonaryProps) {
    const [showImageModal, setShowImageModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    //Handle Photo Gallery
    const handlePhotoClick = (url: string) => {
        setSelectedImage(url);
        setShowImageModal(true);
    };

    return (
        <>
            <div className="masonary-layout">
                {items.map((item, index) => (
                    <div key={index} className="masonary-item">
                        <a href={item.url} onClick={(e) => {
                            e.preventDefault();
                            handlePhotoClick?.(item.url);
                        }
                        }>
                            <img src={item.src} alt={item.title} loading="lazy" />
                        </a>
                    </div>
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

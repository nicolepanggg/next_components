interface Photo {
    title: string;
    src: string;
    url: string;
}

interface GalleryProps {
    images: Photo[];
    onPhotoClick?: (url: string) => void;
}

export default function Modal({ images, onPhotoClick }: GalleryProps) {
    return (<>
        {images.map((image, index) => (
            <div key={index} >
                <img 
                    src={image.src} 
                    alt={image.title}
                    onClick={() => onPhotoClick?.(image.url)}
                />
            </div>
        ))}
    </>
    );
}
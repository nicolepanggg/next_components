interface ModalProps {
    isVisible: boolean;
    title?: string;
    content?: string;
    children?: React.ReactNode;
    type?: string;
    onClose: () => void;
}
export default function Modal({ isVisible, title, content, onClose, children, type }: ModalProps) {

    return (
        <div
            className={`backdrop ${isVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                }`}
        >
            <div
                className={`infoArea ${type !== 'video' ? 'w-[600px]' : ''}  ${isVisible ? 'scale-100' : 'scale-95'
                    }`}
            >
                <button className="close" onClick={onClose}>X</button>
                <div className="information">
                    {type === "video" ?
                        isVisible && (
                            <iframe
                                width="560"
                                height="315"
                                src={`https://www.youtube-nocookie.com/embed/${content}`}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                        ) : type === "image" ? (
                            isVisible && (
                                <img
                                    src={content}
                                    alt={title || "Modal Image"}
                                    className="max-w-full max-h-[80vh] object-contain rounded"
                                />)
                        )
                            : isVisible && (<>
                                <h1 className="font-bold mb-2 pb-3 text-xl text-blue-700">{title}</h1>
                                <div>
                                    {content || children}
                                </div>
                            </>)
                    }
                </div>
            </div>
        </div>

    )
}

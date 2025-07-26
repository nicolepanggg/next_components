interface ModalProps {
    isVisible: boolean;
    title?: string;
    content?: string;
    children?: React.ReactNode;
    type?: string;
    onClose: () => void;
}
export default function Modal({ isVisible, title, content, onClose, children, type }: ModalProps) {

    if (!isVisible) return null;
    return (
        <div
            className={`fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center w-full h-screen absolute top-0 transition-opacity duration-300 ${
        isVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        >
            <div
                className={`${type !== 'video' ? 'w-[600px]' : ''} flex flex-col transition-transform duration-300 transform ${
                    isVisible ? 'scale-100' : 'scale-95'
                }`}
            >
                <button className="text-white text-xl place-self-end" onClick={onClose}>X</button>
                <div className="bg-white p-2 rounded">
                    {type != "video" ? <>
                        <h1>{title}</h1>
                        <div>
                            {content || children}
                        </div>
                    </> : <>
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
                    </>}
                </div>
            </div>

        </div>

    )
}

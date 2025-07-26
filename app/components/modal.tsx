

interface ModalProps {
  title: string;
  content: string;
  onClose?: () => void;
  isDisplay?: boolean;
}

export default function Modal({ title, content, onClose, isDisplay }: ModalProps) {
    return (
        <div className={`transition-all duration-300 ease-in-out 
            ${isDisplay ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
            fixed insert-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center w-full h-screen
            }`}
            onClick={onClose}>
            <div className="w-[600px] flex flex-col">
                <button className="text-white text-xl place-self-end"
                onClick={onClose}>X</button>
                <div className="bg-white text-black p-2 rounded">
                    <h1>{title}</h1>
                    <p>{content}</p>
                </div>
            </div>
        </div>
    )
}

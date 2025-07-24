

interface ModelProps {
  title: string;
  content: string;
}

export default function Model({ title, content}: ModelProps) {
    return(
    <div className="fixed insert-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center w-full h-screen">
        <div className="w-[600px] flex flex-col">
            <button className="text-white text-xl place-self-end">X</button>
            <div className="bg-white p-2 rounded">Model</div>
        </div>

    </div>

)
}

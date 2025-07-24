
import Model from '../components/model';
const model = () => {
    return (
        <>
            <Model title="zxzx" content="123"/>
            <div className="p-10 text-center">
                <h1 className="text-3xl mb-3">
                    Custom
                </h1>
                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium p-2 rounded mr-5">
                    Text Model
                </button>
                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium p-2 rounded mr-5">
                    Video Model
                </button>
                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium p-2 rounded mr-5">
                    Form Model
                </button>
                <p>https://www.youtube.com/watch?v=nwJK-jo91vA</p>
            </div>
        </>
    )
}

export default model;
'use client'
import { useState } from 'react';
import Modal from '../components/modal';
const modal = () => {
    const [showModal, setshowModal] = useState(false);
    const [showModal2, setshowModal2] = useState(false);
    const [showModal3, setshowModal3] = useState(false);
    const [showModal4, setshowModal4] = useState(false);
    return (
        <>
            <div className="modalBox">
                <h1>
                    Custom
                </h1>
                <button onClick={()=>setshowModal(true)}>
                     children prop Modal
                </button>
                <button onClick={()=>setshowModal2(true)}>
                    Video Modal
                </button>
                <button onClick={()=>setshowModal3(true)}>
                    Text Modal
                </button>
                <button onClick={()=>setshowModal4(true)}>
                    Image Modal
                </button>
            </div>
            <Modal isVisible={showModal} title="This implementation uses the children prop. Better for Complex Components." type="dialog" onClose={() => setshowModal(false)}>
                <p><span className='text-red-500'>React is a popular open-source JavaScript library</span> for building user interfaces, particularly single-page applications. Developed by Facebook in 2013, it enables developers to create reusable, component-based UI elements that efficiently update and render in response to data changes. React uses a virtual DOM to optimize performance, ensuring fast and dynamic user experiences. Its declarative syntax simplifies state management and UI updates, making it ideal for scalable web and mobile applications. With a vast ecosystem, including tools like React Router and Redux, React is widely adopted for its flexibility and robust community support.</p>
                <p>If you need a deeper dive into React concepts or specific examples, let me know!</p>
            </Modal>
            <Modal isVisible={showModal2} content="l74IoKvRQtg" type="video" onClose={() => setshowModal2(false)}></Modal>
            <Modal isVisible={showModal3} title="Normal Text" content="It is displayed as normal text." type="text" onClose={() => setshowModal3(false)}/>
            <Modal isVisible={showModal4} title="It is Image Modal" content="img-6.jpg" type="image" onClose={() => setshowModal4(false)}/>
        
        
            <div className="list">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        
        
        
        </>
    )
}
export default modal;
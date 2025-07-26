'use client'
import { useState } from 'react';
import Modal from '../components/modal';
const modal = () => {
    const [showModal, setshowModal] = useState(false);
    const [showModal2, setshowModal2] = useState(false);
    const [showModal3, setshowModal3] = useState(false);

    // const models =[
    //     {"title":"Testing 1", "content":"q5eW26c9ic_SV2g8","type":"video"},
    //     {"title":"Testing 2", "content":"Content testing2", "type":"content" },
    //     {"title":"Testing 3", "content":"cIAuLwjNbj758-PK", "type":"video"}
    // ]
    return (
        <>
            <div className="p-10 text-center">
                <h1 className="text-3xl mb-3">
                    Custom
                </h1>
                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium p-2 rounded mr-5" onClick={()=>setshowModal(true)}>
                    Text Modal
                </button>
                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium p-2 rounded mr-5" onClick={()=>setshowModal2(true)}>
                    Video Modal
                </button>
                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium p-2 rounded mr-5" onClick={()=>setshowModal3(true)}>
                    Form Modal
                </button>
            </div>
            <Modal isVisible={showModal} title="zxzx" type="html" onClose={() => setshowModal(false)}>This is children</Modal>
            <Modal isVisible={showModal2} content="l74IoKvRQtg" type="video" onClose={() => setshowModal2(false)}></Modal>
            <Modal isVisible={showModal3} title="555" content="asasa" type="text" onClose={() => setshowModal3(false)}/>
        </>
    )
}

export default modal;
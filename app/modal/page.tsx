'use client'

import Modal from '../components/modal';
import { useState } from 'react';
export default () => {

    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);

    return (
        <>
            <Modal isDisplay={isOpen1} title="zxzx" content="123" onClose={() => {setIsOpen1(false)}} />
            <Modal isDisplay={isOpen2} title="zxzx" content="123" onClose={() => {setIsOpen2(false)}} />
            <Modal isDisplay={isOpen3} title="zxzx" content="123" onClose={() => {setIsOpen3(false)}} />

            <div className="p-10 text-center">
                <h1 className="text-3xl mb-3">
                    Custom
                </h1>
                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium p-2 rounded mr-5"
                onClick={() => {setIsOpen1(true)}}>
                    Text Modal
                </button>
                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium p-2 rounded mr-5"
                onClick={() => {setIsOpen2(true)}}>
                    Video Modal
                </button>
                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium p-2 rounded mr-5"
                onClick={() => {setIsOpen3(true)}}>
                    Form Modal
                </button>
                <p>https://www.youtube.com/watch?v=nwJK-jo91vA</p>
            </div>
        </>
    )
}

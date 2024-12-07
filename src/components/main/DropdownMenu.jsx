import React, { useState } from 'react';

function DropdownMenu({ isAuth, toggleModal, toggleCreateBotModal }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleProtectedAction = (action) => {
        if (!isAuth) {
            toggleModal();
        } else {
            action();
        }
    };

    return (
        <div className="relative">
            <div
                onClick={toggleDropdown}
                className="ml-[1.9vw] h-[5vh] w-[10vw]
                 md:h-[6vh] md:w-[3vw] md:ml-[1.2vw]
                 sm:h-[3vh] sm:w-[5vw] sm:ml-[1.2vw]
                 cursor-pointer"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    className={`bi bi-list transition-transform duration-200 ${isOpen ? '-rotate-90' : ''
                        }`}
                    viewBox="0 0 16 16"
                >
                    <path
                        fillRule="evenodd"
                        d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                    />
                </svg>
            </div>

            {isOpen && (
                <div className="absolute top-[6vh] left-0 bg-slate-300  shadow-lg  w-[50vw]  z-30 md:w-[30vw]">
                    <div
                        className="h-[5vh] cursor-pointer flex justify-center items-center text-[2vh] border-b-[1px] border-white font-semibold text-slate-600"
                        onClick={() => handleProtectedAction(toggleCreateBotModal)}
                    >
                        Создать нового бота
                    </div>
                    <div
                        className="h-[5vh] cursor-pointer flex justify-center items-center text-[2vh] font-semibold text-slate-600"
                        onClick={() => handleProtectedAction(toggleCreateBotModal)}
                    >
                        Мой список ботов
                    </div>
                </div>
            )}
        </div>
    );
}

export default DropdownMenu;

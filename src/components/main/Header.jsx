import React, { useState } from 'react';
import ModalAuth from '../modals/ModalAuth';
import ModalCreateBot from './ModalCreateBot';
import DropdownMenu from './DropdownMenu';

function Header() {
    const [isAuth, setIsAuth] = useState(false);
    const [isModalOpen, setModalOpen] = useState(false);
    const [isCreateBotModalOpen, setCreateBotModalOpen] = useState(false);

    const toggleModal = () => {
        setModalOpen(!isModalOpen);
    };

    const toggleCreateBotModal = () => {
        setCreateBotModalOpen(!isCreateBotModalOpen);
    };

    const handleLogout = () => {
        setIsAuth(false);
    };

    return (
        <div className="relative w-full h-[7vh] md:h-[9vh] bg-slate-400 flex items-center justify-between ">
            <div>
                <DropdownMenu
                    isAuth={isAuth}
                    toggleModal={toggleModal}
                    toggleCreateBotModal={toggleCreateBotModal}
                />
            </div>

            <div>
                {!isAuth ? (
                    <div className="flex gap-2">
                        <button
                            onClick={toggleModal}
                            className="text-white px-4 py-1 bg-slate-500 rounded text-[1.8vh]"
                        >
                            Войти
                        </button>
                        <button
                            onClick={toggleModal}
                            className="text-slate-500 px-4 py-1 bg-slate-300 rounded text-[1.8vh] mr-[1.9vw]"
                        >
                            Регистрация
                        </button>
                    </div>
                ) : (
                    <button
                        onClick={handleLogout}
                        className="text-white px-4 py-1 bg-slate-600 mr-[1.9vw]"
                    >
                        Выйти
                    </button>
                )}
            </div>

            {isModalOpen && (
                <ModalAuth
                    closeModal={toggleModal}
                    setIsAuth={setIsAuth}
                />
            )}

            {isCreateBotModalOpen && (
                <ModalCreateBot
                    closeModal={toggleCreateBotModal}
                />
            )}
        </div>
    );
}

export default Header;

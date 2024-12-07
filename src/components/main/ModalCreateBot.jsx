import React, { useState } from 'react';

function ModalCreateBot({ closeModal }) {
    const [formData, setFormData] = useState({
        ipDomain: '',
        nameBot: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Создание бота:', formData);
        closeModal();
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div
                className="bg-white p-6 rounded-lg w-[90vw] sm:w-[30vw] transform transition-transform duration-300"
            >
                <h2 className="text-xl font-bold mb-4 text-center">Создать нового бота</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="ipDomain">
                            IP/Домен
                        </label>
                        <input
                            type="text"
                            id="ipDomain"
                            name="ipDomain"
                            value={formData.ipDomain}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
                            placeholder="Введите IP или домен"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="nameBot">
                            Имя бота
                        </label>
                        <input
                            type="text"
                            id="nameBot"
                            name="nameBot"
                            value={formData.nameBot}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
                            placeholder="Введите имя бота"
                            required
                        />
                    </div>
                    <div className="flex justify-between items-center">
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        >
                            Создать
                        </button>
                        <button
                            type="button"
                            className="text-gray-500 hover:underline"
                            onClick={closeModal}
                        >
                            Отмена
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ModalCreateBot;

import React, { useState } from 'react';
import authBotAxios from '../axiosInstance'

function ModalCreateBot({ closeModal }) {
    const [formData, setFormData] = useState({
        ipDomain: '',
        nameBot: '',
    });
    const [error, setError] = useState([]);
    const [loading, setLoading] = useState(false);
    const [key, setKey] = useState('');


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        const accessToken = localStorage.getItem('access_token');

        if (!accessToken) {
            console.error('Токен доступа не найден!');
            setLoading(false);
            return;
        }

        try {
            const response = await authBotAxios.post(
                '/auths_bots/api/v1/register-bot/',
                JSON.stringify({
                    token: formData.ipDomain,
                    name: formData.nameBot,
                },
                    {
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                        }
                    }
                )

            )
            setKey(response.data.api_key)
            setLoading(false);
            closeModal();
        } catch (err) {
            debugger
            if (err.status === 400) {
                const errors = err.response.data;
                const errorMessages = [];
                for (const key in errors) {
                    if (errors[key]) {
                        errorMessages.push(...errors[key]);
                    }
                }
                setError(errorMessages)
            }
            else if (err.status === 200) {
                setError('Бот успешно добавлен')
                closeModal();
            }
            else {
                debugger
                const errors = err.response.data;
                const errorMessages = [];
                for (const key in errors) {
                    if (errors[key]) {
                        errorMessages.push(...errors[key]);
                    }
                }
                setError(errorMessages)
            }
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-40" >
            <div
                className="bg-white p-6 rounded-lg w-[90vw] sm:w-[30vw] transform transition-transform duration-700  z-50"
            >
                <h2 className="text-xl font-bold mb-4 text-center">Добавить нового бота</h2>
                {error && Array.isArray(error) ? (
                    <p className="text-red-500 text-center">
                        {error.map((errorMessage, index) => (
                            <span key={index}>{errorMessage}</span>
                        ))}
                    </p>
                ) : (
                    <p className="text-red-500 text-center">{error}</p>
                )}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="ipDomain">
                            Токен вашего бота
                        </label>
                        <input
                            type="text"
                            id="ipDomain"
                            name="ipDomain"
                            value={formData.ipDomain}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
                            placeholder="Введите токен телеграм бота"
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
                    {loading && (
                        <div className='flex justify-center'>
                            <p>Подождите, идет обработка...</p>
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
}

export default ModalCreateBot;

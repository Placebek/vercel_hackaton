import React, { useState, Suspense } from 'react';
import axiosInstance from '../axiosInstance';

const LazyInput = React.lazy(() => import('../load/LazyInput'));

function ModalAuthRegister({ closeModal, setIsAuth }) {
    const [isRegistering, setIsRegistering] = useState(true);
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            if (isRegistering) {
                await axiosInstance.post('/auths/register/', formData);
                setIsRegistering(false);
            } else {
                const response = await axiosInstance.post('/auths/login/', formData);
                const { token } = response.data;
                localStorage.setItem('token', token);
                setIsAuth(true);
                closeModal();
            }
        } catch (err) {
            setError(
                isRegistering
                    ? 'Ошибка регистрации. Попробуйте позже.'
                    : 'Ошибка авторизации. Проверьте данные.'
            );
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg w-[90vw] sm:w-[30vw]">
                <h2 className="text-xl font-bold mb-4 text-center">
                    {isRegistering ? 'Регистрация' : 'Войти'}
                </h2>
                {error && <p className="text-red-500 text-center">{error}</p>}
                <form onSubmit={handleSubmit}>
                    <Suspense fallback={<div>Загрузка поля...</div>}>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2" htmlFor="username">
                                Имя пользователя
                            </label>
                            <LazyInput
                                type="text"
                                id="username"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded focus:outline-none"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2" htmlFor="password">
                                Пароль
                            </label>
                            <LazyInput
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded focus:outline-none"
                                required
                            />
                        </div>
                    </Suspense>
                    <div className="flex justify-between items-center">
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        >
                            {isRegistering ? 'Зарегистрироваться' : 'Войти'}
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
                <p className="text-center mt-4 text-gray-600">
                    {isRegistering
                        ? 'Уже зарегистрированы? '
                        : 'Нет аккаунта? '}
                    <button
                        type="button"
                        className="text-blue-500 hover:underline"
                        onClick={() => {
                            setIsRegistering(!isRegistering);
                            setError('');
                        }}
                    >
                        {isRegistering ? 'Войти' : 'Зарегистрироваться'}
                    </button>
                </p>
            </div>
        </div>
    );
}

export default ModalAuthRegister;

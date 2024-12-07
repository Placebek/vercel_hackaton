import * as Yup from 'yup'

export const registerSchema = Yup.object({
	email: Yup.string()
		.email('Неверный формат email')
		.required('Email обязателен'),
	password: Yup.string()
		.min(6, 'Пароль должен содержать минимум 6 символов')
		.required('Пароль обязателен'),
	confirmPassword: Yup.string()
		.oneOf([Yup.ref('password'), null], 'Пароли должны совпадать')
		.required('Подтверждение пароля обязательно'),
})

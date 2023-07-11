import axios, { delete as del, get, post, put } from 'axios';
import { toast } from 'react-toastify';
import { API_URL } from './api';
import { getToken } from './tokenStorge';


axios.interceptors.request.use(
	config => config,
	e => Promise.reject(e),
);
axios.interceptors.response.use(
	response => response,
	e => {
		if (typeof e?.toJSON === 'function') {
			const error = e?.toJSON();
			if (error?.message === 'Network Error') {
				toast.warning(
					localStorage.getItem('i18nextLng') === 'uz'
						? 'Voy, internetingiz uzildi-ku'
						: 'Нет подключения к Интернету',
				);
			}
			if (process.env.NODE_ENV === 'development') {
				console.log(error);
			}
		}
		return Promise.reject(e);
	},
);
const Axios = () => {
	const token = getToken();
	const defaultOptions = {
		baseURL: API_URL,
		headers: token ? { Authorization: `Bearer ${token}`,  } : {},
		// params: { lan: localStorage.getItem('i18nextLng') || 'uz', }
	};
	return {
		get: (url, options = {}) => get(url, { ...defaultOptions, ...options }),
		post: (url, data, options = {}) =>
			post(url, data, { ...defaultOptions, ...options }),
		put: (url, data, options = {}) =>
			put(url, data, { ...defaultOptions, ...options }),
		delete: (url, options = {}) => del(url, { ...defaultOptions, ...options }),
	};
};
export default Axios;
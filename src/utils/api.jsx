// export const API_HOST = '65.108.147.133:8005';
// export const WS_HOST = '65.108.147.133:8005';
// export const API_URL = `http://${API_HOST}`;
// export const IMG_URL = `http://${API_HOST}/storage/`;
// export const FILE_URL = `http://${API_HOST}/storage/`;

export const API_HOST = 'seaofwisdom.xyz';
export const WS_HOST = 'seaofwisdom.xyz';
export const API_URL =
  process.env.NODE_ENV === 'development'
    ? process.env.REACT_APP_API
    : `https://${API_HOST}/api`;
export const IMG_URL = `${API_URL}/storage/`;
export const FILE_URL = `${API_URL}/storage/`;

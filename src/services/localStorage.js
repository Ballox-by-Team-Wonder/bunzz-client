export const setUserToken = data => localStorage.setItem('identify-token', data);
export const userToken = localStorage.getItem('identify-token');
export const removeUserToken = () => localStorage.removeItem('identify-token');
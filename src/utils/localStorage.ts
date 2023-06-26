export const getLS = (KEY: any) => {
  return localStorage.getItem(KEY) || false;
};

export const setLS = (KEY: any, token: any) => {
  localStorage.setItem(KEY, token);
};

export const removeLS = (KEY: any) => {
  localStorage.removeItem(KEY);
};

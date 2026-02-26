// Harmless mock for formdata-polyfill
export const FormData = typeof window !== 'undefined' ? window.FormData : undefined;
export const formDataToBlob = () => {};
export default FormData;

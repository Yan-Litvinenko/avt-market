export const validateUrl = (url: string): boolean => {
    const decoded = decodeURIComponent(url);

    const normalizedUrl = url.replace(/%20/g, ' ');

    if (normalizedUrl !== decoded) {
        const urlParts = normalizedUrl.split('/');
        const decodedParts = decoded.split('/');

        for (let i = 0; i < urlParts.length; i++) {
            if (urlParts[i] !== decodedParts[i]) {
                throw new Error('Недопустимое кодирование URL');
            }
        }
    }
    return true;
};

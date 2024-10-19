export const formatPrice = <T extends number | string>(price: T): string => {
    const result = typeof price === 'number' ? price.toString() : (price as string);
    return result.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
};

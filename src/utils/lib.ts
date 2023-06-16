export const areEqual = (prev: any, next: any) => {
    try {
        return JSON?.stringify(prev) === JSON?.stringify(next);
    } catch (error) {
        if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
            console.error(error);
        }
        return false;
    }
};
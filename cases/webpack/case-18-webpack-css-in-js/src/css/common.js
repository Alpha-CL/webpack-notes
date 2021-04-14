export const redbg = {
    backgroundColor: '#f40',
    color: '#fff',
};

export function border(width = 2, color = 'black') {

    return {
        border: `${width}px solid ${color}`
    };
}
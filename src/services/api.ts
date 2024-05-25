const API_BASE_URL = 'https://api.moscow.mba';

export const fetchProgrammes = async (endpoint: string, limit = 5, start?: number, controller?: AbortController) => {
    try {
        const res = await fetch(
            `${API_BASE_URL + endpoint}?_limit=${limit}&_start=${start ?? '0'}`,
            controller ? { signal: controller.signal } : {}
        );

        const data = await res.json();

        return data;

    } catch (error) {
        console.error('Failed fetch');
    }
}
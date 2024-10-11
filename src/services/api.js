export const getData = async () => {
    try {
        const response = await fetch('https://apis-technical-test.conqt.com/', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            },
        });
        return await response.json();
    }
    catch(error) {
        console.error('Error saving data', error);
        throw error;
    }
}
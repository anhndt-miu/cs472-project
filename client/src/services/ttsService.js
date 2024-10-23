const GOOGLE_TTS_API_KEY = process.env.REACT_APP_GOOGLE_TTS_API_KEY;
const GOOGLE_TTS_API_URL = process.env.REACT_APP_GOOGLE_TTS_API_URL

export const fetchTTS = async (text) => {

    const requestBody = {
        input: { text },
        voice: { languageCode: 'en-US', name: 'en-US-Wavenet-D' }, 
        audioConfig: { audioEncoding: 'MP3' },
    };

    const response = await fetch(`${GOOGLE_TTS_API_URL}?key=${GOOGLE_TTS_API_KEY}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
        throw new Error(`TTS API request failed with status: ${response.status}`);
    }

    const data = await response.json();
    return data.audioContent;

};

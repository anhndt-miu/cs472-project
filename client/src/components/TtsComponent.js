import { useState, useEffect } from "react";
import { fetchTTS } from "../services/ttsService.js";

function TtsComponent({ word }) {
    const [message, setMessage] = useState('');
    const [audioSrc, setAudioSrc] = useState(null);
    const [loading, setLoading] = useState(true);
    async function fetchAudio() {
        try {
            const ttsAudio = await fetchTTS(word)
            if (ttsAudio) {
                const audioUrl = `data:audio/mp3;base64,${ttsAudio}`;
                setAudioSrc(audioUrl);
            }
        } catch (error) {
            console.error(error.message)
            setMessage(error.message)
        } finally { setLoading(false) }
    }

    useEffect(() => {
        fetchAudio()
    }, [word])

    return (
        <div className="text-to-speed-container">
            <p className="explain-text">{loading}</p>
            <p className="explain-text">{message}</p>
            {audioSrc && (
                <div>
                    <p>Listen to the response:</p>
                    <audio controls src={audioSrc}></audio>
                </div>
            )}
        </div>
    )
}

export default TtsComponent
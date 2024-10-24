import { useState } from "react";

function SpeechComponent({ word }) {
    const [message, setMessage] = useState('');
    const [isSpeaking, setIsSpeaking] = useState(false);

    const handleSpeak = () => {
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(word);

            utterance.lang = 'en-US';
            utterance.pitch = 1;
            utterance.rate = 1;
            utterance.volume = 1;

            window.speechSynthesis.speak(utterance);

            utterance.onstart = () => setIsSpeaking(true);;
            utterance.onend = () => setIsSpeaking(false);;
            utterance.onerror = (event) => {
                setIsSpeaking(false);
                console.error('Speech error:', event.error)
            };
        } else {
            setMessage('Sorry, your browser does not support text-to-speech!');
        }
    }

    return (
        <div className="tts-container">
            <p className="explain-text">{message}</p>
            <div className="tts-button-contianer">
                <button
                    className="tts-play-button"
                    onClick={handleSpeak}
                    disabled={isSpeaking}
                >
                    <div className="tts-play-icon-button">{isSpeaking ? <a className="material-symbols-outlined">pause_circle</a> : <a className="material-symbols-outlined"> play_arrow</a>}</div>
                    <p className="tts-play-text">{isSpeaking ? 'Speaking...' : 'Play Audio'}</p>
                </button>

            </div>
            
            <hr className="tts-divider"/>
        </div>

    )
}

export default SpeechComponent
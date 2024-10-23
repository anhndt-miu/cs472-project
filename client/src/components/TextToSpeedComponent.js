import { useState, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";


function TextToSpeedComponent({ word }) {
    const [data, setData] = useState('')
    const [loading, setLoading] = useState(true);

    // const genAI = new GoogleGenerativeAI(process.env.API_KEY);
    const genAI = new GoogleGenerativeAI('AIzaSyDqUFf78i33KsatpM1MCa_fFjYY12EmLG4');
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    async function searchWord() {
        try {
            const prompt = `Meaning of ${word} in english with 100 words. Response with html format`
            console.log(prompt)
            const result = await model.generateContent(prompt);
            setData(result.response.text)
        } catch (error) {
            console.error(error.message)
        } finally { setLoading(false) }
    }

    useEffect(() => {
        searchWord()
    }, [word])

    return (
        <div className="text-to-speed-container">
            <p className="explain-text">{loading}</p>
            <div dangerouslySetInnerHTML={{ __html: data }} />
        </div>
    )
}

export default TextToSpeedComponent
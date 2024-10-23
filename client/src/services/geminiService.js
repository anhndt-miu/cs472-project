
const gemini_url = process.env.REACT_APP_GEMINI_API_URL;
const gemini_key = process.env.REACT_APP_GEMINI_KEY;

export const fetchSummaryWord = async function searchWord(word) {
    
        const prompt = `Meaning of ${word} in english with 100 words. Response with html format`
        console.log(prompt)
        console.log(`${gemini_url} ${gemini_key}`)
        const requestBody = {
            contents: [
                {
                    parts: [{ text: prompt }],
                },
            ],
            safetySettings: [
                {
                    category: "HARM_CATEGORY_DANGEROUS_CONTENT",
                    threshold: "BLOCK_ONLY_HIGH",
                },
            ],
            generationConfig: {
                stopSequences: ["Title"],
                temperature: 1.0,
                maxOutputTokens: 800,
                topP: 0.8,
                topK: 10,
            },
        };

        const response = await fetch(`${gemini_url}?key=${gemini_key}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody),
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        return data.candidates[0].content.parts[0].text
    
}
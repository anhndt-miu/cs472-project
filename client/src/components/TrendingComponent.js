import { useEffect, useState } from 'react'

function TrendingComponent({ }) {

    const [data, setData] = useState(null);
    const [isFetching, setFetching] = useState(false);
    const [counter, setCounter] = useState(25);

    const apiUrl = process.env.REACT_APP_API_URL;


    useEffect(() => {
        if (!isFetching) { fetchTrendingData() }
        const interval = setInterval(() => {
            setCounter((prevCounter) => {
                if (prevCounter > 0) {
                    return prevCounter - 1
                } else {
                    if (!isFetching) { fetchTrendingData() }
                    return prevCounter = 25
                }
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const fetchTrendingData = async () => {
        try {
            const res = await fetch(`${apiUrl}/word/trending`);
            if (!res.ok) {
                console.log(res.errorCode);
            } else {
                const data = await res.json()
                setData(data)
            }
        } catch (error) {
            console.error('Error fetching counter:', error);
        } finally {
            console.log('Fetched');
            setFetching(false)
        }
    };


    return (
        <div className='trending-container'>
            <h1>Popular searches</h1>
            <p className='trending-hint'>Refresh after {counter}</p>
            {(!data || data.length === 0) ? null : (
                <div >
                    <table>
                        <thead>
                            <tr className='trending-header'>
                                <th></th>
                                <th>Word</th>
                                <th>Times</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((item, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.word}</td>
                                        <td>{item.counter}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    )
}

export default TrendingComponent;
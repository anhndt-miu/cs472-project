import { useEffect, useState } from 'react'

function TrendingComponent({ }) {

    const [data, setData] = useState(null);
    const [counter, setCounter] = useState(25);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter((prevCounter) => (prevCounter > 0 ? prevCounter - 1 : 25));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        fetchTrendingData();
        const interval = setInterval(() => {
            fetchTrendingData();
        }, 25000);

        return () => clearInterval(interval);
    }, []);

    const fetchTrendingData = async () => {
        try {
            const res = await fetch('http://localhost:3001/trending');
            if (!res.ok) {
                console.log(res.errorCode);
            } else {
                const data = await res.json()
                setData(data)
            }
        } catch (error) {
            console.error('Error fetching counter:', error);
        }
    };


    return (
        <div>
            <h1>Popular searches</h1>
            <p>Next refresh {counter}</p>
            {(!data || data.length === 0) ? null : (
                <div className='trending-container'>
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Word</th>
                                <th>Times</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((item, index) => (
                                    <tr key={item.id}>
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
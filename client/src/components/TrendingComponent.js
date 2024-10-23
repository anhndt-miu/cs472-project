import { useEffect, useState } from 'react'

function TrendingComponent({ }) {

    const [data, setData] = useState(null);
    const [counter, setCounter] = useState(25);
    // const [triggerFetchData, setTriggerFetchData] = useState(0);

    useEffect(() => {
        fetchTrendingData()
        const interval = setInterval(() => {
            setCounter((prevCounter) => {
                if (prevCounter > 0) {
                    return prevCounter - 1
                } else {
                    fetchTrendingData()
                    return prevCounter = 25
                }
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    // useEffect(() => {
    //     fetchTrendingData();
    // }, [triggerFetchData]);

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
        <div className='trending-container'>
            <h1>Popular searches</h1>
            <p className='trending-hint'>Auto refresh after {counter} second(s)</p>
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
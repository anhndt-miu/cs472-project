import WordComponent from './WordComponent.js'
import HintComponent from './HintComponent.js'
import SummaryTextComponent from './SummaryTextComponent.js';
import SpeechComponent from './SpeechComponent.js';

function SearchResultComponent({ data }) {

    return (
        <div >
            {(!data || data.length === 0) ?
                <div className='search-hint-container'><HintComponent message={!data ? 'Try searching to get started' : 'Not found'} /></div>
                :
                <div className='search-result-container'>
                    <div><SummaryTextComponent word={data[0].word} /></div><br/>
                    <div><SpeechComponent word={data[0].word} /></div><br/>
                    <h1>Found {(data.length === 1) ? `${data.length} result` : `${data.length} results`} for {`"${data[0].word}"`}</h1>
                    {data.map((item) => (
                        <div key={item._id}>
                            <WordComponent data={item} />
                        </div>
                    ))}
                </div>
            }
        </div>
    )
}

export default SearchResultComponent;
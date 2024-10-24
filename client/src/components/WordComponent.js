function WordComponent({ data }) {
    return (
        <div className='word-container'>
            <div><a className="word-title">{data.word}</a> <a className="word-type">{` (${data.wordtype})`}</a></div> 
            <p className="word-desc">{data.definition} </p>
            <hr className="word-separator" />
            <br />
        </div>
    )
}

export default WordComponent;
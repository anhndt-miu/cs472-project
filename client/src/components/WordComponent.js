function WordComponent({ data }) {
    return (
        <div className='word-container'>
            <p className="word-title">{data.word} </p>
            <p className="word-desc">{data.definition} </p>
            <hr className="word-separator"/>
            <br/>
        </div>
    )
}

export default WordComponent;
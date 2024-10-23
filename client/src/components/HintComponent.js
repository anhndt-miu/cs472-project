function HintComponent( {message=""}) {
    return (
        <div className="hint-container">
            <p className="hint-text">{(message && message.length!=0)? message: '\\@.@//'}</p>
        </div>
    )
}

export default HintComponent
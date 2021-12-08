function Header(props) {
    return (<header>
        <h1>{props.title}</h1>
        <span className="stats">Player:{props.totalPlayers}</span>
        </header>)
}
function Player(props) {
    return (
        <div className='player'>
            <span className='player-name'>{props.playername}</span>
            <Counter score={props.score}></Counter>
        </div>
    )
}
function Counter(props) {
    return (
        <div className='counter'>
            <button className='counter-action decrement'>-</button>
            <span className='counter-score'>{props.score}</span>
            <button className='counter-action increment'>+</button>
        </div>
    )
}
function Board() {
    return (
        <div className='scoreboard'>
            <Header title='board' totalPlayers={3}></Header>
            <Player playername='AJ' score={40}></Player>
        </div>
    )


}
ReactDOM.render(<Board></Board>, document.getElementById('root'))
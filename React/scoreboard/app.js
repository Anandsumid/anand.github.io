const description = 'My Description '
const myTitleId = 'main-title'
const username = 'Anand'
function Header(){
    return(
        <header>
            <h1>scoreboard</h1>
            <span className='stats'> Score</span>
        </header>
    )
}
const Player= () => {
    return (
        <div className='player'>
            <span className='player-name'> Anand</span>
            <Counter></Counter>
        </div>
    )
}
const Counter=()=>{
    return(
        <div className='counter'>
        <button className='counter-action decrement'>-</button>
        <span className='counter-score'>35</span>
        <button className='counter-action increment'>+</button>
    </div>
    )
}
function App(){
    return(
        <div className='scoreboard'>
            <Header />
            <Player></Player>
        </div>
    )
}
ReactDOM.render(
    <App></App>, document.getElementById('root')
)


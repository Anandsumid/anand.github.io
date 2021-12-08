let players = [
    {
        name :'AJ',
        score:30,
        id:1
    },
    {
        name :'Haha',
        score:20,
        id:2
    },
    {
        name :'lolzmaa',
        score:30,
        id:3
    }
]
class Header extends React.Component{
    render(){
    return (<header>
        <h1>{this.props.title}</h1>
        <span className="stats">Player:{this.props.totalPlayers}</span>
    </header>)
    }
}
class Player extends React.Component{
    render(){
    return (
        <div className='player'>
            <span className='player-name'>{this.props.playername}</span>
            <Counter ></Counter>
        </div>
    )
    }
}
class Counter extends React.Component{
    constructor(){
        super()
        this.state = {
            score:2
        }
    }
    incrementScore(){
        this.setState(prevState=>({
            score: prevState.score +=1
        }))
    }
    decrementScore(){
        this.setState(prevState=>({
            score: prevState.score-=1
        }))
    }
    render(){
    return (
        <div className='counter'>
            <button className='counter-action decrement' onClick={this.decrementScore.bind(this)}>-</button>
            <span className='counter-score'>{this.state.score}</span>
            <button className='counter-action increment' onClick={this.incrementScore.bind(this)}>+</button>
        </div>
    )
    }
}
class Board extends React.Component{
    render(){
    return (
        <div className='scoreboard'>
            <Header title='board' totalPlayers={this.props.initialPlayers.length}></Header>

            {this.props.initialPlayers.map(player=><Player playername={player.name} score={player.score} key={player.id}></Player>)}

        </div>
    )
    }
}
ReactDOM.render(<Board initialPlayers = {players}></Board>, document.getElementById('root'))
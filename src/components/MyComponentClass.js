import React from 'react'

export default class MyComponentClass extends React.Component {
	state = {
		count: 0,
		date: new Date(),
	};

	componentDidMount(){
		const {count} = this.state
		document.title = `Clicked ${count} times`
		setInterval(this.tick, 1000)
	}

	componentDidUpdate(){
		const {count} = this.state
		document.title = `Clicked ${count} times`
	}

	addClick = () => {
		this.setState(({count}) => ({
			count: count + 1
		}))
	}

	tick = () => {
		this.setState({
			date: new Date()
		})
	}
	render(){
    	const {date} = this.state
		return (
			<div>
				<p>Time: {date.toLocaleTimeString()}</p>
				<p>
					<button type="submit" onClick={this.addClick}>Clicked</button>
				</p>
			</div>
		)
	}
}
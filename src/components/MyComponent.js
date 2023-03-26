import {useEffect,useState} from 'react'
function MyComponent() {
	const [count, setCount] = useState(0)
	const [date, setDate] = useState(new Date())
	const tick = () => {
		setDate(new Date())
	}

	const addClick = () => {
		setCount((prevCount) => prevCount + 1)
	}

	useEffect(() => {
		console.log(`Updating document title ${count} times`)

		document.title = `Clicked ${count} times`
	},[count]);

	useEffect(() => {
		setInterval(tick,1000)
	},[]);


	
	return (
		<div>
			<p>Time: {date.toLocaleTimeString()}</p>
			<p>
				<button type="submit" onClick={addClick}>Clicked</button>
			</p>
		</div>
	)
}
export default MyComponent;
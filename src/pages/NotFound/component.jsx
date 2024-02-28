import { Link } from "react-router-dom"

export const NotFoundPage = () => {

	return (
		<div>
			<h1>Something wrong... page not found!</h1>
			<h2><Link to='/'>Return to main page</Link></h2>
		</div>
	)
}

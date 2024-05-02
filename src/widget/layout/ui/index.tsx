import { Outlet } from 'react-router-dom'

const Layout = () => {
	return (
		<div>
			<h3>Layout</h3>
			<Outlet />
		</div>
	)
}

export default Layout

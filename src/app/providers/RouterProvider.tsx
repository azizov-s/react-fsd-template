import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from '../../pages/home/ui'
import Layout from '../../widget/layout/ui'

const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{
				index: true,
				path: '/',
				element: <HomePage />,
			},
		],
	},
])

export function BrowserRouter() {
	return <RouterProvider router={router} />
}

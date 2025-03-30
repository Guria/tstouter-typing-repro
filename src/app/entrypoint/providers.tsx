import { RouterProvider } from '@tanstack/react-router'
import { createAppRouter } from './router'

// Register the router instance for type safety
declare module '@tanstack/react-router' {
	interface Register {
		router: typeof createAppRouter
	}
}

export const Providers = () => {
	return (
		<RouterProvider router={createAppRouter()} />
	)
}

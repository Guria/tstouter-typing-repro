import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/hello')({
	component: HelloRoute,
	loader: async () => true,
})

function HelloRoute() {
	const data = Route.useLoaderData()
	console.log(data.check)

	return (
		<div>
			{`Hello ${data}`}
		</div>
	)
}

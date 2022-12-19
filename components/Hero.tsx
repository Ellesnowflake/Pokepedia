import { RocketLaunchIcon } from '@heroicons/react/20/solid'

export default function Hero({
	category,
}: {
	category?: 'grass' | 'fire' | 'water'
}) {
	const images = {
		default:
			'https://images.unsplash.com/photo-1613771404721-1f92d799e49f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80',
		grass: 'https://images.unsplash.com/photo-1647893977169-40183c5f064e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
		fire: 'https://images.unsplash.com/photo-1643725173053-ed68676f1878?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
		water: 'https://images.unsplash.com/photo-1667809683735-f2ce3d9f9a7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80',
	}
	const textColors = {
		default: 'red',
		grass: 'green',
		fire: 'red',
		water: 'blue',
	}

	return (
		<div className="lg:relative">
			<div className="mx-auto w-full max-w-7xl pt-16 pb-20 text-center lg:py-48 lg:text-left">
				<div className="px-4 sm:px-8 lg:w-1/2 xl:pr-16">
					<h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
						<span className="block xl:inline">
							Dive back into your
						</span>{' '}
						<span
							className={`block text-${
								category
									? textColors[
											category as keyof typeof textColors
									  ]
									: textColors.default
							}-600 xl:inline`}
						>
							childhood
						</span>
					</h1>
					<div className="mt-10 sm:flex sm:justify-center lg:justify-start">
						<div className="rounded-md shadow bg-blue-600 bg-green-600 hover:bg-blue-700 hover:bg-green-700 bg-transparent hover:bg-transparent">
							<button
								onClick={() =>
									document
										.querySelector('#pokemon-grid')
										?.scrollIntoView({ behavior: 'smooth' })
								}
								className={`flex w-full items-center justify-center rounded-md border border-transparent bg-${
									category
										? textColors[
												category as keyof typeof textColors
										  ]
										: textColors.default
								}-600 px-8 py-3 text-base font-medium text-white hover:bg-${
									category
										? textColors[
												category as keyof typeof textColors
										  ]
										: textColors.default
								}-700 md:py-4 md:px-10 md:text-lg`}
							>
								Let's explore{' '}
								<RocketLaunchIcon className="h-6 w-6 mx-2" />
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className="relative h-64 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2">
				<img
					className="absolute inset-0 h-full w-full object-cover"
					src={category ? images[category] : images.default}
					alt="background image"
				/>
			</div>
		</div>
	)
}

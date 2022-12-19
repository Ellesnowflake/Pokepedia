import PokemonItem from './PokemonItem'

export interface Pokemon {
	name: string
	url: string
}

export default function PokemonGrid({
	pokemonList,
	onLoadMore,
	isLoading,
	heading,
	endReached,
}: {
	pokemonList: Pokemon[]
	onLoadMore: () => void
	isLoading: boolean
	heading?: string
	endReached?: boolean
}) {
	return (
		<div
			id="pokemon-grid"
			className="mx-auto max-w-7xl sm:px-6 lg:px-8 grid gap-10 place-items-center"
		>
			<h2 className="text-2xl font-semibold">{heading || 'All types'}</h2>
			{pokemonList && (
				<ul
					role="list"
					className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
				>
					{pokemonList.map(pokemon => (
						<PokemonItem pokemon={pokemon} key={pokemon.name} />
					))}
				</ul>
			)}
			{isLoading && <p>Loading...</p>}
			{!endReached && (
				<button
					className="flex w-fit items-center justify-center rounded-md border border-transparent bg-red-600 px-8 py-3 text-base font-medium text-white hover:bg-red-700 md:py-4 md:px-10 md:text-lg"
					onClick={onLoadMore}
				>
					Load more
				</button>
			)}
		</div>
	)
}

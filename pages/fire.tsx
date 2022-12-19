import Hero from '../components/Hero'
import Nav from '../components/Nav'
import PokemonGrid, { Pokemon } from '../components/PokemonGrid'
import { useQuery } from 'react-query'
import axios from 'axios'
import { useState } from 'react'
import ErrorMessage from '../components/ErrorMessage'

export default function Home() {
	const [limit, setLimit] = useState(12)
	const { isLoading, isError, data } = useQuery(
		`pokemonList-fire`,
		({ signal }) =>
			axios.get(`https://pokeapi.co/api/v2/type/fire`, {
				signal,
			}),
	)

	return (
		<>
			<Nav />
			<main className="grid gap-36 mb-36">
				<Hero category="fire" />
				{!isLoading && isError && (
					<ErrorMessage message="We are all out of Pokeballs. Please try again." />
				)}
				<>
					<PokemonGrid
						heading="Fire Type"
						isLoading={isLoading}
						pokemonList={data?.data.pokemon
							.slice(0, limit)
							.map(
								(pokemon: { pokemon: { pokemon: Pokemon } }) =>
									pokemon.pokemon,
							)}
						onLoadMore={() => setLimit(prev => prev + 12)}
						endReached={limit >= data?.data.pokemon.length}
					/>
				</>
			</main>
		</>
	)
}

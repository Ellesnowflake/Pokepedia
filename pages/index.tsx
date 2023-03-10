import Hero from '../components/Hero'
import Nav from '../components/Nav'
import PokemonGrid from '../components/PokemonGrid'
import { useQuery } from 'react-query'
import axios from 'axios'
import { useState } from 'react'
import ErrorMessage from '../components/ErrorMessage'

export default function Home() {
	const [limit, setLimit] = useState(12)
	const { isLoading, isError, data } = useQuery(
		`pokemonList-${limit}`,
		({ signal }) =>
			axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`, {
				signal,
			}),
	)

	return (
		<>
			<Nav />
			<main className="grid gap-36 mb-36">
				<Hero />
				{!isLoading && isError && (
					<ErrorMessage message="We are all out of Pokeballs. Please try again." />
				)}
				<>
					<PokemonGrid
						isLoading={isLoading}
						pokemonList={data?.data.results}
						onLoadMore={() => setLimit(prev => prev + 12)}
						endReached={limit >= data?.data.count}
					/>
				</>
			</main>
		</>
	)
}

import Nav from '../components/Nav'
import PokemonInfo from '../components/PokemonInfo'
import { useQuery } from 'react-query'
import axios from 'axios'
import { useEffect, useState } from 'react'
import ErrorMessage from '../components/ErrorMessage'

export default function PokemonPage() {
	const [pokemonName, setPokemonName] = useState<string>()

	useEffect(() => {
		setPokemonName(window.location.pathname.split("/").pop())
		if (pokemonName) document.title = pokemonName
	}, [])

	const { isLoading, data, error, isError } = useQuery(
		`pokemon-${pokemonName}`,
		({ signal }) =>
			axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`, {
				signal,
			}),
	)

	return (
		<>
			<Nav />
			<main className="grid py-10 place-items-center">
				<>
					{isLoading && <p>Loading...</p>}
					{isError && error && (
						<ErrorMessage
							message={
								// @ts-ignore
								error.response.status === 404
									? `Looks like we couldn't find a Pokemon called ${pokemonName}`
									: 'We are all out of Pokeballs. Please try again.'
							}
							icon={
								// @ts-ignore
								error.response.status === 404
									? 'face-frown'
									: 'exclamation-triangle'
							}
						/>
					)}
					{data && <PokemonInfo pokemon={data.data} />}
				</>
			</main>
		</>
	)
}

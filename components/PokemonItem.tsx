import Link from 'next/link'
import { FingerPrintIcon } from '@heroicons/react/20/solid'
import { Pokemon } from './PokemonGrid'
import { useQuery } from 'react-query'
import axios from 'axios'
import ErrorMessage from './ErrorMessage'

export default function PokemonItem({ pokemon }: { pokemon: Pokemon }) {
	const {
		isLoading,
		isError,
		data: pokemonData,
	} = useQuery(pokemon.name, ({ signal }) =>
		axios.get(pokemon.url, { signal }),
	)

	return (
		<li className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
			{isLoading && <p>Loading...</p>}
			{!isLoading && isError && (
				<ErrorMessage message="We are all out of Pokeballs. Please try again." />
			)}
			{!isLoading && pokemonData && (
				<>
					<div className="flex w-full items-center justify-between space-x-6 p-6">
						<div className="flex-1 truncate">
							<div className="flex items-center space-x-3">
								<h3 className="truncate text-sm font-medium capitalize text-gray-900">
									{pokemon.name}
								</h3>
							</div>
							<ul className="my-2 overflow-x-scroll flex gap-1 py-2">
								{pokemonData.data.types.map(
									(type: { type: { name: string } }) => {
										return (
											<li
												key={`${pokemon.name}-${type.type.name}`}
												className="inline-block flex-shrink-0 rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-800 "
											>
												{type.type.name}
											</li>
										)
									},
								)}
							</ul>
							<p className="truncate text-sm font-thin text-gray-900">
								Base experience:{' '}
								{pokemonData.data.base_experience}
							</p>
						</div>
						<img
							className="mx-auto h-32 w-32 flex-shrink-0 rounded-full"
							src={pokemonData.data.sprites.front_default}
							alt=""
						/>
					</div>
					<div>
						<div className="-mt-px flex divide-x ">
							<div className="flex w-0 flex-1">
								<Link
									href={`/${pokemon.name}`}
									className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
								>
									<FingerPrintIcon
										className="h-5 w-5 text-gray-400"
										aria-hidden="true"
									/>
									<span className="ml-3">More details</span>
								</Link>
							</div>
						</div>
					</div>
				</>
			)}
		</li>
	)
}

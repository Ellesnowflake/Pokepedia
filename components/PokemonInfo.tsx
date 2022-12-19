import { PaperClipIcon, VariableIcon } from '@heroicons/react/20/solid'
import Stats from './Stats'

interface PokemonInfo {
	sprites: {
		front_default: string
		back_default: string
		front_shiny: string
		back_shiny: string
	}
	abilities: { ability: { name: string } }[]
	stats: { base_stat: number; stat: { name: string } }[]
	weight: number
	base_experience: number
	height: number
	name: string
	types: { type: { name: string } }[]
}

export default function PokemonInfo({ pokemon }: { pokemon: PokemonInfo }) {
	return (
		<div className="overflow-hidden bg-white shadow sm:rounded-lg">
			<div className="px-4 py-5 sm:px-6">
				<div className=" flex gap-10 overflow-x-scroll">
					<img
						className="inline-block h-32 w-32"
						src={pokemon.sprites.front_default}
						alt="face_default"
					/>
					<img
						className="inline-block h-32 w-32"
						src={pokemon.sprites.back_default}
						alt="back_default"
					/>
					<img
						className="inline-block h-32 w-32"
						src={pokemon.sprites.front_shiny}
						alt="front_shiny"
					/>
					<img
						className="inline-block h-32 w-32"
						src={pokemon.sprites.back_shiny}
						alt="back_shiny"
					/>
				</div>
				<h1 className="text-lg font-medium capitalize leading-6 text-gray-900">
					{pokemon.name}
				</h1>
			</div>
			<div className="border-t border-gray-200 px-4 py-5 sm:px-6">
				<dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
					<div className="sm:col-span-1">
						<dt className="text-sm font-medium text-gray-500">
							Types
						</dt>
						<dd className="mt-1 text-sm text-gray-900">
							<ul
								role="list"
								className="my-2 overflow-x-scroll flex gap-1 py-2"
							>
								{pokemon.types.map(type => (
									<li
										className="inline-block flex-shrink-0 rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-800 "
										key={type.type.name}
									>
										{type.type.name}
									</li>
								))}
							</ul>
						</dd>
					</div>
					<div className="sm:col-span-1">
						<dt className="text-sm font-medium text-gray-500">
							Base experience
						</dt>
						<dd className="mt-1 text-sm text-gray-900">
							{pokemon.base_experience}
						</dd>
					</div>
					<div className="sm:col-span-2">
						<Stats
							attack={pokemon.stats[1].base_stat}
							defense={pokemon.stats[2].base_stat}
							hp={pokemon.stats[0].base_stat}
						/>
					</div>
					<div className="sm:col-span-2">
						<dt className="text-sm font-medium text-gray-500">
							Abilities
						</dt>
						<dd className="mt-1 text-sm text-gray-900">
							<ul
								role="list"
								className="divide-y divide-gray-200 rounded-md border border-gray-200"
							>
								{pokemon.abilities.map(ability => (
									<li
										key={ability.ability.name}
										className="flex items-center justify-between py-3 pl-3 pr-4 text-sm capitalize"
									>
										<div className="flex w-0 flex-1 items-center">
											<VariableIcon
												className="h-5 w-5 flex-shrink-0 text-gray-400"
												aria-hidden="true"
											/>
											<span className="ml-2 w-0 flex-1 truncate">
												{ability.ability.name}
											</span>
										</div>
									</li>
								))}
							</ul>
						</dd>
					</div>
				</dl>
			</div>
		</div>
	)
}

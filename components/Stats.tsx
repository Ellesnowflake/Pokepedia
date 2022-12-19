export default function Stats({
	attack,
	defense,
	hp,
}: {
	attack: number
	defense: number
	hp: number
}) {
	return (
		<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-4xl">
				<dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
					<div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
						<dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
							Attack
						</dt>
						<dd className="order-1 text-5xl font-bold tracking-tight text-red-600">
							{attack}
						</dd>
					</div>
					<div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
						<dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
							Defense
						</dt>
						<dd className="order-1 text-5xl font-bold tracking-tight text-blue-600">
							{defense}
						</dd>
					</div>
					<div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
						<dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
							HP
						</dt>
						<dd className="order-1 text-5xl font-bold tracking-tight text-green-600">
							{hp}
						</dd>
					</div>
				</dl>
			</div>
		</div>
	)
}

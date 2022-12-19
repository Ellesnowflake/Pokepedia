import { Fragment } from 'react'
import { Transition } from '@headlessui/react'
import {
	ExclamationTriangleIcon,
	FaceFrownIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function ErrorMessage({
	message,
	icon,
}: {
	message: string
	icon?: 'exclamation-triangle' | 'face-frown'
}) {
	return (
		<Transition.Root show={true} as={Fragment}>
			<div className="relative z-10">
				<Transition.Child
					as={Fragment}
					enter="ease-out duration-300"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
				</Transition.Child>

				<div className="fixed inset-0 z-10 overflow-y-auto">
					<div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
							enterTo="opacity-100 translate-y-0 sm:scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 translate-y-0 sm:scale-100"
							leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
						>
							<div className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
								<div className="absolute top-0 right-0 hidden pt-4 pr-4 sm:block"></div>
								<div className="sm:flex sm:items-start">
									<div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
										{icon === 'face-frown' ? (
											<FaceFrownIcon
												className="h-6 w-6 text-red-600"
												aria-hidden="true"
											/>
										) : (
											<ExclamationTriangleIcon
												className="h-6 w-6 text-red-600"
												aria-hidden="true"
											/>
										)}
									</div>
									<div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
										<h3 className="text-lg font-medium leading-6 text-gray-900">
											There was an error
										</h3>
										<div className="mt-2">
											<p className="text-sm text-gray-500">
												{message}
											</p>
										</div>
										<Link
											className="mt-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
											href="/"
										>
											Back to the Homepage
										</Link>
									</div>
								</div>
							</div>
						</Transition.Child>
					</div>
				</div>
			</div>
		</Transition.Root>
	)
}

'use client'

import Image from 'next/image'
import Link from 'next/link'
import basket from '../../public/assets/img/icons/basket.svg'
import favorites from '../../public/assets/img/icons/favorites.svg'
import search from '../../public/assets/img/icons/search.svg'

type ProductCardProps = {
	id: number
	name: string
	image: string
	price: number
	oldPrice?: number | null
}

export default function ProductCard({
	id,
	name,
	image,
	price,
	oldPrice,
}: ProductCardProps) {

	return (
		<Link
			href={`/product/${id}`}
			className='relative group p-4 shadow-sm hover:shadow-lg transition-shadow rounded-lg flex flex-col justify-between h-full bg-white'
		>
			<div className='relative w-full h-64'>
				<Image
					src={image}
					alt={name}
					layout='fill'
					objectFit='contain'
					className='rounded-lg'
				/>

				<div className='absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity bg-white/80 rounded-lg'>
					<button
						className='p-2 bg-green-custom text-white rounded-full hover:bg-green-600'
						title='Добавить в корзину'
					>
						<Image src={basket} alt='basket' width={24} height={24} />
					</button>
					<button
						className='p-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300'
						title='Добавить в избранное'
					>
						<Image src={favorites} alt='favorites' width={24} height={24} />
					</button>
					<button
						className='p-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300'
						title='Поиск'
					>
						<Image src={search} alt='search' width={24} height={24} />
					</button>
				</div>
			</div>

			<div className='mt-4'>
				<h3 className='text-lg font-medium text-gray-700 mb-2'>{name}</h3>
				<p className='text-green-custom font-bold'>
					{price.toLocaleString('ru-RU')} руб.
					{oldPrice && (
						<span className='text-gray-500 line-through ml-2'>
							{oldPrice.toLocaleString('ru-RU')} руб.
						</span>
					)}
				</p>
			</div>
		</Link>
	)
}

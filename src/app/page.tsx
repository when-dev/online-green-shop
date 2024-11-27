'use client'

import Image from 'next/image'
import banner from '../../public/assets/img/banner.png'
import { categories, products, sizes } from '@/utils/data/mockData'
import ProductCard from '@/components/product-card'
import { useState } from 'react'

export default function Home() {
	const [activeCategory, setActiveCategory] = useState('Комнатные растения')
	const [filtersVisible, setFiltersVisible] = useState(false)
	const totalPages = 4 // временное решение
	const currentPage = 1 // временное решение

	return (
		<div className='container mx-auto py-12'>
			<section className='overflow-hidden mb-12'>
				<Image
					src={banner}
					alt='Растения GreenShop'
					className="w-full h-auto"
					width={1200}
					height={450}
					unoptimized
				/>
			</section>

			<section className='flex flex-col lg:flex-row gap-6'>
				<button
					className='bg-green-custom text-white px-4 py-2 rounded-lg block lg:hidden mb-4 mx-4'
					onClick={() => setFiltersVisible(!filtersVisible)}
				>
					{filtersVisible ? 'Скрыть фильтры' : 'Показать фильтры'}
				</button>

				<aside
					className={`transition-all duration-300 ${
						filtersVisible ? 'block' : 'hidden'
					} lg:block bg-gray-50 w-full h-full lg:w-1/4 p-4 lg:p-6 rounded-lg shadow-sm`}
				>
					<h2 className='text-2xl font-semibold text-gray-800 mb-6'>Категории</h2>
					{categories.map((category, index) => (
						<div
							key={index}
							className={`flex justify-between items-center text-gray-700 group cursor-pointer mb-2 px-3 py-2 rounded-lg transition-colors ${
								activeCategory === category.name
									? 'bg-green-100 text-green-custom font-semibold'
									: 'hover:bg-gray-100 hover:text-green-custom'
							}`}
							onClick={() => setActiveCategory(category.name)}
						>
							<span>{category.name}</span>
							<span className='text-gray-500'>{`(${category.count})`}</span>
						</div>
					))}

					<div className='mt-6'>
						<h3 className='text-xl font-semibold text-gray-800 mb-4'>Цена</h3>
						<div className='flex flex-col gap-4'>
							<input
								type='range'
								min='250'
								max='15000'
								className='w-full accent-green-custom'
							/>
							<p className='text-gray-700 text-sm'>
								Цена: <span className='text-green-custom'>250 руб. - 15 000 руб.</span>
							</p>
						</div>
					</div>

					<div className='mt-6'>
						<h3 className='text-xl font-semibold text-gray-800 mb-4'>Размер</h3>
						<div className='flex flex-wrap gap-2'>
							{sizes.map((size, index) => (
								<label
									key={index}
									className='flex items-center cursor-pointer group px-2 py-1 border rounded-md text-gray-700 hover:border-green-custom hover:text-green-custom transition-colors'
								>
									{size.name} ({size.count})
								</label>
							))}
						</div>
					</div>

					<button className='bg-green-custom text-white px-4 py-2 rounded-lg w-full mt-6 hover:bg-green-600'>
						Применить фильтры
					</button>
				</aside>

				<main className='w-full lg:w-3/4'>
					<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
						{products.map(product => (
							<ProductCard
								key={product.id}
								id={product.id}
								name={product.name}
								image={product.image}
								price={product.price}
								oldPrice={product.oldPrice}
							/>
						))}
					</div>
				</main>
			</section>

			<section>
				<div className='flex items-center justify-center lg:justify-end gap-2 mt-6'>
					{Array.from({ length: totalPages }, (_, index) => {
						const page = index + 1
						return (
							<button
								key={page}
								className={`px-3 py-1 border rounded-md ${
									page === currentPage
										? 'bg-green-custom text-white border-green-custom'
										: 'text-gray-700 border-gray-400 hover:bg-gray-100'
								}`}
							>
								{page}
							</button>
						)
					})}

					<button className='px-3 py-1 border rounded-md text-gray-700 border-gray-400 hover:bg-gray-100'>
						&gt;
					</button>
				</div>
			</section>
		</div>
	)
}

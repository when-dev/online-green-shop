import Image from 'next/image'
import banner from '../../public/assets/img/banner.png'
import basket from '../../public/assets/img/icons/basket.svg'
import search from '../../public/assets/img/icons/search.svg'
import favorites from '../../public/assets/img/icons/favorites.svg'
import { categories, products, sizes } from '@/utils/data/mockData'

export default function Home() {
	const totalPages = 4 // временное решение
	const currentPage = 1 // временное решение

	return (
		<div className='container mx-auto py-12'>
			<section className=' overflow-hidden mb-12'>
				<Image
					src={banner}
					alt='Растения GreenShop'
					layout='responsive'
					width={1200}
					height={450}
					unoptimized
				/>
			</section>

			<section className='flex gap-6'>
				<aside>
					<div className='bg-gray-50'>
						<div className='flex flex-col gap-4 bg-gray-50 p-6 rounded-lg shadow-sm'>
							<h2 className='text-2xl font-semibold text-gray-800 mb-6'>
								Категории
							</h2>
							{categories.map((category, index) => (
								<div
									key={index}
									className='flex gap-14 justify-between items-center text-gray-700 group ml-4 cursor-pointer hover:text-green-custom transition-colors'
								>
									<span className='group-hover:text-green-custom transition-colors'>
										{category.name}
									</span>
									<span className='text-gray-500 group-hover:text-green-custom transition-colors'>
										({category.count})
									</span>
								</div>
							))}

							<div>
								<h3 className='text-xl font-semibold text-gray-800 mb-4'>
									Цена
								</h3>
								<div className='flex flex-col gap-4'>
									<input
										type='range'
										min='250'
										max='15000'
										className='w-full accent-green-custom'
									/>
									<p className='text-gray-700 text-sm'>
										Цена:{' '}
										<span className='text-green-custom'>
											250 руб. - 15 000 руб.
										</span>
									</p>
									<button className='bg-green-custom text-white px-4 py-2 rounded-lg hover:bg-green-600'>
										Фильтр
									</button>
								</div>
							</div>

							<div>
								<h3 className='text-xl font-semibold text-gray-800 mb-4'>
									Размер
								</h3>
								<div className='flex flex-col gap-2 ml-4'>
									{sizes.map((size, index) => (
										<label
											key={index}
											className='flex justify-between items-center cursor-pointer group'
										>
											<span className='text-gray-700 group-hover:text-green-custom transition-colors'>
												{size.name}
											</span>
											<span className='text-gray-500 group-hover:text-green-custom transition-colors'>
												({size.count})
											</span>
										</label>
									))}
								</div>
							</div>
						</div>
					</div>
				</aside>

				<main className='w-3/4'>
					<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
						{products.slice(0, 9).map(product => (
							<div
								key={product.id}
								className='relative group p-4 shadow-sm hover:shadow-lg transition-shadow rounded-lg'
							>
								<Image
									src={product.image}
									alt={product.name}
									layout='responsive'
									width={250}
									height={250}
									className='mb-4 rounded-lg'
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
										<Image
											src={favorites}
											alt='favorites'
											width={24}
											height={24}
										/>
									</button>
									<button
										className='p-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300'
										title='Поиск'
									>
										<Image src={search} alt='search' width={24} height={24} />
									</button>
								</div>

								<h3 className='text-lg font-medium text-gray-700 mb-2'>
									{product.name}
								</h3>
								<p className='text-green-custom font-bold'>
									{product.price.toLocaleString('ru-RU')} руб.
									{product.oldPrice && (
										<span className='text-gray-500 line-through ml-2'>
											{product.oldPrice.toLocaleString('ru-RU')} руб.
										</span>
									)}
								</p>
							</div>
						))}
					</div>
				</main>
			</section>

      {/* Временное решение */}
			<section>
				<div className='flex items-center justify-end gap-2 mt-6'>

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

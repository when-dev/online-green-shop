'use client'

import { useParams } from 'next/navigation'
import { products } from '@/utils/data/mockData'
import Image from 'next/image'
import Link from 'next/link'
import goldStar from '../../../../public/assets/img/icons/golden-star.svg'
import grayStar from '../../../../public/assets/img/icons/gray-star.svg'
import plus from '../../../../public/assets/img/icons/plus.svg'
import minus from '../../../../public/assets/img/icons/minus.svg'
import { useState } from 'react'
import RelatedProductSlider from '@/components/related-product-slider'

export default function ProductPage() {
	const { id } = useParams()
	const productId = parseInt(id as string)
	const product = products.find(p => p.id === productId)

	const [activeTab, setActiveTab] = useState<'description' | 'reviews'>(
		'description'
	)

	if (!product) {
		return (
			<div className='container mx-auto py-12 text-center'>
				<h1 className='text-2xl font-semibold text-gray-800'>
					Продукт не найден
				</h1>
				<Link href='/' className='text-green-custom hover:underline'>
					Вернуться на главную
				</Link>
			</div>
		)
	}

	const relatedProducts = products.filter(p => p.id !== productId)

	const renderStars = (rating: number) => {
		const fullStars = Math.floor(rating)
		const emptyStars = 5 - fullStars
		return (
			<div className='flex items-center'>
				{Array.from({ length: fullStars }).map((_, index) => (
					<Image
						key={index}
						src={goldStar}
						alt='Golden Star'
						width={20}
						height={20}
						className='inline'
					/>
				))}
				{Array.from({ length: emptyStars }).map((_, index) => (
					<Image
						key={index}
						src={grayStar}
						alt='Gray Star'
						width={20}
						height={20}
						className='inline'
					/>
				))}
				<span className='text-sm text-gray-600 ml-2'>
					{product.reviews} отзывов покупателей
				</span>
			</div>
		)
	}

	return (
		<div className='container mx-auto py-12'>
			<nav className='text-gray-600 mb-6'>
				<Link href='/' className='hover:underline text-green-custom'>
					Главная
				</Link>{' '}
				/{' '}
				<Link href='/products' className='hover:underline text-green-custom'>
					Каталог
				</Link>{' '}
				/{' '}
				<Link
					href='/indoor-plants'
					className='hover:underline text-green-custom'
				>
					Комнатные растения
				</Link>{' '}
				/ <span className='text-gray-800'>{product.name}</span>
			</nav>

			<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
				<div>
					<Image
						src={product.image}
						alt={product.name}
						width={600}
						height={600}
						className='rounded-lg object-cover'
					/>
				</div>

				<div>
					<h1 className='text-3xl font-semibold text-gray-800 mb-4'>
						{product.name}
					</h1>

					<div className='flex items-center justify-between mb-2 border-b-green-custom-transparent border-b pb-2'>
						<p className='text-green-custom text-2xl font-bold'>
							{product.price.toLocaleString('ru-RU')} руб.
							{product.oldPrice && (
								<span className='text-gray-500 text-lg line-through ml-2'>
									{product.oldPrice.toLocaleString('ru-RU')} руб.
								</span>
							)}
						</p>
						{renderStars(4.5)}
					</div>

					<div className='mt-6 flex flex-col gap-2'>
						<h3 className='text-sm font-semibold text-gray-800'>
							Краткое описание:
						</h3>
						<p className='text-sm text-gray-600 '>{product.description}</p>
					</div>

					<div className='mb-4 mt-6'>
						<h3 className='text-sm font-semibold text-gray-800 mb-2'>
							Размер:
						</h3>
						<div className='flex gap-2 text-lg'>
							{['S', 'M', 'L', 'XL'].map(size => (
								<button
									key={size}
									className='w-10 h-10 border rounded-full text-gray-500 hover:border-green-custom hover:text-green-custom focus:outline-none flex items-center justify-center transition-transform duration-200 hover:scale-110'
								>
									{size}
								</button>
							))}
						</div>
					</div>

					<div className='flex items-center gap-6 mb-6'>
						<div className='flex items-center gap-4'>
							<button className='w-[33px] h-[33px] text-[16px] bg-green-custom text-white font-bold rounded-full flex items-center justify-center'>
								<Image src={minus} alt='minus' width={17} height={16} />
							</button>
							<span className='text-lg font-medium'>1</span>
							<button className='w-[33px] h-[33px] text-[16px] bg-green-custom text-white font-bold rounded-full flex items-center justify-center'>
								<Image src={plus} alt='plus' width={17} height={16} />
							</button>
						</div>

						<div className='flex gap-4'>
							<button className='px-6 py-3 bg-green-custom text-white rounded-lg hover:bg-green-600'>
								Купить
							</button>
							<button className='px-6 py-3 border border-green-custom text-green-custom rounded-lg hover:bg-gray-100'>
								В корзину
							</button>
						</div>
					</div>

					<div className='mt-14 space-y-4'>
						<p className='text-sm text-gray-400'>
							Артикул:{' '}
							<span className='text-gray-500 font-medium'>
								{product.article}
							</span>
						</p>
						<p className='text-sm text-gray-400'>
							Категория:{' '}
							<span className='text-gray-500 font-medium'>
								{product.category}
							</span>
						</p>
						<p className='text-sm text-gray-400'>
							Теги:{' '}
							<span className='text-gray-500 font-medium'>
								{product.tags.join(', ')}
							</span>
						</p>
					</div>
				</div>
			</div>

			<div className='mt-12'>
				<div className='flex gap-4 border-b border-gray-300'>
					<button
						onClick={() => setActiveTab('description')}
						className={`font-semibold pb-2 ${
							activeTab === 'description'
								? 'text-green-custom border-b-2 border-green-custom'
								: 'text-gray-600 hover:text-green-custom'
						}`}
					>
						Описание продукта
					</button>
					<button
						onClick={() => setActiveTab('reviews')}
						className={`font-semibold pb-2 ${
							activeTab === 'reviews'
								? 'text-green-custom border-b-2 border-green-custom'
								: 'text-gray-600 hover:text-green-custom'
						}`}
					>
						Отзывы ({product.reviews})
					</button>
				</div>

				{activeTab === 'description' ? (
					<p className='mt-4 text-gray-500'>{product.longDescription}</p>
				) : (
					<div className='mt-4 text-gray-500'>
						<p>Отзывы о товаре:</p>
						<p>Пользователь 1: Отличный продукт!</p>
						<p>Пользователь 2: Рекомендую!</p>
					</div>
				)}
			</div>

			<div className='mt-12'>
				<h2 className='text-xl font-semibold text-green-custom mb-4 border-b border-green-custom-transparent pb-3'>Похожие</h2>
				<RelatedProductSlider products={relatedProducts} />
			</div>
		</div>
	)
}

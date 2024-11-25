'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import Image from 'next/image'
import Link from 'next/link'

type Product = {
	id: number
	name: string
	image: string
	price: number
}

type RelatedProductSliderProps = {
	products: Product[]
}

export default function RelatedProductSlider({
	products,
}: RelatedProductSliderProps) {
	return (
		<div className='related-products-slider'>
			<Swiper
				modules={[Navigation, Pagination, Autoplay]}
				spaceBetween={20}
				slidesPerView={1}
				pagination={{
					clickable: true,
					bulletClass: 'swiper-pagination-bullet',
					bulletActiveClass: 'swiper-pagination-bullet-active',
				}}
				autoplay={{
					delay: 3000,
					disableOnInteraction: false,
				}}
				loop={true}
				breakpoints={{
					640: { slidesPerView: 2 },
					768: { slidesPerView: 3 },
					1550: { slidesPerView: 4 },
					1780: { slidesPerView: 5 },
				}}
				className='py-4 custom-swiper-container'
			>
				{products.map(product => (
					<SwiperSlide key={product.id}>
						<Link href={`/product/${product.id}`}>
							<div className='group p-4 shadow-sm hover:shadow-lg transition-shadow rounded-lg'>
								<Image
									src={product.image}
									alt={product.name}
									width={250}
									height={250}
									className='rounded-lg object-contain h-[250px] w-full'
								/>
								<h3 className='text-lg font-medium text-gray-700 mt-2 group-hover:text-green-custom'>
									{product.name}
								</h3>
								<p className='text-green-custom font-bold'>
									{product.price.toLocaleString('ru-RU')} руб.
								</p>
							</div>
						</Link>
					</SwiperSlide>
				))}
			</Swiper>

			<style jsx global>{`
				.custom-swiper-container .swiper-pagination {
					margin-top: 55px; 
					position: relative;
					pointer-events: none;
				}

				.swiper-pagination-bullet {
					width: 12px;
					height: 12px;
					border: 1px solid #46A358;
					background: transparent;
					border-radius: 50%;
					transition: background 0.3s, transform 0.3s;
				}

				.swiper-pagination-bullet-active {
					background: #46A358; 
				}
			`}</style>
		</div>
	)
}

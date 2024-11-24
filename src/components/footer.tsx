import Image from 'next/image'
import plantCare from '../../public/assets/img/icons/plant-care.svg'
import plantGrowing from '../../public/assets/img/icons/plant-growing.svg'
import homeDelivery from '../../public/assets/img/icons/home-delivery.svg'
import facebook from '../../public/assets/img/icons/facebook.svg'
import twitter from '../../public/assets/img/icons/twitter.svg'
import instagram from '../../public/assets/img/icons/instagram.svg'
import linkedin from '../../public/assets/img/icons/linkedin.svg'
import payment from '../../public/assets/img/icons/payment.svg'
import logo from '../../public/assets/img/greenshop-logo.svg'

export default function Footer() {
	return (
		<footer>
			<div className='container mx-auto '>
				<div className='grid grid-cols-1 md:grid-cols-4 gap-6 py-12 '>
					<div className='text-center md:text-left flex flex-col items-center md:items-start border-r border-gray-200'>
						<Image src={plantCare} alt='Уход за растениями' className='mb-4' />
						<h4 className='text-lg font-semibold mb-2'>Уход за растениями</h4>
						<p className='text-gray-600 text-sm text-center md:text-left'>
							Мы — интернет-магазин растений.
						</p>
					</div>
					<div className='text-center md:text-left flex flex-col items-center md:items-start border-r border-gray-200'>
						<Image
							src={plantGrowing}
							alt='Выращивание растений'
							className='mb-4'
						/>
						<h4 className='text-lg font-semibold mb-2'>Выращивание растений</h4>
						<p className='text-gray-600 text-sm text-center md:text-left'>
							Предлагаем широкий ассортимент семян.
						</p>
					</div>
					<div className='text-center md:text-left flex flex-col items-center md:items-start'>
						<Image src={homeDelivery} alt='Доставка на дом' className='mb-4' />
						<h4 className='text-lg font-semibold mb-2'>Доставка на дом</h4>
						<p className='text-gray-600 text-sm text-center md:text-left'>
							Можно выбрать доставку в один из пунктов выдачи.
						</p>
					</div>
					<div className='text-center md:text-left'>
						<h4 className='text-lg font-semibold mb-4'>
							Хотите подписаться на информационную рассылку?
						</h4>
						<form className='flex flex-col items-center md:items-start gap-2'>
							<input
								type='email'
								placeholder='Введите электронную почту'
								className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-custom placeholder:text-sm'
							/>
							<button className='w-full bg-green-custom text-white px-4 py-2 rounded-lg hover:bg-green-600'>
								Подписаться
							</button>
						</form>
						<p className='text-gray-600 text-sm mt-4'>
							Мы отправляем новости и акции в новостной рассылке.
						</p>
					</div>
				</div>

				<div className='bg-green-50 py-6 border-b border-t border-gray-200'>
					<div className='container mx-auto flex flex-col items-center text-center md:flex-row md:justify-between md:items-center'>
						<Image src={logo} alt='GreenShop' className='h-8 mb-4 md:mb-0' />
						<p className='text-sm text-gray-700'>
							Санкт-Петербург, Цветочная ул., д. 7.
						</p>
						<p className='text-sm text-gray-700'>
							<a href='mailto:contact@greenshop.com'>contact@greenshop.com</a>
						</p>
						<p className='text-sm text-gray-700'>+7 900 111-22-33</p>
					</div>
				</div>

				<div className='py-6 mb-10 border-b'>
					<div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
						<div className='text-center md:text-left'>
							<h2 className='font-semibold text-gray-800 mb-4 select-none'>
								Моя страница
							</h2>
							<ul className='text-gray-600 text-sm space-y-2 cursor-pointer'>
								<li>Моя страница</li>
								<li>Наши магазины</li>
								<li>Наши контакты</li>
								<li>Карьера</li>
								<li>Спец. предложения</li>
							</ul>
						</div>

						<div className='text-center md:text-left'>
							<h2 className='font-semibold text-gray-800 mb-4 select-none'>
								Помощь
							</h2>
							<ul className='text-gray-600 text-sm space-y-2 cursor-pointer '>
								<li>Служба поддержки</li>
								<li>Как приобрести</li>
								<li>Доставка</li>
								<li>Товарная политика</li>
								<li>Возврат</li>
							</ul>
						</div>

						<div className='text-center md:text-left'>
							<h2 className='font-semibold text-gray-800 mb-4 select-none'>
								Категории
							</h2>
							<ul className='text-gray-600 text-sm space-y-2 cursor-pointer'>
								<li>Домашние растения</li>
								<li>Садовые растения</li>
								<li>Искусственные растения</li>
								<li>Семена</li>
								<li>Аксессуары</li>
							</ul>
						</div>

						<div className='flex flex-col items-center'>
							<h2 className='font-semibold text-gray-800 mb-4 select-none'>
								Социальные сети
							</h2>
							<div className='flex gap-4 mb-4 cursor-pointer'>
								<Image src={facebook} alt='Facebook' />
								<Image src={twitter} alt='Twitter' />
								<Image src={instagram} alt='Instagram' />
								<Image src={linkedin} alt='LinkedIn' />
							</div>
							<h5 className='font-semibold text-gray-800 mb-2'>Оплата</h5>
							<div className='flex gap-2'>
								<Image src={payment} alt='' />
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

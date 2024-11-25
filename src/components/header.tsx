'use client';

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import logo from '../../public/assets/img/greenshop-logo.svg'
import basket from '../../public/assets/img/icons/basket.svg'
import search from '../../public/assets/img/icons/search.svg'

export default function Header() {
	const pathname = usePathname()

	const navLinks = [
		{ href: '/', label: 'Главная' },
		{ href: '/products', label: 'Товары' },
		{ href: '/care', label: 'Уход' },
		{ href: '/blog', label: 'Блог' },
	]

	return (
		<header className=''>
			<div className='container flex justify-between items-center py-4  border-b border-green-custom-transparent'>
				<div className='flex items-center'>
					<Link href='/' className='flex items-center'>
						<Image src={logo} className="w-auto h-auto" alt='logo' />
					</Link>
				</div>

				<nav className="hidden md:flex space-x-11">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative text-gray-700 hover:text-green-600 font-medium ${
                pathname === link.href ? 'text-green-600' : ''
              }`}
            >
              {link.label}
              {pathname === link.href && (
                <span className="absolute bottom-[-25px] left-0 right-0 h-[3px] bg-green-custom"></span>
              )}
            </Link>
          ))}
        </nav>

				<div className="flex items-center space-x-8">
          <button className="text-gray-700 hover:text-green-600">
						<Image src={search} alt='search' />
          </button>

          <button className="text-gray-700 hover:text-green-600">
						<Image src={basket} alt='basket' />
          </button>

          <Link href="/login" className="bg-green-custom text-white font-medium px-8 py-2 rounded-lg hover:bg-green-600">
            Вход
          </Link>
        </div>
			</div>
		</header>
	)
}

'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { cartItems as initialCartItems, products } from '@/utils/data/mockData';
import RelatedProductSlider from '@/components/related-product-slider';
import deleteIcon from '../../../public/assets/img/icons/delete.svg';
import plus from '../../../public/assets/img/icons/plus.svg';
import minus from '../../../public/assets/img/icons/minus.svg';

export default function CartPage() {
	const [cartItems, setCartItems] = useState<typeof initialCartItems | null>(null);

  useEffect(() => {
    setCartItems(initialCartItems);
  }, []);

  if (!cartItems) {
    return <div className="container mx-auto py-12">Загрузка...</div>;
  }

  const totalCost = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleQuantityChange = (
    id: number,
    action: 'increment' | 'decrement'
  ) => {
    setCartItems((prev) =>
      prev!.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                action === 'increment'
                  ? item.quantity + 1
                  : Math.max(1, item.quantity - 1),
            }
          : item
      )
    );
  };

  const handleRemoveItem = (id: number) => {
    setCartItems((prev) => prev!.filter((item) => item.id !== id));
  };

  return (
    <div className="container mx-auto py-12 px-4 sm:px-8">
      <nav className="text-gray-600 mb-6">
        <Link href="/" className="hover:underline text-green-custom">
          Главная
        </Link>{' '}
        / <span className="text-gray-800">Товары</span> /{' '}
        <span className="text-gray-800">Корзина</span>
      </nav>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="space-y-4 lg:hidden">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-gray-50 rounded-lg p-4 shadow-sm flex flex-col gap-4"
              >
                <div className="flex gap-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="rounded-lg object-cover"
                  />
                  <div>
                    <p className="text-gray-800 font-medium">{item.name}</p>
                    <p className="text-xs text-gray-500">Артикул: {item.article}</p>
                  </div>
                </div>
                <div className="flex justify-between text-gray-700">
                  <p>Цена:</p>
                  <p>{item.price.toLocaleString('ru-RU')} руб.</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-gray-700">Кол-во:</p>
                  <div className="flex items-center gap-2">
                    <button
                      className="w-8 h-8 bg-green-custom text-white rounded-full flex items-center justify-center"
                      onClick={() =>
                        handleQuantityChange(item.id, 'decrement')
                      }
                    >
                      <Image src={minus} alt="minus" width={12} height={12} />
                    </button>
                    <span className="text-gray-800">{item.quantity}</span>
                    <button
                      className="w-8 h-8 bg-green-custom text-white rounded-full flex items-center justify-center"
                      onClick={() =>
                        handleQuantityChange(item.id, 'increment')
                      }
                    >
                      <Image src={plus} alt="plus" width={12} height={12} />
                    </button>
                  </div>
                </div>
                <div className="flex justify-between text-gray-700">
                  <p>Всего:</p>
                  <p>
                    {(item.price * item.quantity).toLocaleString('ru-RU')} руб.
                  </p>
                </div>
                <button
                  className="text-red-600 flex items-center self-end gap-2 hover:text-red-800"
                  onClick={() => handleRemoveItem(item.id)}
                >
                  <Image src={deleteIcon} alt="deleteIcon" />
                  Удалить
                </button>
              </div>
            ))}
          </div>

          <table className="w-full bg-gray-50 rounded-lg shadow-sm hidden lg:table">
            <thead>
              <tr className="text-left text-gray-700 border-b">
                <th className="py-3 px-4">Товары</th>
                <th className="py-3 px-4">Цена</th>
                <th className="py-3 px-4">Кол-во</th>
                <th className="py-3 px-4">Всего</th>
                <th className="py-3 px-4"></th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id} className="border-b">
                  <td className="py-4 px-4 flex items-center gap-4">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={60}
                      height={60}
                      className="rounded-lg object-cover"
                    />
                    <div>
                      <p className="text-gray-800 font-medium">{item.name}</p>
                      <p className="text-xs text-gray-500">
                        Артикул: {item.article}
                      </p>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    {item.price.toLocaleString('ru-RU')} руб.
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2 justify-center">
                      <button
                        className="w-8 h-8 bg-green-custom text-white rounded-full flex items-center justify-center"
                        onClick={() =>
                          handleQuantityChange(item.id, 'decrement')
                        }
                      >
                        <Image src={minus} alt="minus" width={12} height={12} />
                      </button>
                      <span className="text-gray-800">{item.quantity}</span>
                      <button
                        className="w-8 h-8 bg-green-custom text-white rounded-full flex items-center justify-center"
                        onClick={() =>
                          handleQuantityChange(item.id, 'increment')
                        }
                      >
                        <Image src={plus} alt="plus" width={12} height={12} />
                      </button>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    {(item.price * item.quantity).toLocaleString('ru-RU')} руб.
                  </td>
                  <td className="py-4 px-4 text-center text-red-600 cursor-pointer">
                    <button onClick={() => handleRemoveItem(item.id)}>
                      <Image src={deleteIcon} alt="deleteIcon" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
            Ваша корзина
          </h2>
          <div className="space-y-4">
            <div className="flex justify-between text-gray-700">
              <p>Итого</p>
              <p>{totalCost.toLocaleString('ru-RU')} руб.</p>
            </div>
            <div className="flex justify-between text-gray-700">
              <p>Скидка</p>
              <p>(-) 0.00 руб.</p>
            </div>
            <div className="flex justify-between text-gray-700">
              <p>Доставка</p>
              <p>1 500 руб.</p>
            </div>
            <hr className="border-gray-300" />
            <div className="flex justify-between font-semibold text-gray-800">
              <p>Всего</p>
              <p>{(totalCost + 1500).toLocaleString('ru-RU')} руб.</p>
            </div>
          </div>
          <button className="mt-6 w-full bg-green-custom text-white py-3 rounded-lg hover:bg-green-600">
            Перейти к оформлению
          </button>
          <button className="mt-4 w-full bg-gray-200 text-gray-700 py-3 rounded-lg hover:bg-gray-300">
            <Link href="/">Продолжить шоппинг</Link>
          </button>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-6">
          Может быть интересно
        </h2>
        <RelatedProductSlider products={products} />
      </div>
    </div>
  );
}

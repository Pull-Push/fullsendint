import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { sql } from "@vercel/postgres";


const user = {
    name: 'Phil Coulson',
    email: 'Phil@Shield.com',
    imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
    { name: 'Dashboard', href: '/dashboard', current: false },
    { name: 'Transactions', href: '/dashboard/transactions', current: false },
    { name: 'Customers', href: '/dashboard/customers', current: false },
    { name: 'Products', href: '#', current: true },
]
const userNavigation = [
    { name: 'Your Profile', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Sign out', href: '#' },
]


const { rows } = await sql`SELECT * from products`;


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
export default function Page() {
    return (
        <>
            <div className="min-h-full">
                <div className="bg-gray-800 pb-32">
                    <Disclosure as="nav" className="bg-gray-800">
                        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                            <div className="border-b border-gray-700">
                                <div className="flex h-16 items-center justify-between px-4 sm:px-0">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                                            </svg>
                                        </div>
                                        <div className="hidden md:block">
                                            <div className="ml-10 flex items-baseline space-x-4">
                                                {navigation.map((item) => (
                                                    <a
                                                        key={item.name}
                                                        href={item.href}
                                                        aria-current={item.current ? 'page' : undefined}
                                                        className={classNames(
                                                            item.current
                                                                ? 'bg-gray-900 text-white'
                                                                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                            'rounded-md px-3 py-2 text-sm font-medium',
                                                        )}
                                                    >
                                                        {item.name}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hidden md:block">
                                        <div className="ml-4 flex items-center md:ml-6">
                                            {/* Dropdown */}
                                            <Menu as="div" className="relative ml-3">
                                                <div>
                                                    <MenuButton className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                                        <span className="absolute -inset-1.5" />
                                                        <span className="sr-only">Open user menu</span>
                                                        <img alt="" src={user.imageUrl} className="h-8 w-8 rounded-full" />
                                                    </MenuButton>
                                                </div>
                                                <MenuItems
                                                    transition
                                                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                                                >
                                                    {userNavigation.map((item) => (
                                                        <MenuItem key={item.name}>
                                                            <a
                                                                href={item.href}
                                                                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                                                            >
                                                                {item.name}
                                                            </a>
                                                        </MenuItem>
                                                    ))}
                                                </MenuItems>
                                            </Menu>
                                        </div>
                                    </div>
                                    <div className="-mr-2 flex md:hidden">
                                        {/* Mobile menu button */}
                                        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                            <span className="absolute -inset-0.5" />
                                            <span className="sr-only">Open main menu</span>
                                            <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
                                            <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
                                        </DisclosureButton>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <DisclosurePanel className="border-b border-gray-700 md:hidden">
                            <div className="space-y-1 px-2 py-3 sm:px-3">
                                {navigation.map((item) => (
                                    <DisclosureButton
                                        key={item.name}
                                        as="a"
                                        href={item.href}
                                        aria-current={item.current ? 'page' : undefined}
                                        className={classNames(
                                            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                            'block rounded-md px-3 py-2 text-base font-medium',
                                        )}
                                    >
                                        {item.name}
                                    </DisclosureButton>
                                ))}
                            </div>
                            <div className="border-t border-gray-700 pb-3 pt-4">
                                <div className="flex items-center px-5">
                                    <div className="flex-shrink-0">
                                        <img alt="" src={user.imageUrl} className="h-10 w-10 rounded-full" />
                                    </div>
                                    <div className="ml-3">
                                        <div className="text-base font-medium leading-none text-white">{user.name}</div>
                                        <div className="text-sm font-medium leading-none text-gray-400">{user.email}</div>
                                    </div>
                                </div>
                                <div className="mt-3 space-y-1 px-2">
                                    {userNavigation.map((item) => (
                                        <DisclosureButton
                                            key={item.name}
                                            as="a"
                                            href={item.href}
                                            className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                                        >
                                            {item.name}
                                        </DisclosureButton>
                                    ))}
                                </div>
                            </div>
                        </DisclosurePanel>
                    </Disclosure>
                    <header className="py-10">
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <h1 className="text-3xl font-bold tracking-tight text-white">Products</h1>
                        </div>
                    </header>
                </div>

                <main className="-mt-32">
                    <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
                        <div className="rounded-lg bg-white px-5 py-6 shadow sm:px-6">
                            <div className="px-4 sm:px-6 lg:px-8">
                                <div className="mt-8 flow-root">
                                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                            <table className="min-w-full divide-y divide-gray-300">
                                                <thead>
                                                    <tr>
                                                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                                                            Name
                                                        </th>
                                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                            Roast
                                                        </th>
                                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                            Price
                                                        </th>
                                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                            Stock
                                                        </th>
                                                        <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                                                            <span className="sr-only">Edit</span>
                                                        </th>
                                                        <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                                                            <span className="sr-only">Delete</span>
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-200">
                                                {rows.map((product) => (
                                                        <tr key={product.id}>
                                                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                                                                {product.name}
                                                            </td>
                                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{product.roast}</td>
                                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{product.price}</td>
                                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{product.stock}</td>
                                                            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                                                                <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                                                    Edit<span className="sr-only">, {product.id}</span>
                                                                </a>
                                                            </td>
                                                            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                                                                <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                                                    Delete<span className="sr-only">, {product.id}</span>
                                                                </a>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}

import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { sql } from "@vercel/postgres";
import {createTransaction } from '../lib/data.js'
const { rows } = await sql`SELECT id, name FROM customers `;

export default function Form() {
    return (
        <form action={createTransaction}>
            <div className="sm:col-span-3">
                <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                    Customer
                </label>
                <div className="mt-2">
                    <select
                        id="customer"
                        name="customer"
                        autoComplete="customer-name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >   <option value="" disabled>
                            Select a customer
                        </option>
                        {rows.map((customer) => (
                            <option key={customer.id} value={customer.id}>
                                {customer.name}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-4">
                            <label htmlFor="amount" className="block text-sm font-medium leading-6 text-gray-900">
                                Invoice Amount
                            </label>
                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                    <input
                                        id="amount"
                                        name="amount"
                                        type="texnumbert"
                                        placeholder="please enter invoice amount"
                                        autoComplete="amount"
                                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="mt-10 space-y-10">
                    <fieldset>
                        <legend className="text-sm font-semibold leading-6 text-gray-900">Invoice Status</legend>
                        <div className="mt-6 space-y-6">
                            <div className="flex items-center gap-x-3">
                                <input
                                    id="pending"
                                    name="status"
                                    type="radio"
                                    value='pending'
                                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                />
                                <label htmlFor="pending" className="block text-sm font-medium leading-6 text-gray-900">
                                    Pending
                                </label>
                            </div>
                            <div className="flex items-center gap-x-3">
                                <input
                                    id="paid"
                                    name="status"
                                    type="radio"
                                    value='paid'
                                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                />
                                <label htmlFor="paid" className="block text-sm font-medium leading-6 text-gray-900">
                                    Paid
                                </label>
                            </div>
                        </div>
                    </fieldset>
                </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
                <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                    <a href="/dashboard/transactions"> Cancel </a>
                </button>
                <button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Save
                </button>
            </div>
        </form>
    )
}

'use server'
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function createTransaction(data){
  const dataDict = {
    customer_id: data.get('customer'),
    amount: data.get('amount'),
    status: data.get('status')
  }
  const date = new Date().toISOString().split('T')[0];

  await sql`
        INSERT INTO transactions (customer_id, amount, status, date)
        VALUES (${dataDict.customer_id}, ${dataDict.amount}, ${dataDict.status}, ${date})
    `;
    revalidatePath('/dashboard/transactions');
    redirect('/dashboard/transactions')
}

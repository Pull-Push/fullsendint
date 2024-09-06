
// const ITEMS_PER_PAGE = 5;
// export async function fetchFilteredTransactions(query, currentPage) {
//   const offset = (currentPage - 1) * ITEMS_PER_PAGE;
//     const transactions = await sql`
//       SELECT
//         transactions.id,
//         transactions.amount,
//         transactions.date,
//         transactions.status,
//         customers.name,
//         customers.email,
//         customers.image_url
//       FROM transactions
//       JOIN customers ON transactions.customer_id = customers.id
//       WHERE
//         customers.name ILIKE ${`%${query}%`} OR
//         customers.email ILIKE ${`%${query}%`} OR
//         transactions.amount::text ILIKE ${`%${query}%`} OR
//         transactions.date::text ILIKE ${`%${query}%`} OR
//         transactions.status ILIKE ${`%${query}%`}
//       ORDER BY transactions.date DESC
//       LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
//     `;

//     return transactions.rows;
// }

// export async function fetchTransactionsPages(query) {
//   try {
//     const count = await sql`SELECT COUNT(*)
//     FROM transactions
//     JOIN customers ON transactions.customer_id = customers.id
//     WHERE
//       customers.name ILIKE ${`%${query}%`} OR
//       customers.email ILIKE ${`%${query}%`} OR
//       transactions.amount::text ILIKE ${`%${query}%`} OR
//       transactions.date::text ILIKE ${`%${query}%`} OR
//       transactions.status ILIKE ${`%${query}%`}
//   `;

//     const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
//     return totalPages;
//   } catch (error) {
//     console.error('Database Error:', error);
//     throw new Error('Failed to fetch total number of transactions.');
//   }
// }

// export async function fetchTransactionById(id) {
//   try {
//     const data = await sql`
//       SELECT
//         transactions.id,
//         transactions.customer_id,
//         transactions.amount,
//         transactions.status
//       FROM transactions
//       WHERE transactions.id = ${id};
//     `;

//     const transaction = data.rows.map((transaction) => ({
//       ...transaction,
//       amount: transaction.amount / 100,
//     }));

//     return transaction[0];
//   } catch (error) {
//     console.error('Database Error:', error);
//     throw new Error('Failed to fetch transaction.');
//   }
// }
// export async function fetchCustomers() {
//     const data = await sql<CustomerField>`
//       SELECT
//         id,
//         name
//       FROM customers
//       ORDER BY name ASC
//     `;

//     const customers = data.rows;
//     return customers;
// }
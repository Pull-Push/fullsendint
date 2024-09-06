import { sql } from "@vercel/postgres";

export default async function Page() {
  const { rows } = await sql`SELECT * from customers`;

  return (
    <div>
      {rows.map((row) => (
        <div key={row.id}>
          {row.id} - {row.name}
        </div>
      ))}
    </div>
  );
}
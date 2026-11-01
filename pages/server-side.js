// import mysql from 'mysql2/promise'

// export async function getServerSideProps() {
//     const connection = await mysql.createConnection({
//         host: 'localhost',
//         user: 'root',
//         password: '',
//         database: 'testdb'
//     })
//     const [rows] = await connection.execute('SELECT value FROM timesample ORDER BY id DESC LIMIT 1')
//     return { props: { data: rows[0] ? rows[0].value : 'No data' } }
// }

// export default function ServerSide({ data }) {
//     return  <div>
//                 <h1>Latest time from MySQL:</h1>
//                 <p>{data}</p>
//             </div>
// }

import pool from '../lib/db'

export async function getServerSideProps() {
  const [rows] = await pool.query(
    'SELECT value FROM timesample ORDER BY id DESC LIMIT 1'
  )
  return { props: { data: rows[0] ? String(rows[0].value) : 'No data' } }
}

export default function ServerSide({ data }) {
  return (
    <div>
      <h1>SSR Demo</h1>
      <h2>Latest time from MySQL:</h2>
      <p>{data}</p>
    </div>
  )
}
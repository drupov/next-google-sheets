import Link from 'next/link'
import { google } from 'googleapis'

export async function getServerSideProps() {
  const auth = await google.auth.getClient({ scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'] });

  const sheets = google.sheets({ version: 'v4', auth });

  const range = 'Players!A:D';

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SPREADSHEET_ID,
    range,
  });

  let players = response.data.values
  players.shift()

  return {
    props: {
      players
    }
  }
}

function Players({players}) {
  return <ul>
    {players.map((player, i) => {
      const lastName = player[1]
      const id = i + 1
      const link = `/players/${id}`

      return (
        <>
          <li key={id}>
            <Link href={link}>
              {lastName}
            </Link>
          </li>
        </>
      )
    })}
  </ul>
}

export default Players

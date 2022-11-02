import Link from 'next/link'
import { google } from 'googleapis'

export async function getServerSideProps({query}) {
  const {player} = query
  const playerId = parseInt(player) + 1

  const auth = await google.auth.getClient({ scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'] });
  const sheets = google.sheets({ version: 'v4', auth });
  const range = `Players!A${playerId}:D${playerId}`;
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SPREADSHEET_ID,
    range,
  });

  const [firstName, lastName, position] = response.data.values[0];

  return {
    props: {
      firstName,
      lastName,
      position
    }
  }
}

export default function Player({firstName, lastName, position}) {
  return (
    <article>
      <h1>{firstName} {lastName}, {position}</h1>
      <Link href="/players">Back</Link>
    </article>
  )
}

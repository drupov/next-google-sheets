import { google } from 'googleapis'

export async function getServerSideProps() {
  const auth = await google.auth.getClient({ scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'] });

  const sheets = google.sheets({ version: 'v4', auth });

  const range = 'Players!A3:D3';

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SPREADSHEET_ID,
    range,
  });

  const [firstName, lastName, position, rating] = response.data.values[0];

  return {
    props: {
      firstName,
      lastName,
      position,
      rating
    }
  }
}

export default function Player({firstName, lastName, position, rating}) {
  return (
    <article>
      <h1>{firstName} {lastName}, {position}: {rating}</h1>
    </article>
  )
}

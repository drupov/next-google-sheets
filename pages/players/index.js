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
  const foo = players.shift()

  return {
    props: {
      players
    }
  }
}

function Players({players}) {
  return <ul>
    {players.map(player => {
      const [firstName, lastName, position, rating] = player
      return (
        <>
          <li key={firstName}>{firstName} {lastName}, {position}: {rating}</li>
        </>
      )
    })}
  </ul>
}

export default Players

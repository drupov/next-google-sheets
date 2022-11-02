[Next.js](https://nextjs.org/) project receiveiung data from a Google Sheet.

## Google Sheets API preparations

In the Google Cloud Console create a new project and under API and credentials create a new Service account. Use the email to give Editor access to it in your spreadsheet. Also download API-credentials for that user and copy them as `keys.json` to the root of the project.

Rename `.env.local.example` to `.env.local` and update the value of `SPREADSHEET_ID` to your spreadsheet ID.

For this demo the follwing spreadsheet was used:

[Google sheets example](/assets/google-sheet-example.jpg?raw=true 'Google sheets example')

## Start application

Install dependencies:

```bash
npm install
```

Finally, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000/players](http://localhost:3000/players) with your browser to see the result.

Clicking on each player should give you the detailed page for that player.

WIP.

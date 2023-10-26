import { NextRequest } from "next/server";
import { google } from "googleapis";

export async function GET(req: NextRequest) {
    try {
        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL!,
                private_key: process.env.GOOGLE_SERVICE_ACCOUNT_KEY!.replace(
                    /\\n/g,
                    "\n"
                ),
            },
            scopes: [
                "https://www.googleapis.com/auth/spreadsheets",
                "https://www.googleapis.com/auth/drive",
                "https://www.googleapis.com/auth/drive.file",
            ],
        });

        const sheet = google.sheets({
            auth,
            version: "v4",
        });

        const response = await sheet.spreadsheets.values.get({
            spreadsheetId: process.env.GOOGLE_SHEET_ID!,
            range: "A1:F1",
        });

        const data = response.data.values;
        console.log(data);
        return new Response(JSON.stringify(data));
    } catch (err: any) {
        console.log(err);
        return new Response(err.message, { status: 500 });
    }
}

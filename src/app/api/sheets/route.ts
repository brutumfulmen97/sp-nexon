import { NextRequest } from "next/server";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";

const jwt = new JWT({
    email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL!,
    key: process.env.GOOGLE_SERVICE_ACCOUNT_KEY!,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const doc = new GoogleSpreadsheet(
    "1BftJ0aLWCCZDAh4jwhoyU7HtbUCI0ucLKmHKui8lDIY",
    jwt
);

export async function GET(req: NextRequest) {
    if (doc) {
        await doc.loadInfo();
        const sheet = doc.sheetsByIndex[0];
    }

    return new Response("cao");
}

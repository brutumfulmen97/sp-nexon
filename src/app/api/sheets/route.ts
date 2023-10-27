import { NextRequest } from "next/server";
import { google } from "googleapis";
import { getUserIp } from "@/lib/getUserIp";

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

        const url = new URL(req.url);
        const page = url.searchParams.get("page");
        console.log(page);

        const sheet = google.sheets({
            auth,
            version: "v4",
        });

        const response = await sheet.spreadsheets.values.get({
            spreadsheetId: process.env.GOOGLE_SHEET_ID!,
            range: "Sheet1!A1:F4",
        });

        const data = response.data.values;
        console.log(data);
        return new Response(JSON.stringify(data));
    } catch (err: any) {
        console.log(err);
        return new Response(err.message, { status: 500 });
    }
}

export async function POST(req: NextRequest) {
    if (!req) return new Response('{"success": false}', { status: 400 });
    const reqBody = await req.text();
    const body = JSON.parse(reqBody);

    const { shelfACount, shelfBCount, shelfCCount, shelfDCount } = body;

    const ip = getUserIp(req);
    const createdAt = new Date().toISOString();

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

        const response = await sheet.spreadsheets.values.append({
            spreadsheetId: process.env.GOOGLE_SHEET_ID!,
            range: "A2:F2",
            valueInputOption: "USER_ENTERED",
            requestBody: {
                values: [
                    [
                        shelfACount,
                        shelfBCount,
                        shelfCCount,
                        shelfDCount,
                        ip,
                        createdAt,
                    ],
                ],
            },
        });

        return new Response('{"success": true}', { status: 200 });
    } catch (err: any) {
        console.log(err);
        return new Response(err.message, { status: 500 });
    }
}

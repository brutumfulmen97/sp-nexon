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
        const page = url.searchParams.get("page") || 0;
        const sortDirection = url.searchParams.get("sortDirection") || "asc";

        const sheet = google.sheets({
            auth,
            version: "v4",
        });

        const response1 = await sheet.spreadsheets.values.get({
            spreadsheetId: process.env.GOOGLE_SHEET_ID!,
            range: "Sheet1!A1:A",
        });

        if (!response1.data.values) throw new Error("No data brt found");

        const numOfRecords = response1.data.values.length - 1;
        const numPages = Math.ceil((numOfRecords - 1) / 10);

        let sortRange = "";
        +page === 1 ? numOfRecords + 1 : numOfRecords - +page * 10;

        if (sortDirection === "desc") {
            sortRange = `Sheet1!A${+page === 1 ? 2 : +page * 10 - 8}:F${
                +page === 1 ? +page * 10 + 1 : +page * 10 + 1
            }`;
        } else {
            sortRange = `Sheet1!A${
                +page === 1
                    ? numOfRecords < 10
                        ? 2
                        : numOfRecords - 8
                    : numOfRecords - +page * 10 + 2 < 2
                    ? 2
                    : numOfRecords - +page * 10 + 2
            }:F${
                +page === 1 ? numOfRecords + 1 : numOfRecords - +page * 10 + 11
            }`;
        }

        console.log(sortRange);

        const response = await sheet.spreadsheets.values.batchGet({
            spreadsheetId: process.env.GOOGLE_SHEET_ID!,
            ranges: [
                sortRange,
                "Sheet1!A2:A",
                "Sheet1!B2:B",
                "Sheet1!C2:C",
                "Sheet1!D2:D",
            ],
        });

        if (!response.data.valueRanges) throw new Error("No data found");

        const data = response.data.valueRanges[0].values;

        const shelfATotal = response.data.valueRanges[1].values?.reduce(
            (acc: number, curr: any) => {
                return acc + +curr;
            },
            0
        );
        const shelfBTotal = response.data.valueRanges[2].values?.reduce(
            (acc: number, curr: any) => {
                return acc + +curr;
            },
            0
        );
        const shelfCTotal = response.data.valueRanges[3].values?.reduce(
            (acc: number, curr: any) => {
                return acc + +curr;
            },
            0
        );
        const shelfDTotal = response.data.valueRanges[4].values?.reduce(
            (acc: number, curr: any) => {
                return acc + +curr;
            },
            0
        );

        return new Response(
            JSON.stringify({
                data,
                numPages,
                numOfRecords,
                totals: { shelfATotal, shelfBTotal, shelfCTotal, shelfDTotal },
            })
        );
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

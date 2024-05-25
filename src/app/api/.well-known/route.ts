// app/api/.well-known/route.ts (hoặc .js)
import { NextResponse } from "next/server";

const association = {
  applinks: {
    apps: [],
    details: [
      {
        appID: "com.test.ios",
        paths: ["*"],
      },
    ],
  },
};

export async function GET() {
  return NextResponse.json(association, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

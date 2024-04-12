import { cookies } from "next/headers";

export async function GET() {
  const value = cookies().get("viewedWelcomeMessage")?.value;
  console.log("value", value);
  return Response.json({ value });
}

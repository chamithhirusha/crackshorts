import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { getChannel } from "@/lib/youtube";

export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session?.accessToken) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const data = await getChannel(session.accessToken);

  return Response.json(data);
}

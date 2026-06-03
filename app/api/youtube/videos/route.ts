import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { getChannel, getVideos } from "@/lib/youtube";

export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session?.accessToken) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const channel = await getChannel(session.accessToken);

  const uploadsPlaylistId =
    channel.items?.[0]?.contentDetails?.relatedPlaylists?.uploads;

  if (!uploadsPlaylistId) {
    return Response.json(
      { error: "No uploads playlist found" },
      { status: 400 },
    );
  }

  const videos = await getVideos(session.accessToken, uploadsPlaylistId);

  return Response.json({
    channel: channel.items?.[0],
    videos: videos.items,
  });
}

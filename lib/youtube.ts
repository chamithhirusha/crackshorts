const YOUTUBE_API = "https://www.googleapis.com/youtube/v3";

/**
 * Get channel info (name, stats, uploads playlist id)
 */
export async function getChannel(accessToken: string) {
  const res = await fetch(
    `${YOUTUBE_API}/channels?part=snippet,statistics,contentDetails&mine=true`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  );

  if (!res.ok) throw new Error("Failed to fetch channel");

  return res.json();
}

/**
 * Get videos from uploads playlist
 */
export async function getVideos(
  accessToken: string,
  uploadsPlaylistId: string,
) {
  const res = await fetch(
    `${YOUTUBE_API}/playlistItems?part=snippet,contentDetails&playlistId=${uploadsPlaylistId}&maxResults=25`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  );

  if (!res.ok) throw new Error("Failed to fetch videos");

  return res.json();
}

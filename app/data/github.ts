export async function getGithubStats(username: string = "Phogo2112") {
  try {
    const res = await fetch(`https://api.github.com/users/${username}`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    const data = await res.json();
    return {
      followers: data.followers || 0,
    };
  } catch (error) {
    console.error(error);
    return null;
  }
}

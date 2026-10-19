import constants from "../constants";

const { RAPIDAPI_HOST, REVIEWS_API_URL } = constants;

export async function fetchReviews(slug) {
  const res = await fetch(
    `${REVIEWS_API_URL}/restaurant/${slug}/reviews?sortBy=newestReview`,
    {
      headers: {
        "x-rapidapi-key": import.meta.env.VITE_RAPIDAPI_KEY,
        "x-rapidapi-host": RAPIDAPI_HOST,
      },
    }
  );
  if (!res.ok) throw new Error(`Request failed: ${res.status}`);
  return res.json();
}
// pages/api/fetchData.js

export default async function handler(req: any, res: any) {
  try {
    // Fetch data from the API
    const response = await fetch(
      "https://turbo-nest-vercel-production.up.railway.app/api/data"
    );

    // Check if the request was successful (status code 2xx)
    if (response.ok) {
      const data = await response.json();

      // Send the fetched data as the response
      res.status(200).json(data);
    } else {
      // If the API returns an error, send an error response
      const errorData = await response.json();
      res.status(response.status).json({ error: errorData });
    }
  } catch (error) {
    // Handle any unexpected errors
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

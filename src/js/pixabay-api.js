const API_KEY = "46773750-2567d69edc75d4703fc28c418";
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImages(query, page = 1,) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    page: page,
    per_page: 15,
  });
 
  try {
    const response = await fetch(`${BASE_URL}?${params.toString()}`);
    if (!response.ok) {
      throw new Error('Failed to fetch images');
    }
    const data = await response.json();
   
    return data;


  } catch (error) {
    throw new Error('Failed to fetch images');
  }
}





 


    












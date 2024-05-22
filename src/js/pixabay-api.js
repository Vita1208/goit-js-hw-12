import axios from 'axios';
import iziToast from 'izitoast';

const API_KEY = '43838744-76530a55bebff011fa4d493be'; 
const BASE_URL = 'https://pixabay.com/api/';

export const fetchImages = async (query, page = 1, perPage = 15) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        per_page: perPage,
        page: page,
      },
    });
    return response.data;
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Failed to fetch images. Please try again later.',
    });
    throw error;
  }
};



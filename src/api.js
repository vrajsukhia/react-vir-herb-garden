
import { ChatGPTUnofficialProxyAPI } from 'chatgpt'

export const fetchHerbalPlantInfo = async (query) => {
  const apiKey = process.env.REACT_APP_OPENAI_API_KEY;

  if (!apiKey) {
    throw new Error('API key is not defined in environment variables.');
  }

  try {
    const response = await axios.post('https://api.openai.com/v1/completions', {
      model: 'text-davinci-003',
      prompt: `Provide information about the herbal plant: ${query}`,
      max_tokens: 100
    }, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      }
    });
    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error('Error fetching data from OpenAI:', error);
    throw error;
  }
};

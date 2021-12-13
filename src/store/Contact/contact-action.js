export const fetchSendMessage = async (obj) => {
  let url = 'http://localhost:3000/message';
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  });

  if (!response.ok) {
    throw new Error('Could not fetch works data!');
  }

  const data = await response.json();

  return data;
};

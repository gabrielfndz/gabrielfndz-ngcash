export default async function handleFetch(type, ENDPOINT, body) {
  const formateENDPOINT = `http://localhost:3001${ENDPOINT}`;
  const content = 'application/json';
  const token = localStorage.getItem('token');

  if (type === 'GET') {
    const requestOptions = {
      method: type,
      headers: {
        'Content-Type': content,
        Accept: content,
        authorization: `${token}`,
        username: `${localStorage.getItem('user')}`
      },
    };

    try {
      const response = await fetch(formateENDPOINT, requestOptions);

      return response.json();
    } catch (e) {
      const error = e.message;

      return error;
    }
  }

  if (type === 'POST') {
    const requestOptions = {
      method: type,
      body: JSON.stringify(body),
      headers: {
        'content-type': content,
        Accept: content,
        authorization: `${token}`,
      },
    };

    try {
      const response = await fetch(formateENDPOINT, requestOptions);

      return response.json();
    } catch (e) {
      const error = e.message;

      return error;
    }
  }
}
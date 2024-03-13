//  Импортируется в useHelpStore.js

export default async function _fetchHelp(url, method = 'GET', data = null) {
  const options = {
    method: method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: data ? JSON.stringify(data) : null,
  };

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(response.status);
    }

    const responseData = await response.json();

    return responseData;
  } catch (error) {
    throw new Error(`Произошла ошибка при выполнении запроса: ${error.message}`);
  }
}
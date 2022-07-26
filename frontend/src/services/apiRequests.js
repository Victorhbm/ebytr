export const createUser = async (body) => {
  const response = await fetch('http://localhost:3001/register', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body),
  });

  const content = await response.json();

  return content;
};

export const login = async (body) => {
  const response = await fetch('http://localhost:3001/login', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body),
  });

  const content = await response.json();

  return content;
};


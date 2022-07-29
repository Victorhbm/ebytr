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

export const getAllTasks = async (token) => {
  const response = await fetch('http://localhost:3001/tasks', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'authorization': token,
    },
  });

  const content = await response.json();

  return content;
};

export const createTask = async (body, token) => {
  const response = await fetch('http://localhost:3001/tasks', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'authorization': token,
    },
    body: JSON.stringify(body),
  });

  const content = await response.json();

  return content;
};

export const deleteTask = async (id, token) => {
  await fetch(`http://localhost:3001/tasks/${id}`, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'authorization': token,
    },
  });
};

export const updateTaskName = async (id, token, task) => {
  await fetch(`http://localhost:3001/tasks/${id}/name`, {
    method: 'PATCH',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'authorization': token,
    },
    body: JSON.stringify({ task }),
  });
};

export const updateTaskStatus = async (id, token, status) => {
  await fetch(`http://localhost:3001/tasks/${id}/status`, {
    method: 'PATCH',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'authorization': token,
    },
    body: JSON.stringify({ status }),
  });
};

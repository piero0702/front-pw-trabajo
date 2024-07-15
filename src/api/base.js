const URI = 'https://pw-2024-1-grupo5-as-back.azurewebsites.net/';

const get = async (endpoint) => {
  return await fetch(URI + endpoint)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      return data;
    })
    .catch(error => {
      console.error('Error in GET request:', error);
    });
};

const post = async (endpoint, payload) => {
  const postPayload = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  };

  return await fetch(URI + endpoint, postPayload)
    .then(response => {
      if (!response.ok) {
        throw new Error('Error en la respuesta del servidor');
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      return data;
    })
    .catch(error => {
      console.error('Error in POST request:', error);
      throw error;
    });
};

const put = async (endpoint, payload) => {
  const putPayload = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  };

  return await fetch(URI + endpoint, putPayload)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      return data;
    })
    .catch(error => {
      console.error('Error in PUT request:', error);
    });
};

const remove = async (endpoint) => {
  const deletePayload = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  };

  return await fetch(URI + endpoint, deletePayload)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      return data;
    })
    .catch(error => {
      console.error('Error in DELETE request:', error);
    });
};

const base = { get, post, put, remove };

export default base;

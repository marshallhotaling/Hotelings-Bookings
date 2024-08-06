export const postData = (data) => {
  return fetch(`http://localhost:3001/api/v1/bookings`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
  })
    .then(response => {
      if (response.status !== 201) {
        throw new Error(`POST ERROR: Resource not created >>> STATUS ${response.status} - ${response.statusText}`)
      }
      return response.json()
    })
    .then(data => data)
    .catch(error => alert(`POST ERROR >>> STATUS ${error.status} - ${error.statusText}`))
}
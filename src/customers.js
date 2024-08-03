export const customerData = () => {
  const data = fetch(
    `http://localhost:3001/api/v1/customers`
  )
    .then(response => {
      if (!response.ok) {
        // eslint-disable-next-line max-len
        throw new Error(`GET ERROR: Response not OK >>> STATUS ${response.status} - ${response.statusText}`)
      }
      return response.json()
    })
    .then(data => data)
    // eslint-disable-next-line max-len
    .catch(error => alert(`GET ERROR >>> STATUS ${error.status} - ${error.statusText}`));
  return data;
};
export function seperateName(name, numb) {
  return name.replace(numb, '');
}

export function seperateNumber(name) {
  var numb = name.match(/\d/g);
  return numb.join("");
}

export function hasUser(data, username) {
  const found = data[0].customers.filter((item) => {
    return item.name === username
  })

  if (found.length > 0) {
    return found;
  }
  return false
}

export function hasRoomNumber(data, user) {
  const foundBookings = data[0].bookings.filter((item) => {
    return item.userID === user.id
  })
  if (foundBookings.length > 0) {
    console.log('foundBookings', user)

    return foundBookings
  }
  return false
}
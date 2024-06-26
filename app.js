//TODO:read file and get all users
const file = require('./users.json');

const getFirstUser = () => {
  //TODO: get first user of list
  return file[0];
};

const getLast = () => {
  //TODO: get last user of list
  const lengthOfLastUser = file.length - 1;
  return file[lengthOfLastUser];
};

const getUserByID = (userID) => {
  //TODO: get user object by id
  const user = file.find((v, i) => v.id === userID);
  return user || null;
};

const getUserByCompanyName = (companyName) => {
  //TODO: get user object by company name
  const user = file.find((v, i) => {
    return v.company.name.toLowerCase() === companyName.trim().toLowerCase()
  });

  return user || null
};

const getUsersByCity = (city) => {
  //TODO: get users that live in this city
  const user = file.find((v, i) => {
    return v.address.city.toLowerCase() === city.trim().toLowerCase()
  });

  return user || null;
};

const getStreet = (userID) => {
  //TODO: get street name by userID
  const user = getUserByID(userID);
  return user.address.street || null;
};

const addNewUser = (userObject) => {
  //TODO: add new user to the list
  return file.push(userObject);
};

// it will update user in file object only, not the original users
const updateUser = (userID) => {
  //TODO: update email when id === userID
  const user = getUserByID(userID);
  user.email = '';

  return user;
};

// it will delete user from file object only, not the original users
const deleteUserById = (userID) => {
  //TODO: remove user when id === userID
  const newList = file.filter((v, i) => v.id !== userID);
  return newList;
};

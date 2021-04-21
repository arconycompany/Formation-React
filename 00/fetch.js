const API_URL = 'https://jsonplaceholder.typicode.com/users';

const getUser = async(userId) => {
    const request = await fetch(API_URL);
    const users = await request.json();
    console.log(users);
    return findUser(users, userId);
}

const findUser = (data, id) => {
    const user = data.find((u) => u.id == id);
    return console.log(user);
}
try {
    getUser(4);
} catch (error) {
    console.log(error);
}

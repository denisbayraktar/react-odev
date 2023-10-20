import axios from 'axios';

const getUsers = (number) => {
    return new Promise(async (resolve, reject) => {
        const { data } = await axios
        ("https://jsonplaceholder.typicode.com/users/" + number);
        resolve(data);
    });
};

const getPosts = (number) => {
    return new Promise(async (resolve, reject) => {
        const { data } = await axios
        ("https://jsonplaceholder.typicode.com/posts?userId=" + number);
        resolve(data);
    });
};

export default async (number) => {

    const user = await getUsers(number);
    const posts = await getPosts(number);

    const filtered = posts.filter(
        (post) => post.id === 1);
        console.log(filtered)

};





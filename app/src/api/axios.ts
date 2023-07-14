import axios from "axios";

const axiosInst = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/posts/1"
});

export function getData(callback: any) {
    axiosInst.get("https://jsonplaceholder.typicode.com/posts")
    .then(data => {
        console.log(data.data);
        callback(data)
    })
    .catch(error => {
        console.log(error)
        callback(error)
    });
};




import axios from "axios"

export default class LoginService {

    setSubscriber() {
        return axios.get("https://jsonplaceholder.typicode.com/posts")
    }

}
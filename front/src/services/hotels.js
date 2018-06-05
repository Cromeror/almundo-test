import axios from "axios"
import { apiUrl } from "../../config/localConfig"

export default {
    find: (query = "") => {
        return axios.get(`${apiUrl}/hotels${query ? `name=${query}` : ""}`)
    }
}
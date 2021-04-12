import axios from "axios";

const baseURL = 'http://localhost:8081/api';

export async function getCoin() {
    let response = {};
    try {
        response = await axios.get(baseURL + "/getCoin", {});
        if (response.data.node.length === 0)
            response = await axios.get("/static/kgData.json", {});
    } catch (e) {
        response = await axios.get("/static/kgData.json", {});
    }
    return response.data;
}

export async function updateCoin(params) {
    try {
        await axios.post(baseURL + "/updateCoin", params);
        return true;
    } catch (e) {
        return false;
    }
}

import axios from "axios";

const baseURL = 'http://localhost:8081/api';

/**
 * 获得集团名列表
 * @returns {Promise<string[]>}
 */
export async function getGroupNameList() {
    let response = await axios.get(baseURL + "/getGroupNameList", {});
    return response.data;
}

/**
 * 根据集团名获得图谱
 * @param {string} groupName
 * @returns {Promise<null|*>}
 */
export async function getGraphByGroupName(groupName) {
    let params = {
        "groupName": groupName
    };
    try {
        let response = await axios.post(baseURL + "/getGraphByGroupName", params);
        return response.data;
    } catch (e) {
        return null;
    }
}

const BASE_URL = process.env.REACT_APP_API_URL;
export const userService = {
    getTeam,
    getSubMenu,
    getSubSubMenu
};

function getTeam() {
    const requestOptions = { method: 'GET'};
    return fetch(BASE_URL + "/api/manage/team", requestOptions);
}
function getSubMenu() {
    const requestOptions = { method: 'GET' };
    return fetch(BASE_URL + "/api/sub-menu", requestOptions);
}
function getSubSubMenu() {
    const requestOptions = { method: 'GET' };
    return fetch(BASE_URL + "/api/sub-sub-menu", requestOptions);
}


// function updateRole(id, roleData) {
//     const requestOptions = {
//         method: 'PUT',
//         body: JSON.stringify(roleData),
//     };
//     return fetch(BASE_URL + "/v1/api/roles/" + id, requestOptions);
// }

// function saveUser(userData) {
//     const requestOptions = {
//         method: 'POST',
//         body: JSON.stringify(userData),
//     };
//     return fetch(BASE_URL + "/v1/api/users", requestOptions);
// }
const BASE_URL = process.env.REACT_APP_API_URL;
export const userService = {
    getTeam,
    getSubMenu,
    getSubSubMenu,
    getSubSubEdit,
    getFiftyHospital,
    getTeamView,
    getFiftyHospitalEdit,
    getFiftyHospitalManage,
    getUserMessage,
};

function getTeam() {
    const requestOptions = { method: 'GET'};
    return fetch(BASE_URL + "/api/manage/team", requestOptions);
}
function getTeamView(id) {
    const requestOptions = { method: 'GET'};
    return fetch(BASE_URL + `/api/team/view/${id}`, requestOptions);
}
function getSubMenu() {
    const requestOptions = { method: 'GET' };
    return fetch(BASE_URL + "/api/sub-menu", requestOptions);
}
function getSubSubMenu() {
    const requestOptions = { method: 'GET' };
    return fetch(BASE_URL + "/api/sub-sub-menu", requestOptions);
}
function getSubSubEdit(id) {
    const requestOptions = { method: 'GET' };
    return fetch(BASE_URL + `/api/sub-menu/edit/${id}`, requestOptions);
}
function getFiftyHospital(id) {
    const requestOptions = { method: 'GET' };
    return fetch(BASE_URL + `/api/fifty-hospital/edit/${id}`, requestOptions);
}
function getFiftyHospitalEdit(id) {
    const requestOptions = { method: 'GET' };
    return fetch(BASE_URL + `/api/sub-sub-menu/edit/${id}`, requestOptions);
}
function getFiftyHospitalManage() {
    const requestOptions = { method: 'GET' };
    return fetch(BASE_URL + `/api/fifty-hospital/manage`, requestOptions);
}
///// User Message

function getUserMessage (data){
    return fetch (BASE_URL + `/api/user/message/`,{
        method:'POST',
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    });
}

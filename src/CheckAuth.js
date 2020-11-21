export default function isLoggedIn() {
    return localStorage.getItem("token") === null ? false : true;
}
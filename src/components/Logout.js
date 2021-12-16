import { useHistory } from "react-router";

const Logout = () => {

    const history = useHistory();
    sessionStorage.setItem('isUserLoggedIn', false);
    sessionStorage.clear();
    alert("Logged out successfully...");
    window.location.assign('/');
    // history.push("/login");
    return null;

}
export default Logout;

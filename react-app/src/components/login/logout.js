import {GoogleLogout} from "react-google-login";

const clientId = "437693456215-cl8ute2u4iltbpkbdmpq6dsaj7eoo6r5.apps.googleusercontent.com";

function Logout(){

    const onSuccess = () =>{
        console.log("Logout Success!" );
    }

    return(
        <div id = "signOutButton">
            <GoogleLogout

                clientId={clientId}
                disabled = {false}
                buttonText="Logout"
                onLogoutSuccess={onSuccess}
            />
        </div>

    )


}
export default Logout;
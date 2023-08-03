
import "./App.css";
import { useEffect } from 'react'; 
import { gapi } from 'gapi-script'
import LoginButton from "./components/login/login"
import LogoutButton from "./components/login/logout"

const clientId = "437693456215-cl8ute2u4iltbpkbdmpq6dsaj7eoo6r5.apps.googleusercontent.com";

function App() {

  useEffect(() => {
    function start(){
      gapi.client.innit({
        clientId: clientId,
        scope:"" 
      })
    };
    gapi.load('client:auth2', start)
  });
return (
    <div className = "App">
      <LoginButton />
      <LogoutButton />
    </div>
);
}
export default App;
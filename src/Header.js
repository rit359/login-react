import { useDispatch } from "react-redux";

function Header(){

    const dispatch = useDispatch();
    
    const handleLoginClick = ()=>{
        dispatch({'type':'HEADER','payload':true});
    }

    const handleSignupClick = ()=>{
        dispatch({'type':'HEADER','payload':false});
    }
    return (
    <header className="App-header">
    <ul className="app-menu"><li onClick={handleLoginClick}>Login</li><li onClick={handleSignupClick}>Signup</li></ul>
   </header>
   );
}

export default Header;
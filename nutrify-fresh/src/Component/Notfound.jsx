import { Link } from "react-router-dom"
export default function Notfound(){
    return(

        <div className="container">
        <div className="not-found">
            <h1>404 | Not Found</h1>
            <p><Link to={"/register"}>Register</Link> now to use</p>
        </div>
        </div>
    )
}
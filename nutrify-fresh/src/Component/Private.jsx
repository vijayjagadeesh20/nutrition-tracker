import { useContext } from "react";
import { UserContext } from "../contexts/context";

import { Navigate } from "react-router-dom";

export default function Private(props){
    // main logic for route protection

    const loggedData = useContext(UserContext)

    return(
        loggedData.loggedUser!== null ? <props.Component/> : <Navigate to="/login"/>
        )

    }

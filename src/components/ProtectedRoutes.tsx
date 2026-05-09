
//third party packages
import { Navigate, Outlet } from "react-router-dom";

//local packages
import { useMe } from "../ hooks/users";
import Spinner from "./Spinner";

function ProtectedRoutes() {
    const { data: me, isLoading } = useMe();
    // Wait for the auth check to resolve before deciding; otherwise the first
    // render (me === undefined) redirects an admin away on a hard load/refresh.
    if (isLoading) {
        return <Spinner />;
    }
    return (
     me && me.role === "admin" ? <Outlet /> : <Navigate to='/' replace />
  )
}

export default ProtectedRoutes

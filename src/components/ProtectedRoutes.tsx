
//third party packages
import { Navigate, Outlet } from "react-router-dom";

//local packages
import { useMe } from "../ hooks/users";

function ProtectedRoutes() {
    const { data: me } = useMe();
    return (
     me && me.role === "admin" ? <Outlet /> : <Navigate to='/' replace />
  )
}

export default ProtectedRoutes

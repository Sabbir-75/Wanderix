import { use } from "react"
import { AuthContext } from "../../Context/AuthContext/AuthContext"

export const useAuth = () => {
    const useInfo = use(AuthContext)
    return useInfo
}
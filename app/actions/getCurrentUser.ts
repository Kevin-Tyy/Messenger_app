import { Prisma } from "@prisma/client";
import getSession from "./getSession";

const getCurrentUser = async () => {
    try {
        const session = await getSession();
        if(!session?.user?.email){
            return null;
        }
        const currentUser = await prisma?.user.findUnique({
            where : {
                email : session.user.email as string  
            }
        }) 
        return currentUser
    } catch (error) {
        return null
    }
}
export default getCurrentUser
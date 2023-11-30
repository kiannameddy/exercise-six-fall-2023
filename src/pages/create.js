import {useEffect} from "react"
import { useRouter } from "next/router";
import LoginForm from "@/app/components/LoginForm";

export default function CreateUser(createUser, isLoggedIn) {
    // if user is logged in, forward them to the profile page 
    const router = useRouter();
    useEffect(() => {
        if(isLoggedIn) router.push("/");
    }, [isLoggedIn]);

    return (
        <main>
            <h1>Create User</h1>
            <CreateUser createUser={createUser} />
        </main>
    );
};
    


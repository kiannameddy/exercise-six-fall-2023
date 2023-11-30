import { useEffect } from "react";
import UserProfileCard from "@/app/components/UserProfileCard";
import { useRouter } from "next/router";

export default function UserProfile({isLoggedIn, userInfomration}) {
    const router = useRouter();

    useEffect(() => {
        if(!isLoggedIn) router.push("/login");
    }, [isLoggedIn]);

    return (
        <main>
            <h1>User Profile Card</h1>
            <UserProfileCard user={userInfomration}/>
        </main>
    );
};

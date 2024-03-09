import {Box, Button, TextField} from "@mui/material";
import {useRef, useState} from "react";
import {db} from "../firebase";
import { collection, query,where,getDocs } from 'firebase/firestore';
import { useNavigate } from "react-router-dom";

export default function Login() {
    const email = useRef("");
    const password = useRef("");
    const usersRef =  collection(db,'users');
    const navigate = useNavigate();
    const [isProgress, setIsProgress] = useState(false);


    const login = async (e) =>{
        e.preventDefault();
        setIsProgress(true);
        console.log(email.current.value, password.current.value)
        const search = query(usersRef, where("email" , "==" , email.current.value))
        
        const result = await getDocs(search);
        console.log(result.docs.length)
        if (result.docs.length > 0 ){
            const user =result.docs[0].data()
            const user_id = result.docs[0].id
            if (user.password === password.current.value) {
                console.log("login success");
                console.log("Redirect");
                localStorage.setItem('user_logged', JSON.stringify(user_id));
                setIsProgress(false);
                navigate('/dashboard', { replace: true });
                
            }else{
                console.log("Password incorrect")
                setIsProgress(false);
            }
        }else{
            console.log("User not found")
            setIsProgress(false);
        }
        setIsProgress(false);
    }
    return (
        <>
            <div>
                <h1>Login</h1>
            </div>
            <Box component="form" onSubmit={login} sx={{p: 2, border: '1px dashed grey'}}>
                <TextField label="Email" inputRef={email} className={"w-full my-4"} variant="outlined" type="email"/>
                <TextField label="Password" inputRef={password} className={"w-full my-4"} variant="outlined" type="password"/>
                <Button type="submit" disabled={isProgress} className={"my-4"}  variant="contained">Login</Button>
            </Box>
        </>


    );
}

import {useEffect, useState} from "react";
import {collection, doc, getDoc, getDocs} from "firebase/firestore";
import {db} from "../firebase";
import {Box, Button, TextField} from "@mui/material";

export default function Messages({flatId}) {
    const ref = doc(db, "flats", flatId);
    const [flat, setFlat] = useState({});
    //type = view | type = create
    const [type, setType] = useState('create');
    const [messages, setMessages] = useState([]);
    
    const getMessages = async () => {
      const refMessages = collection(db, "messages");
      const dataMessages = await getDocs(refMessages);
    }
    
    const getFlat = async () => {
        const userId = JSON.parse(localStorage.getItem('user_logged'));
        const dataFlat = await getDoc(ref);
        const responseFlat = { ...dataFlat.data() };
        if (responseFlat.user === userId){
            setType('view')
            await getMessages();
            
        }else{
            setType('create')
            
        }
        setFlat(responseFlat)
    }
    
    useEffect(
        () => {
            getFlat();
        }, []
    )
    
    const handleSubmit = () => {
        
    }
    return (
        
        <div>
            <h1>Messages</h1>
            {type ==='create' &&
            <>
                <Box
                    component={'form'}
                    onSubmit={handleSubmit}
                    className="
        flex
        flex-col
        items-center
        justify-center
        p-4
        rounded-lg
        bg-gray-200
        shadow-md"
                >
                    <TextField type={'text'} label={'Message'}  multiline maxRows={10} minRows={10} className="mb-4" />
                    <Button type={'submit'} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Send</Button>
                </Box>
            </>
            }
        </div>
    );
}

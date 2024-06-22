import {doc, getDoc} from "firebase/firestore";
import {db} from "../firebase";

export async function getUserLogged() {

    return JSON.parse(localStorage.getItem('user_data_logged')) || false;
}

export  function getUserId() {
    return JSON.parse(localStorage.getItem('user_logged')) || false;
}

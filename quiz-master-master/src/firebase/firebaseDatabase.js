import { addDoc, collection, doc, getDoc, getDocs, getFirestore, setDoc, updateDoc } from "firebase/firestore"
import app from "../Config/firebaseConfig";

const db = getFirestore(app);
const colRef = collection(db, "user-data");


async function updateHighScore(userID, totalScore, score) {
    await updateDoc(doc(colRef, userID), {
        totalScore: totalScore + score,
        highScore: score
    });
}

async function updateTotalScore(userID, totalScore, score) {
    await updateDoc(doc(colRef, userID), {
        totalScore: totalScore + score,
    });
}

async function createUserScores(userID, username, score) {
    await setDoc(doc(colRef, userID), {
        username: username,
        totalScore: score,
        highScore: score
    })
}

async function getUserData(userID) {
    const userDoc = await getDoc(doc(colRef, userID));

    if (userDoc.exists()) {
        return userDoc.data();
    } else {
        return false
    }
}

async function getUsersData() {
    let usersData = [];
    const firebaseUsersData = await getDocs(colRef);
    firebaseUsersData.forEach(doc => {
        usersData.push({ ...doc.data(), id: doc.id })
    })
    return usersData;
}

async function getScoreboradDataFB() {
    const usersData = await getUsersData();
    if (usersData) {
        return usersData.map((userData) => { return { highScore: userData.highScore, username: userData.username } })
    }
}


export { getScoreboradDataFB, getUserData, getUsersData, updateHighScore, updateTotalScore, createUserScores }
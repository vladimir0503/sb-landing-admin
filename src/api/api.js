import { getAuth, signInWithEmailAndPassword, } from "firebase/auth";

const urlDb = 'https://engraving-db-13cea-default-rtdb.firebaseio.com';
const secret = process.env.REACT_APP_FIREBASE_SECRET;

const authorizeUser = async (email, password) => {
    const auth = getAuth();
    const data = await signInWithEmailAndPassword(auth, email, password);
    return data.user;
};

const getProducts = async name => {
    const res = await fetch(`${urlDb}/catalog/${name}.json`);
    const data = await res.json();
    return data;
};

const deleteProduct = async (name, id) => {
    const res = await fetch(`${urlDb}/catalog/${name}/${id}.json?auth=${secret}`, {
        'method': 'DELETE'
    });
    const data = await res.json();
    return data;
};

const getProductInfo = async (name, id) => {
    const res = await fetch(`${urlDb}/catalog/${name}/${id}.json`);
    const data = await res.json();
    return data;
};

const api = {
    authorizeUser,
    getProducts,
    deleteProduct,
    getProductInfo
};

export default api;
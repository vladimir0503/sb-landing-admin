import { getAuth, signInWithEmailAndPassword, } from "firebase/auth";

const urlDb = 'https://engraving-db-13cea-default-rtdb.firebaseio.com';
const secret = process.env.REACT_APP_FIREBASE_SECRET;

const authorizeUser = async (email, password) => {
    const auth = getAuth();
    const data = await signInWithEmailAndPassword(auth, email, password);
    return data.user;
};

const getProducts = async catalogName => {
    const res = await fetch(`${urlDb}/catalog/${catalogName}.json`);
    const data = await res.json();
    return data;
};

const addProduct = async catalogName => {

    const product = {
        name: 'Название товара',
        price: 'Цена',
        article: 'Артикул',
        description: 'Описание товара',
        engravingIdeas: [''],
        slides: ['']
    };

    const res = await fetch(`${urlDb}/catalog/${catalogName}.json?auth=${secret}`, {
        'method': 'POST',
        'body': JSON.stringify(product)
    });

    const id = await res.json();
    return id;
}

const deleteProduct = async (catalogName, id) => {
    const res = await fetch(`${urlDb}/catalog/${catalogName}/${id}.json?auth=${secret}`, {
        'method': 'DELETE'
    });
    const data = await res.json();
    return data;
};

const getProductInfo = async (catalogName, id) => {
    const res = await fetch(`${urlDb}/catalog/${catalogName}/${id}.json`);
    const data = await res.json();
    return data;
};

const api = {
    authorizeUser,
    getProducts,
    addProduct,
    deleteProduct,
    getProductInfo
};

export default api;
import React from 'react';

import s from './ProductInfo.module.scss';

const ProductInfo = ({ info }) => {
    const [name, setName] = React.useState(info?.name);
    const [article, setArticle] = React.useState(info?.article);
    const [description, setDescription] = React.useState(info?.description);
    const [price, setPrice] = React.useState(info?.price);

    const handleSubmit = e => {
        e.preventDefault();
        console.log(name, article, description, price);
    };

    return (
        <div className={s.productInfo}>
            <form onSubmit={handleSubmit}>
                <div>
                    <input value={name} onChange={e => setName(e.target.value)} />
                    <button>Редактировать</button>
                </div>
                <div>
                    <input value={article} onChange={e => setArticle(e.target.value)} />
                    <button>Редактировать</button>
                </div>
                <div>
                    <textarea value={description} onChange={e => setDescription(e.target.value)} />
                    <button>Редактировать</button>
                </div>
                <div>
                    <input value={price} onChange={e => setPrice(e.target.value)} />
                    <button>Редактировать</button>
                </div>
            </form>
        </div>
    );
};

export default ProductInfo;
import { useState, useEffect } from 'react';
import {useParams} from "react-router-dom";

const Edit = () => {
    const [title, settitle] = useState('');
    const [description, setdescription] = useState('');
    const [success, setsuccess] = useState('');
    const user = JSON.parse(localStorage.getItem('user'));
    const sellerId = user.id;
    var { id } = useParams();
    

    function getproduct() {
        fetch(`http://localhost/fuel/public/api/products/readone.json?productId=${id}`).then((result) => {
            result.json().then((resp) => {
                if (resp != 404) {
                   const product = JSON.parse(resp)
                    settitle(product.title);
                    setdescription(product.description);
                }
            });
        });
    }

    function updateproduct(e) {
        e.preventDefault();
        const data = { id, title, description };
        console.warn('data', data);
        fetch(`http://localhost/fuel/public/api/products/update`, {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((result) => {
            result.json().then((resp) => {
                if(resp != 404){
                    setsuccess(resp);
                    settitle(resp.title);
                    setdescription(resp.description);
                }
            });
        });
    }
    useEffect(() => {
        getproduct();
    }, []);
    return (
        <form className="container p-4" onSubmit={updateproduct}>
            <h4>Update Product</h4>
            <div className="text-success">{success}</div>
            <div className="mb-3 w-50">
                <label htmlFor="title" className="form-label">
                    Title
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="title"
                    aria-describedby="emailHelp"
                    value={title}
                    onChange={(e) => settitle(e.target.value)}
                    required
                />
            </div>

            <div className="mb-3 w-50">
                <label htmlFor="description" className="form-label">
                    Description
                </label>
                <textarea
                    type="text"
                    className="form-control"
                    id="fname"
                    aria-describedby="emailHelp"
                    value={description}
                    onChange={(e) => setdescription(e.target.value)}
                    required
                >
                    Description
                </textarea>
            </div>

            <button type="submit" className="btn btn-primary">
                Update
            </button>
        </form>
    );
};

export default Edit;

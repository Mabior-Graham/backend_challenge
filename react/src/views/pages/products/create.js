import { useState } from 'react';

const Create = () => {
    const [title, settitle] = useState('');
    const [description, setdescription] = useState('');
    const [success, setsuccess] = useState('');
    const user = JSON.parse(localStorage.getItem('user'));
    const sellerId = user.id;

    const clearState = () => {
        settitle('');
        setdescription('');
    };

    function addproduct(e) {
        e.preventDefault();
        const data = { title, description, sellerId };
        fetch(`http://localhost/fuel/public/api/products/create`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((result) => {
            result.json().then((resp) => {
                setsuccess(resp);
                clearState();
            });
        });
    }

    return (
        <form className="container p-4" onSubmit={addproduct}>
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
                ADD
            </button>
        </form>
    );
};

export default Create;

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Read = () => {
    const [products, setproducts] = useState([]);
    const [posts, setposts] = useState(false);
    const [success, setsuccess] = useState(false);
    const user = JSON.parse(localStorage.getItem('user'));
    const sellerId = user.id;
    const Nav = useNavigate();
    function getproducts() {
        fetch(`http://localhost/fuel/public/api/products/read.json?sellerId=${sellerId}`).then((result) => {
            result.json().then((resp) => {
                if (resp != 404) {
                    setproducts(JSON.parse(resp));
                    setposts(true);
                }
            });
        });
    }
    function deletestudent(id) {
        fetch(`http://localhost/fuel/public/api/products/delete.json?productId=${id}`).then((result) => {
            result.json().then((resp) => {
                setsuccess((resp))
                getproducts();
            });
        });

      }
      function handleEdit(id) {
        Nav(`../edit/${id}`);
      }
    useEffect(() => {
        getproducts();
    }, []);
   
    return (
        <div className="App">
            <h2 className="d-flex ms-5 my-2 "> Products </h2>
            <div className='text-success'>{success}</div>
            <div className="d-flex justify-content-between">
                { posts ? <table className="table table-striped text-sm-start mx-3 w-50" style={{ fontSize: '0.8rem' }}>
                    <tbody>
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th colSpan={2} className="text-center">Actions</th>
                        </tr>
                        {products.map((item, i) => (
                            <tr key={i}>
                                <td>{item.title}</td>
                                <td>{item.description}</td>
                                <td>
                                    <button type="submit" className="btn btn-danger" onClick={() => deletestudent(item.id)}>
                                        Delete
                                    </button>
                                </td>
                                <td>
                                    <button type="submit" className="btn btn-primary" onClick={() => handleEdit(item.id)}>
                                        Edit
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table> : <h5 className='text-danger m-5'>No Products yet</h5>
                }
            </div>
        </div>
    );
};

export default Read;

import React from 'react';

const List=({loading, error,data})=> {
    if (loading) return<h3>Loading</h3>;
    if (error) return<h3>{error}</h3>;
    return (
        <div className="row">
            {
                data.map((item) => (
                    <div className="col-4">
                        <div className="card">
                            <div className="card-body" key={item.node_id}>
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-body">{item.description}</p>
                            </div>
                        </div>
                    </div>                       
                ))
            }
        </div>
    );
}

export default List     

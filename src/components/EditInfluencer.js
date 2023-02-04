import React from 'react';

const EditInfluencer = () => {
    return (
        <div>

            <input type="checkbox" id="edit-influencer" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="edit-influencer" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Edit Influencer Modal</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <label htmlFor="edit-influencer" className="btn">Yay!</label>
                </div>
            </div>
        </div>

    );
};

export default EditInfluencer;
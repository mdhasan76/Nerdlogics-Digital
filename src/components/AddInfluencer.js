import React from 'react';

const AddInfluencer = () => {
    return (
        <div>
            <form>
            <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" className="input input-bordered" />
        </div>
            </form>
        </div>
    );
};

export default AddInfluencer;
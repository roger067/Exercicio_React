import React from 'react';

const ApprovalCard = props => {
    return (
        <div className="card-approval">
            <div class="row">
                <div className="col-sm-6">
                    <button type="button" className="btn-green">Approve</button>
                </div>
                <div className="col-sm-6">
                    <button type="button" className="btn-red">Reject</button>
                </div>
            </div>
        </div>
    );
}

export default ApprovalCard;
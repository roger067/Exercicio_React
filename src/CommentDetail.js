import React from 'react';

const CommentDetail = props => {
    return (
        <div className="row">
            <div className="col-sm-1">
                <div className="thumbnail">
                    <img alt="avatar" className="img-responsive user-photo" src={props.avatar} />
                </div>
            </div>

            <div className="col-sm-5">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <strong>{props.author}</strong> <span className="text-muted pull-right">{props.date}</span>
                    </div>
                    <div className="panel-body">
                        {props.panelContent}
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CommentDetail;
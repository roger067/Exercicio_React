import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import './app.css'

const App = () => {
    return (
        <div className="container">
            <CommentDetail              
                avatar={faker.image.avatar()}
                author="Rogério"
                date="Today at 16:47"
                panelContent="Post muito bacana!">
                <ApprovalCard></ApprovalCard>
             </CommentDetail>

            <CommentDetail              
                avatar={faker.image.avatar()}
                author="João"
                date="Yesterday at 06:22"
                panelContent="Obrigado pelo feedback.">
                <ApprovalCard></ApprovalCard>
             </CommentDetail>

           <CommentDetail              
                avatar={faker.image.avatar()}
                author="Ana"
                date="Commented 5 days ago"
                panelContent="Boa cara, isso aí!">
                <ApprovalCard></ApprovalCard>
             </CommentDetail>
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
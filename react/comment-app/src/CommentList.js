import React, { Component } from "react";
import Comment  from "./Comment";

class CommentList extends Component {

    handleDeleteComment (index) {
        if (this.props.onDeleteComment) {
            this.props.onDeleteComment(index)
        }
    }
    render() {

        return(
            <div>
                { this.props.comments.map((comments, i) =>
                    <Comment
                        comment={comments}
                        key={i}
                        index={i}
                        onDeleteComment={this.handleDeleteComment.bind(this)}/>)}
            </div>
        )
    }
}

export default CommentList;

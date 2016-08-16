import React, {Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import trim from 'trim';

class TalkToPerLA extends Component {
    constructor(props) {
        super(props);
        this.state = { message: ''};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.onKeyUp = this.onKeyUp.bind(this);
    }

    handleChange(event) {
        this.setState({ message: event.target.value });
    }

    onKeyUp(event) {
        if(event.keyCode === 13 && trim(event.target.value) !== '') {
            event.preventDefault();
            const content = this.state.message.trim();
            this.props.listBotsAtDylansAPI(content);
//             this.props.postToPerla(content);
            this.setState({
                message: ''
            });

            console.log('Sent a new message: ', event.target.value);
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.listBotsAtDylansAPI(this.state.message);
//         this.props.postToPerla(this.state.message);

        this.setState({ message: ''});
        console.log('Sent a new message: ', event.target.value);
    }


    render() {
        const {name} = this.props;

        return (
          <div>
            <form
              className="comment-box"
              onSubmit={this.handleSubmit}
             >
             <label style={{fontSize: '3em', color: 'white'}} className="label">Hello {name}!</label>
             <p className="control has-addons">
                 <textarea
                   style={{
                       width: '50%',
                       fontSize: '3em',
                       borderColor: '#D0D0D0',
                       borderRadius: 3,
                   }}
                   className="textarea"
                   placeholder="Hey!"
                   value={ this.state.message }
                   onKeyUp={this.onKeyUp}
					         onChange={this.handleChange}
                   ></textarea>
              </p>
              <br />
              <button type="submit" className="button is-inverted is-medium is-info">Send Message to PerLA</button>
           </form>
        </div>
		  );
    }
}

TalkToPerLA.propTypes = {
    name: PropTypes.string,
    postToPerla: PropTypes.func,
    listBotsAtDylansAPI: PropTypes.func
};


export default connect(null, actions)(TalkToPerLA);

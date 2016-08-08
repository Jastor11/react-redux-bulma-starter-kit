import React from 'react';
import ChatMessage from './ChatMessage';

class ChatList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {username} = this.props.user;
        const renderMessages = this.props.messages.map( message => {
            return message.owner === username ?
              <ChatMessage key={message.time} message={message} /> :
              <ChatMessage align="right" key={message.time} message={message} />
            ;
        });
        return (
            <ul>
              {renderMessages}
            </ul>
        );
    }
}

ChatList.propTypes = {
    messages: React.PropTypes.array,
    user: React.PropTypes.shape({
        username: React.PropTypes.string
    })
};

ChatList.defaultProps = {
    messages: [
      {owner: 'Jeff Astor', time: '44', handle: '@jastor', content: 'Hey Shakira. Im really into you.' },
      {owner: 'Shakira Shakira', time: '32', handle: '@shakira', content: 'Hey Jeff. Im your girl ;-)'  },
      {owner: 'Jeff Astor', time: '21', handle: '@jastor', content: 'Wanna get married?' },
      {owner: 'Jeff Astor', time: '11', handle: '@jastor', content: 'Or maybe just a coffee?' },
      {owner: 'Shakira Shakira', time: '6', handle: '@shakira', content: 'Maybe some other time weirdo.'  }
    ],
    user: {username: 'Jeff Astor'}
};

export default ChatList;

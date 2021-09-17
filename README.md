![alt text](https://github.com/james625/Datwire/blob/main/app/assets/images/logotext.png "Logo Image")

# Datwire

Datwire is a text messaging website with servers and channels to organize all of the conversations. Users can interact with one another through direct messaging as well. This is similar to the popular app Discord.

# Live Site - [Datwire](https://datwire.herokuapp.com/)

# Servers, Channels, DMs

 - Users are able to create a server or join an existing server that they are not a part of.
 - Members of a server can create channels in the server to organize text conversations.
 - Chatters can experience live updates to their messages and have a live text exchange.
 - Users can create direct message channels to another user through the ID that is displayed in the user module.

# Challenges

  - Each channel in a server needed its own cog button to open a modal to modify that specific channel. One of the challenges was to have the modal recognize which channel it is   editing or deleting since all of the modals are the same in design. My solution was to pass in the channel itself to the function that would open the modal.
  ```
  ...
  <FontAwesomeIcon icon={faCog} className="cog" onClick={this.handleEditModal(true, channel)} />
  ... 
  handleEditModal(bool, channel){
          return e => {
              e.preventDefault();
              this.setState({ editModal: bool, modalInfo: channel })
          }
      }
  ```
  - Another challenge was updating messages depending on which channel the user is viewing. My solution was to use componentDidUpdate life cycle function to see if the website     params were changing and render messages based on the params.
  ```
   componentDidUpdate(prevProps){
        if (prevProps.channelId !== this.props.channelId) {
            this.props.fetchChannelMessages(this.props.channelId)
        }
    }
   ```

# Technologies Used

 - Ruby 2.7.3
 - Rails 6.1.4.1
 - Node v10.13.0 (JavaScript, React, Redux)
 - PostgreSQL 10.17
 - Action Cable WebSockets
 - HTML with SCSS

# Future Plans

  - Allow users to edit or delete their messages.
  - Create profile pictures for users.
  - Friends feature.

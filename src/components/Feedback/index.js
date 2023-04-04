// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isClicked: true}

  onChangeEmoji = () => {
    this.setState({isClicked: false})
  }

  render() {
    const {isClicked} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    return (
      <div className="container">
        <div className="emoji-container">
          {isClicked ? (
            <div>
              <h1>
                How satisfied are you with our customer support performance
              </h1>
              <ul className="list-container">
                {emojis.map(eachEmo => (
                  <li key={eachEmo.id}>
                    <button
                      onClick={this.onChangeEmoji}
                      type="button"
                      className="button"
                    >
                      <img
                        className="img"
                        src={eachEmo.imageUrl}
                        alt={eachEmo.name}
                      />
                      <p className="emoji-name">{eachEmo.name}</p>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <ul className="list-loveemoji">
              <li>
                <img src={loveEmojiUrl} className="img" alt="love emoji" />
                <h1>Thank You</h1>
                <p>
                  We will use your feedback to improve our customer support
                  performance
                </p>
              </li>
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default Feedback

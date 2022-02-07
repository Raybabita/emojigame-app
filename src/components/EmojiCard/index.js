// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiDetails, clickEmoji} = props
  const {id, emojiName, emojiUrl} = emojiDetails

  const onclickEmoji = () => {
    clickEmoji(id)
  }

  return (
    <li className="emoji-item">
      <button type="button" onClick={onclickEmoji} className="emoji-button">
        <img className="emoji-icon" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard

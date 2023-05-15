import './index.css'

const HistoryItem = props => {
  const {eachItem} = props
  return (
    <li className="history-item">
      <p className="history-time">{eachItem.timeAccessed}</p>
      <div className="history-item-sec">
        <img
          src={eachItem.logoUrl}
          className="history-item-logo"
          alt={eachItem.logoUrl}
        />
        <span className="history-item-name">{eachItem.title}</span>
        <span className="website-url">{eachItem.domainUrl}</span>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
        alt="delete"
        className="delete-icon"
      />
    </li>
  )
}

export default HistoryItem

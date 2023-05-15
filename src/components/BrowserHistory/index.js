import './index.css'

import {Component} from 'react'

import HistoryItem from './components/HistoryItem'

class BrowserHistory extends Component {
  state = {
    historyList: initialHistoryList,
  }

  render() {
    const {historyList} = this.props

    return (
      <div className="app-container">
        <nav className="navbar-container">
          <div className="header-content">
            <img
              src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
              alt="app logo"
              className="app-logo"
            />
            <div className="header-items">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search"
                className="search-logo"
              />
              <input
                type="search"
                className="input-value"
                placeholder="Search History"
              />
            </div>
          </div>
        </nav>
        <div>
          {historyList.length < 1 ? (
            <p>There is not history Item</p>
          ) : (
            <ul className="browser-history-container">
              {historyList.map(eachItem => (
                <HistoryItem key={eachItem.id} eachItem={eachItem} />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}
export default BrowserHistory

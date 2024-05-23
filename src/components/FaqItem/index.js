// Write your code here.
import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {isActive: false}

  onClickShowHideBtn = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }))
  }

  render() {
    const {isActive} = this.state
    const {faqDetails} = this.props
    const {questionText, answerText} = faqDetails
    const buttonImg = isActive
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    const altText = isActive ? 'minus' : 'plus'
    return (
      <li className="each-faq-container">
        <div className="question-and-btn-container">
          <h1 className="question"> {questionText} </h1>
          <button
            className="show-hide-btn"
            type="button"
            onClick={this.onClickShowHideBtn}
          >
            <img src={buttonImg} alt={altText} />
          </button>
        </div>
        {isActive && (
          <>
            <hr /> <p className="answer"> {answerText} </p>{' '}
          </>
        )}
      </li>
    )
  }
}

export default FaqItem

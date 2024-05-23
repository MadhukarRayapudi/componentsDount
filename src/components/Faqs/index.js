// Write your code here.
import './index.css'
import FaqItem from '../FaqItem'

const Faqs = props => {
  const {faqsList} = props

  return (
    <div className="app-container">
      <ul className="faqs-container">
        <h1 className="heading"> FAQs </h1>
        {faqsList.map(eachFaq => (
          <FaqItem faqDetails={eachFaq} key={eachFaq.id} />
        ))}
      </ul>
    </div>
  )
}

export default Faqs

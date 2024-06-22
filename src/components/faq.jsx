import "../components.css";
import FaqComponent from "./faq-component";

function Faqs() {

  const Data = [
    {
        key: 1,
        question: "I have more than a child, can I apply?",
        answer: "Yes, we encourage you to apply."
    },
    {
        key: 2,      
        question: "How long is the whole process before my child’s fees are paid?",
        answer: "Once your application has been confirmed, the fees are paid in less than 48 hours."
    },
    {
        key: 3,      
        question: "How does repayment occur?",
        answer: "Repayment is monthly and automated; this means it is automatically deducted every month."
    },
    {
        key: 4,      
        question: "Do you call friends & families if I don’t pay back on time?",
        answer: "No, we do not and will never do that."
    },
    {
        key: 5,      
        question: "Is my financial data secured?",
        answer: "Yes, your financial data is secured with the use of the best cyber security tools and technologies."
    },
    {
        key: 6,      
        question: "Does Acceede store my card details?",
        answer: "No, we do not store your card details. We partner with a PCI-DSS compliant payment processor."
    }
  ]

  
  const questionBank = Data.map(question => {
    return (
      <FaqComponent data={question} />
    )
  })


  return (

    
    <section className="faq-container">
      {questionBank}
    </section>
  );
}

export default Faqs;

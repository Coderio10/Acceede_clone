import hassleFree from '../assets/hassle-free.png'
import easyApplication from '../assets/Group-1448.svg'
import RelativelyLow from '../assets/Group-1446-1.svg'
import ParentsPayment from '../assets/Parents-payment.svg'
import SchoolPayment from '../assets/School-payment.svg'
import InstitutionPayment from '../assets/Institution-payment.svg'

import financialrecords from '../assets/Croods-UI-Window-2-1.svg'
import Digitalreceipts from '../assets/For-institutions.svg'
import Timelypayment from '../assets/Group-1452.svg'

import CollectTuition from '../assets/Money-income-rafiki.svg'
import RetrieveFinancial from '../assets/florid-analytics.png'
import PurchaseLearning from '../assets/purchase-kits.svg'

export default [
    {
        tag: "For Parents",
        id: "Parents",
        color: "service-tag-yellow",
        title: "How we make your life easier",
        extraOne: "Pay instantly",
        extraOneText: "No stress. No charges. No network failure. Get school receipt instantly. 100% secure.",
        extraTwo: "Pay Monthly",
        extraTwoText: "Do you hate paying your child’s school fees late? Do you want to free up cash for other expenses? We pay at the beginning of the month and you pay back monthly. No paperwork. No collateral. No hidden charges.",
        img: ParentsPayment,
        features: [
            {
                key: 1,
                title: 'Hassle-free payment',
                text: 'Pay at your own convenience with a smartphone, anytime and anywhere.',
                img: hassleFree
            },
            {
                key: 2,
                title: 'Relatively low interest rate',
                text: 'We only charge 4% for any credit taken.',
                img: RelativelyLow
            },
            {
                key: 3,
                title: 'Easy application process',
                text: 'No paperwork or collateral required to apply for credit.',
                img: easyApplication
            }  
        ]
    },
    {
        tag: "For Schools",
        id: "Schools",
        color: "service-tag-green",
        title: "How we make your life easier",
        extraOne: "Digital Reconciliation",
        extraOneText: "Tired of wasting hours on payment reconciliation at the end of the term? Our digital payment system reduces reconciliation time by up to 80%. Finish in 10 minutes, not 1 hour. Automate the issuance of digital receipt. Get insights/analytics on cash flow.",
        extraTwo: "Operating Cash Flow",
        extraTwoText: "Are delayed payments frustrating operations? We can help you generate 100% of your revenue at the beginning of the term, and also increase it by up to 30%. This means improved and predictable cash flow for you to effectively run your school. Enjoy exclusive access to our invoice financing platform.",
        img: SchoolPayment,
        features: [
            {
                key: 1,
                title: 'Digital receipt system',
                text: 'Save cost and time through paperless administration with our digital reconciliation & receipt system.',
                img: Digitalreceipts
            },
            {
                key: 2,
                title: 'Access to financial records',
                text: 'Easy access to financial records, cash flow insights, predictions and analytics.',
                img: financialrecords
            },
            {
                key: 3,
                title: 'Timely payment of fees',
                text: 'Get school fees fast – at the beginning of the term.',
                img: Timelypayment
            },
            {
                key: 4,
                title: 'Access to invoice financing',
                text: 'Access cash, up to 100% of your total school revenue at the beginning of the term. Not a loan. No interest payment. Just cash!',
                img: easyApplication
            }  
        ]
    },
    {
        tag: "For Vocational/Training Institutes",
        id: "Vocational/Training",
        color: "service-tag-purple",
        title: "How we make your life easier",
        extraOne: "Operating Cash Flow",
        extraOneText: "Generate revenue at the beginning of every enrollment session to efficiently run your vocational/training institutes. Increase revenue by up to 30%. Enjoy exclusive access to low-interest rate working capital.",
        extraTwo: "",
        extraTwoText: "Acceede guarantees revenue generation for smooth and efficient running of your vocational institution by offering full tuition fund to students at the beginning of the training session.",
        img: InstitutionPayment,
        features: [
            {
                key: 1,
                title: 'Collect tuition easily',
                text: 'Our digital payment system makes tuition collection easier and more efficient than the conventional method.',
                img: CollectTuition
            },
            {
                key: 2,
                title: 'Retrieve financial records easily',
                text: 'We also guarantee easy retrieval of receipts and financial records.',
                img: RetrieveFinancial
            },
            {
                key: 3,
                title: 'Purchase learning kits early',
                text: 'This warrants the early purchase of training materials, equipment and tools to cater for the desired number of students.',
                img: PurchaseLearning
            },
            {
                key: 4,
                title: 'Access to financing',
                text: 'Access short-medium term credit finance at very competitive rates.',
                img: easyApplication
            }  
        ]
    }
]
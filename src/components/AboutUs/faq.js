import React from 'react';
import "../../assets/styles/faq.css";
class faq extends React.Component{
    constructor(){
        super();
        this.state={
            faqs:[
                {
                    question:"What is a Telecom Refund Audit?",
                    answer:"A historical analysis to identify errors, overcharges, contract non-compliances, etc. that your company has been paying for. You will obtain refunds / recoveries / credits for these charges"
                },
                {
                    question:"Will Spend Cubes conduct a Telecom Refunds Audit with no strings attached?",
                    answer:"Yes – we make it very simple for you. This is a no-cash-out-of-pocket process. We get paid only after you obtain credits or recoveries."
                },
                {
                    question:"What is the process and timeline for a Telecom Refunds audit?",
                    answer:`The first step in our Telecom Analysis is the Telecom Refunds Audit.

                    Items that qualify for refunds, credits and recovery:
                    <br/>
                    – Past items overlooked
                    <br/>
                    – Pricing errors
                    <br/>
                    – Duplicate services
                    <br/>
                    – Closed locations
                    <br/>
                    – Features not used
                    <br/>
                    – Contract compliance review
                    <br/>
                    Correction of:
                    <br/>
                    – inaccurate invoices, overpayments
                    <br/>
                    – overlooked rebates and discounts
                    <br/>
                    – unclaimed recovery of refunds, taxes and other surcharges
                    <br/>
                    The findings and recovery items are identified within 4- 6 weeks.`
                },
                {
                    question:"What is Telecom Audit & Optimization?",
                    answer:"The Telecom Audit & Optimization is a combination of the Telecom Refund Audit and the Telecom Forward Savings Audit."
                },
                {
                    question:"What are the steps in a Telecom Audit?",
                    answer:"The first step is the Telecom Refunds Audit (see above). After this is underway we will ask for approval to commence the recommendations for Forward Savings (review any item not qualifying for recovery). These two parts work in conjunction (we have found it to be the fastest way to save your money). Forward Savings recommendations are findings that will help lower your monthly telecom bills going forward, saving you money month after month. On an average we have saved 12 – 25% for our customers."
                },
                {
                    question:"You say that Spend Cubes can obtain refunds or credits for overpayments to telecom providers. How far back can you go to get us refunds and credits?",
                    answer:"We are able to go back to the error inception date/ limitation of liability/ start of contract – whichever is later. In most cases, we obtain complete refunds."
                },
                {
                    question:"How much information will you need to get started?",
                    answer:"Very little! We can get started with your portal logins, contracts & signed LOA to recover & save money."
                },
                {
                    question:"My business was audited a few years ago. Do we need another audit?",
                    answer:"Yes, telecom services are dynamic with many changes occurring monthly. Even though another company audited your telecom bills, we are certain that we can perform deeper analysis and recover more funds for your company."
                },
                {
                    question:"How do you treat the information you learn/ obtain from audit?",
                    answer:"Yes, we treat information about your telecom bills as confidential. We include a Non-Disclosure Agreement (NDA) in our contract, or we can sign your non-disclosure agreement if you prefer."
                },
                {
                    question:"What is the difference between a Telecom Refunds Audit and a Telecom Audit & Optimization?",
                    answer:"The telecom refunds audit only provides the items that qualify for recovery and bring money back from historical findings. The telecom refunds audit does not include the complete contract review, telecom inventory, telecom site evaluation, usages, and recommendations on forward saving items to include optional traffic studies which bring more value and savings monthly."
                },
                {
                    question:"We are moving all voice services to VOIP. How will an audit help us?",
                    answer:"Don’t wait to begin an audit! If you wait until after you have moved to VOIP to research your telecom provider’s billings then it is often too late to gain optimal recovery. A project audit will help you get a good understanding of the products and telecom services you are currently paying for before you move or change services. We recommend a thorough contract review prior to ANY major changes in telecom services."
                },
                {
                    question:"We have our own internal auditors who audit our telecom bills and we don’t think we need Spend Cubes.",
                    answer:"There is nothing to lose by having our telecom experts review your bills to make sure that your bills are accurate. If no savings or recovery is found there is no fee. A telecom refunds audit will uncover items refunds due to your company from telecom providers. Spend Cubes has completed many “go behind” audits and have found huge overlooked recovery. In one instance, we found almost $1 M worth of savings after they were audited by a professional firm."
                },
                {
                    question:"Our telecom bills are being audited by another telecom auditing firm. What can Spend Cubes do for us?",
                    answer:"Spend Cubes can review your bills and give you a price comparison.  We will let you know if your telecom bills are being reviewed fully and accurately by others.  In many similar audits, we have found items that had been overlooked due to outdated telecom software, changes in technology, or lack of telecom knowledge. When any savings are found we only bill you for those items you approve.  You can compare our services and find out for yourself. Telecom expenses are complex, constantly changing, and can be confusing.  By utilizing the services of Spend Cubes you can be sure that your telecom service tariff rates, taxes, and surcharges are accurate, that your services are needed and being utilized, and that you are paying only for the services your business requires."
                },
                {
                    question:"Can Spend Cubes provide bill payment authorization & internal chargeback reporting for us?",
                    answer:"Yes, Spend Cubes can provide bill payment authorization, charge back reporting and many other be-spoke special reports."
                }
            ]
        }
    }
    render(){
        return(
            <div>
            <div className="container-fluid">
            <div className="faq-bg faq-search">
                <div className="centered">
                <h1  style={{color: "white", fontSize: "2.2rem", fontWeight: "bold"}}>Frequently Asked Questions (FAQs)</h1>
                </div>
            </div>
            </div>
            <div className="container" style={{marginTop:"20px"}}>
            <div className="row">
                {
                    this.state.faqs.map((ele,i)=>{
                        return (
                            <div className="col-12" style={{marginTop:"1.5rem"}}>
                                <div className="card">
                                    <div className="card-header" role="tab">
                                        <a class="collapse-faq" data-toggle="collapse" href={`#collapse`+i} role="button" aria-expanded="false" aria-controls={`collapse`+i}>
                                                <h5>
                                                <i class="fas fa-chevron-down"></i>
                                                <i class="fas fa-chevron-up"></i>
                                                {ele.question}
                                                </h5>
                                        </a>
                                    </div>
                                    <div class="collapse faq" id={`collapse`+i}>
                                    <div class="card-body" dangerouslySetInnerHTML={{__html:ele.answer}}/>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            </div>
            </div>
        )
    }
}
export default faq;
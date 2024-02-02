const faqData = [
  {
    id: 1,
    headingNum: 'headingOne',
    collapseNum: 'collapseOne',
    expanded: true,
    show: true,
    title: 'Which plan should I choose?',
    desc: "Only a quid cor blimey guvnor jolly good brolly gutted mate cup of tea cheers it grub blatant, some dodgy chav william buggered my good sir owt to do with me the bee's knees bubble and squeak.",
  },
  {
    id: 2,
    headingNum: 'headingTwo',
    collapseNum: 'collapseTwo',
    title: 'Do you offer custom services & development?',
    desc: "Only a quid cor blimey guvnor jolly good brolly gutted mate cup of tea cheers it grub blatant, some dodgy chav william buggered my good sir owt to do with me the bee's knees bubble and squeak.",
  },
  {
    id: 3,
    headingNum: 'headingThree',
    collapseNum: 'collapseThree',
    title: 'How To create NFT?',
    desc: "Only a quid cor blimey guvnor jolly good brolly gutted mate cup of tea cheers it grub blatant, some dodgy chav william buggered my good sir owt to do with me the bee's knees bubble and squeak.",
  },
  {
    id: 4,
    headingNum: 'headingFour',
    collapseNum: 'collapseFour',
    title: 'How to place bid?',
    desc: "Only a quid cor blimey guvnor jolly good brolly gutted mate cup of tea cheers it grub blatant, some dodgy chav william buggered my good sir owt to do with me the bee's knees bubble and squeak.",
  },
  {
    id: 5,
    headingNum: 'headingFive',
    collapseNum: 'collapseFive',
    title: 'How to connect wallet?',
    desc: "Only a quid cor blimey guvnor jolly good brolly gutted mate cup of tea cheers it grub blatant, some dodgy chav william buggered my good sir owt to do with me the bee's knees bubble and squeak.",
  },

  {
    id: 6,
    headingNum: 'flush-headingOne',
    collapseNum: 'flush-collapseOne',
    title: 'Do you offer custom services & development?',
    desc: "Only a quid cor blimey guvnor jolly good brolly gutted mate cup of tea cheers it grub blatant, some dodgy chav william buggered my good sir owt to do with me the bee's knees bubble and squeak.",
    expanded: true,
    show: true,
  },
  {
    id: 7,
    headingNum: 'flush-headingTwo',
    collapseNum: 'flush-collapseTwo',
    title: 'What are your office hours?',
    desc: "Only a quid cor blimey guvnor jolly good brolly gutted mate cup of tea cheers it grub blatant, some dodgy chav william buggered my good sir owt to do with me the bee's knees bubble and squeak.",
  },
  {
    id: 8,
    headingNum: 'flush-headingThree',
    collapseNum: 'flush-collapseThree',
    title: 'Can I get support for the free version?',
    desc: "Only a quid cor blimey guvnor jolly good brolly gutted mate cup of tea cheers it grub blatant, some dodgy chav william buggered my good sir owt to do with me the bee's knees bubble and squeak.",
  },
  {
    id: 9,
    headingNum: 'flush-headingFour',
    collapseNum: 'flush-collapseFour',
    title: 'Do your products support RTL?',
    desc: "Only a quid cor blimey guvnor jolly good brolly gutted mate cup of tea cheers it grub blatant, some dodgy chav william buggered my good sir owt to do with me the bee's knees bubble and squeak.",
  },
  {
    id: 10,
    headingNum: 'flush-headingFive',
    collapseNum: 'flush-collapseFive',
    title: 'Which plan should I choose?',
    desc: "Only a quid cor blimey guvnor jolly good brolly gutted mate cup of tea cheers it grub blatant, some dodgy chav william buggered my good sir owt to do with me the bee's knees bubble and squeak.",
  },
]

const FaqArea = () => {
  return (
    <>
      <section className="faq__area pb-110">
        <div className="container tp-container">
          <div className="row">
            <div className="col-lg-6">
              <div className="faq__tab-content">
                <div className="accordion" id="sale-accordion">

                  {
                    faqData.slice(0, 5).map(item => (
                      <div key={item.id} className="accordion-item">
                        <h2 className="accordion-header" id={item.headingNum}>
                          <button className={`accordion-button collapsed`} type="button" data-bs-toggle="collapse" data-bs-target={`#${item.collapseNum}`}
                            aria-expanded={item.expanded ? 'true' : 'false'} aria-controls={item.collapseNum}>
                            {item.title}
                          </button>
                        </h2>
                        <div id={item.collapseNum} className={`accordion-collapse collapse`} aria-labelledby={item.headingNum} data-bs-parent="#sale-accordion">
                          <div className="accordion-body">
                            <p>{item.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="faq__tab-content">
                <div className="accordion" id="template-accordion">
                  {
                    faqData.slice(5, 10).map(item => (
                      <div key={item.id} className="accordion-item">
                        <h2 className="accordion-header" id={item.headingNum}>
                          <button className={`accordion-button collapsed`} type="button" data-bs-toggle="collapse" data-bs-target={`#${item.collapseNum}`}
                            aria-expanded={item.expanded ? 'true' : 'false'} aria-controls={item.collapseNum}>
                            {item.title}
                          </button>
                        </h2>
                        <div id={item.collapseNum} className={`accordion-collapse collapse`} aria-labelledby={item.headingNum} data-bs-parent="#template-accordion">
                          <div className="accordion-body">
                            <p>{item.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqArea;
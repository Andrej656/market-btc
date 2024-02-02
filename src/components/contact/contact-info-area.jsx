const contactInfoData = [
  {id:1,icon:'assets/img/icon/contact/contact-1.png',text:'info@Bitakon.com',link:'mailto:info@Bitakon.com',title:'Mail'},
  {id:2,icon:'assets/img/icon/contact/contact-2.png',text:'Join Discord',class:'contact-discord',link:'#',title:'Support'},
  {id:3,icon:'assets/img/icon/contact/contact-3.png',text:'info@Bitakon.com',class:'contact-location',link:"https://www.google.com/maps/place/%E0%A6%A2%E0%A6%BE%E0%A6%95%E0%A6%BE/@23.7807777,90.3492857,12z/data=!3m1!4b1!4m5!3m4!1s0x3755b8b087026b81:0x8fa563bbdd5904c2!8m2!3d23.810332!4d90.4125181",title:'Office',
  text:'Pikk 33, Tallinn, Estonia',target:'_blank'},
]

const ContactInfoArea = () => {
  return (
    <>
       <section className="contact__info pb-70">
            <div className="container">
               <div className="contact__info-wrapper">
                  <div className="row justify-content-center">
                    {contactInfoData.map(item => (
                        <div key={item.id} className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                        <div className="contact__info-item d-flex align-items-center mb-50">
                           <div className={`contact__icon mr-15 ${item.class}`}>
                              <span>
                                 <img src={item.icon} alt=""/>
                              </span>
                           </div>
                           <div className="contact__text">
                              <p>{item.title}</p>
                              <h4><a href={item.link} target={item.target ? item.target : ''} >{item.text} </a></h4>
                           </div>
                        </div>
                     </div>
                    ))}
                  </div>
               </div>
            </div>
         </section>
    </>
  );
};

export default ContactInfoArea;
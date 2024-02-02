import NiceSelect from "../ui/NiceSelect";

const EditProfileArea = () => {
  const selectHandler = e => {

  }
  return (
    <>
      <section className="edit__profile pb-120">
        <div className="edit__profile ">
          <div className="container-fluid fix p-0">
            <div className="row">
              <div className="col-xxl-12">
                <div className="profile__cover-wrapper p-relative">
                  <div className="profile__cover w-img tp-img-cover">
                    <img src="assets/img/creator/creator-bg-2.jpg" alt="" />
                  </div>
                  <div className="profile__cover-edit">
                    <input id="profile-cover-input" className="cover-img-popup" type="file" />
                    <label htmlFor="profile-cover-input"><i className="fa-regular fa-pen-to-square"></i></label>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xxl-12">
                <div className="profile__thumb-wrapper  text-center">
                  <div className="profile__thumb text-center tp-img-profile d-inline-block p-relative">
                    <img src="assets/img/creator/user-1.jpg" alt="" />
                    <div className="profile__thumb-edit">
                      <input id="profile-thumb-input" className="profile-img-popup" type="file" />
                      <label htmlFor="profile-thumb-input"><i className="fa-regular fa-camera"></i></label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xxl-4 col-lg-4">
              <div className="profile__tab mr-40">
                <nav>
                  <div className="nav nav-tabs flex-column" id="profile-tab" role="tablist">
                    <button className="nav-link active" id="nav-information-tab" data-bs-toggle="tab" data-bs-target="#nav-information" type="button" role="tab" aria-controls="nav-information" aria-selected="false"><i className="fa-regular fa-user-pen"></i>Profile Information</button>

                    <button className="nav-link" id="nav-password-tab" data-bs-toggle="tab" data-bs-target="#nav-password" type="button" role="tab" aria-controls="nav-password" aria-selected="false"><i className="fa-regular fa-lock"></i>Change Password</button>

                    <button className="nav-link" id="nav-ticket-tab" data-bs-toggle="tab" data-bs-target="#nav-ticket" type="button" role="tab" aria-controls="nav-ticket" aria-selected="false"><i className="fa-regular fa-ticket"></i>My Tickets</button>

                    <button className="nav-link" id="nav-notification-tab" data-bs-toggle="tab" data-bs-target="#nav-notification" type="button" role="tab" aria-controls="nav-notification" aria-selected="false"><i className="fa-regular fa-bell"></i>Notification</button>
                  </div>
                </nav>
              </div>
            </div>
            <div className="col-xxl-8 col-lg-8">
              <div className="profile__tab-content">
                <div className="tab-content" id="profile-tabContent">
                  <div className="tab-pane fade show active" id="nav-information" role="tabpanel" aria-labelledby="nav-information-tab">
                    <div className="profile__info">
                      <h3 className="profile__info-title">Welcome Admin!</h3>
                      <div className="profile__info-content">
                        <form action="#">
                          <div className="row">
                      
                            <InputBox title="First Name" placeholder={'Enter first name'} defaultValue="Shahnewaz" icon={'fa-light fa-user'} />

                            <InputBox title="Last Name" placeholder={'Enter Last name'} defaultValue="Sakil" icon={'fa-light fa-user'} />

                            <InputBox col={'col-xxl-12'} type="email" title="Email" placeholder={'Enter Last Email'} defaultValue="example@mail.com" icon={'fa-light fa-envelope'} />

                            <InputBox title="Facebook" placeholder={'Enter username'} defaultValue="shahnewzname" icon={'fa-brands fa-facebook-f'} />

                            <InputBox title="Twitter" placeholder={'Enter username'} defaultValue="shahnewzname" icon={'fa-brands fa-twitter'} />

                            <InputBox title="Phone" placeholder={'Enter your number'} defaultValue="0123 456 7889" icon={'fa-light fa-phone'} />
        
              
                            <div className="col-xxl-6 col-md-6">
                              <div className="profile__input-box">
                                <h4>Gender</h4>
                                <div className="profile__input">

                                  <NiceSelect
                                    options={[
                                      { value: "Male", text: "Male" },
                                      { value: "Female", text: "Female" },
                                      { value: "Others", text: "Others" },
                                    ]}
                                    defaultCurrent={0}
                                    onChange={selectHandler}
                                    name="Male"
                                  />
                                </div>
                              </div>
                            </div>

                            <InputBox col={'col-xxl-12'} title="Address" placeholder={'Enter your address'} defaultValue="3304 Randall Drive" icon={'fa-solid fa-location-dot'} />

                            <InputBox title="City" placeholder={'Enter your City'} defaultValue="Honolulu" 
                            icon={'fa-light fa-city'} />

                            <div className="col-xxl-6 col-md-6">
                              <div className="profile__input-box">
                                <h4>Country</h4>
                                <div className="profile__input">

                                  <NiceSelect
                                    options={[
                                      { value: "America", text: "America" },
                                      { value: "Canada", text: "Canada" },
                                      { value: "London", text: "London" },
                                      { value: "China", text: "China" },
                                    ]}
                                    defaultCurrent={0}
                                    onChange={selectHandler}
                                    name="America"
                                  />

                                </div>
                              </div>
                            </div>
                            <div className="col-xxl-12">
                              <div className="profile__input-box">
                                <h4>Your Bio</h4>
                                <div className="profile__input">
                                  <textarea placeholder="Enter your bio" defaultValue={'Hi there, this is my bio...'}></textarea>
                                </div>
                              </div>
                            </div>
                            <div className="col-xxl-12">
                              <div className="profile__btn">
                                <button className="tp-btn-3">Update</button>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>

                  <div className="tab-pane fade" id="nav-password" role="tabpanel" aria-labelledby="nav-password-tab">
                    <div className="profile__password">
                      <form action="#">
                        <div className="row">

                        <InputBox col={'col-xxl-12'} title="Old Password" type="password" 
                        placeholder={'Enter old password'} />
                        <InputBox title="New Password" type="password" 
                        placeholder={'Enter New password'} />
                        <InputBox  title="Confirm Password" type="password" 
                        placeholder={'Enter Confirm password'} />

                          <div className="col-xxl-6 col-md-6">
                            <div className="profile__btn">
                              <button type="submit" className="tp-btn-3">Update</button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="nav-ticket" role="tabpanel" aria-labelledby="nav-ticket-tab">
                    <div className="profile__ticket table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th scope="col">Ticket</th>
                            <th scope="col">Topic</th>
                            <th scope="col">Status</th>
                            <th scope="col">View</th>
                          </tr>
                        </thead>
                        <tbody>
                          <TicketItem id="#2245" td_1={'How can i share ?'} td_2={'Pending'} />
                          <TicketItem id="#2220" td_1={'Send money, but not working'} 
                          td_2={'Need your replay'} />
                          <TicketItem id="#2125" td_1={'Balance error'} td_2={'Resolved'} />
                          <TicketItem id="#2124" td_1={'How to decline bid'} td_2={'Resolved'} />
                          <TicketItem id="#2121" td_1={'How to contact'} td_2={'Resolved'} />
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="nav-notification" role="tabpanel" aria-labelledby="nav-notification-tab">
                    <div className="profile__notification">
                      <div className="profile__notification-top mb-30">
                        <h3 className="profile__notification-title">My activity settings</h3>
                        <p>Stay up to date with notification on activity that involves you including mentions, messages, replies to your bids, new items, sale and administrative updates </p>
                      </div>
                      <div className="profile__notification-wrapper">

                        <ProfileNotification title={'Like & Follows Notifications'} id="like" />
                        <ProfileNotification title={'Post, Comments & Replies Notifications'} id="post" />
                        <ProfileNotification title={'New Bids Notifications'} id="new" />
                        <ProfileNotification title={'Bid on sale Notifications'} id="sale" />
                        <ProfileNotification title={'Payment Notifications'} id="payment" />

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EditProfileArea;
// input box 
const InputBox = ({col = 'col-xxl-6 col-md-6',title,type = 'text',placeholder,value,icon}) => {
  return (
    <div className={col}>
    <div className="profile__input-box">
      <h4>{title}</h4>
      <div className="profile__input">
        <input type={type} placeholder={placeholder} defaultValue={value && value} />
        {icon && <i className={icon}></i>}
      </div>
    </div>
  </div>
  )
}
// TicketItem
const TicketItem = ({id,td_1,td_2}) => {
  return (
    <tr>
      <th scope="row"> {id}</th>
      <td>{td_1}</td>
      <td>{td_2}</td>
      <td>
        <a href="#" className="link-btn">View <i className="fa-light fa-arrow-right-long"></i> </a>
      </td>
    </tr>
  )
}

// ProfileNotification
const ProfileNotification = ({ title, id }) => {
  return (
    <div className="profile__notification-item mb-20">
      <div className="form-check form-switch d-flex align-items-center">
        <input className="form-check-input" type="checkbox" role="switch" id={id} defaultChecked />
        <label className="form-check-label" htmlFor={id}>{title}</label>
      </div>
    </div>
  )
}
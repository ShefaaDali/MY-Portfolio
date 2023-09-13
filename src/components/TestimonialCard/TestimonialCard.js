import './TestimonialCard.css'
import Profile from '../../images/profile.png'

function TestimonialCard() {
  return (
    <div className='TestimonialCard'><div className='spacer'></div>
    <div className="card text-dark bg-light m-2 d-flex align-items-center p-2 rounded-3 ">
      <img src={Profile} className="rounded-circle personImage" alt='' />
      <div className='spacer'></div>
      <p className='personTitle mt-4'> <span>Bharat Kunal </span>- Manager at xyz </p>
      <p className='mx-3'>Working with Shefaa Dali was an absolute pleasure! Their dedication, creativity, and attention to detail truly impressed me. They took my project to the next level and delivered exceptional results on time. I highly recommend Shefaa Dali for any creative endeavor. Looking forward to collaborating again in the future!</p>
    </div></div>
  )
}

export default TestimonialCard
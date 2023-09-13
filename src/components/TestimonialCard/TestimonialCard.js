import './TestimonialCard.css'
function TestimonialCard({data}) {
  return (
    <div className='TestimonialCard'><div className='spacer'></div>
    <div className="card text-dark bg-light m-2 d-flex align-items-center p-2 rounded-3 ">
      <img src={data.image} className="rounded-circle personImage" alt='' />
      <div className='spacer'></div>
      <p className='personTitle mt-4'> <span>{data.name} </span>- {data.jobTitle} </p>
      <p className='mx-3'>{data.text}</p>
    </div></div>
  )
}

export default TestimonialCard
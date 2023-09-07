import './Project.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGithub } from "@fortawesome/free-brands-svg-icons";
import ImageSlider from '../ImageSlider/ImageSlider';
function Project({data}) {
  return (
  <div className={`card my-4 bg-light ProjectCard ${(data.id%2 ===0) ? "flex-lg-row" : "flex-lg-row-reverse"}`} >
  <ImageSlider id={data.id}images={data.images} className='col-lg-6'/>
  <div className="card-body col-lg-6">
    <h4 className="d-inline m-0 card-title">{data.title} </h4>
    <div className='Tags d-block'>{data.tags.map((e,index)=><span key={index} className="badge fw-semibold m-1">{e}</span>)}</div>
    <p className="CardDesciption ">{data.desciption}</p>
    <a href={data.github} className="btn text-light fs-5" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /> Repo  </a>
  </div>
</div>
  )
}

export default Project
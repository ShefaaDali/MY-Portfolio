import './Project.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGithub } from "@fortawesome/free-brands-svg-icons";
import ImageSlider from '../ImageSlider/ImageSlider';
function Project({data}) {
  return (
  <div className="col-md-6 ">
  <div className="card m-4 bg-light ProjectCard" >
  <ImageSlider id={data.id} images={data.images}/>
  <div className="card-body">
    <div className='card-title' >
    <h4 className="d-inline m-0">{data.title} </h4>
    </div>
    <div className='Tags d-block'>{data.tags.map((e,index)=><span key={index} className="badge fw-semibold m-1">{e}</span>)}</div>
   
    <p className="CardDesciption">{data.desciption}</p>
    <a href={data.github} class="btn btn-primary fs-5"><FontAwesomeIcon icon={faGithub} /> Repo  </a>

  </div>
</div>
  </div>
  )
}

export default Project
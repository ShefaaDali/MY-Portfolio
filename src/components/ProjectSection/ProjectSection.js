import './ProjectSection.css'
import Project from '../Project/Project';
import myProjects from '../../data';
function ProjectSection() {
  return (
    <div className='container Projects' id='Projects'>
    <h1 className='text-center mb-4'  >Projects</h1>
    <div className="row d-flex justify-content-center">
    {
      myProjects.map((e,index)=><Project key={index} data={e}/>)
    } 
</div>
    </div>
  )
}
export default ProjectSection;
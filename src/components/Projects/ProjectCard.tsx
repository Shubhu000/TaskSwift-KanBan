import ProjectCTA from "./ProjectCTA";
import { ProjectCardInterface } from "../../interface/ProjectCat.interface";

const ProjectCard = ({ project, key }: ProjectCardInterface) => {
  return (
    <div
      key={key}
      className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <div className="flex justify-end px-4 pt-4">
        <button
          id="dropdownButton"
          data-dropdown-toggle="dropdown"
          className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
          type="button"
        >
          {/* <ProjectCTA
            handleEditProjectClick={handleEditProjectClick}
            setShowEditModal={setShowEditModal}
            project={project}
            confirmDialog={confirmDialog}
            setConfirmDialog={setConfirmDialog}
            deleteProject={deleteProject}
          /> */}
          <ProjectCTA project={project} />
        </button>
      </div>
      <div className="flex flex-col items-center pb-10">
        <img
          className="w-16 h-16 mb-3 rounded-full shadow-lg"
          src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
          alt="Bonnie image"
        />
        <h5 className="text-xl font-medium text-gray-900 dark:text-white">
          {project?.title}
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {project?.members?.length
            ? `${project?.members?.length} member(s)`
            : `0 members`}
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {`Owner: ${project.owner}`}
        </span>
        {/* <div className="flex mt-4 space-x-3 md:mt-6">
          <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add friend</a>
          <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Message</a>
      </div> */}
      </div>
    </div>
  );
};

export default ProjectCard;

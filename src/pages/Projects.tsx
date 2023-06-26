import React, { useState } from "react";
import ProjectCard from "../components/Projects/ProjectCard";
import { projects } from "../constant/projects";
import AddProject from "../components/Modals/AddProject";

const Projects = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  return (
    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 px-4  pt-[100px]">
      <div className="flex flex-col">
        <div className="-mb-2 py-4 flex flex-wrap flex-grow justify-between">
          <div className="flex items-center py-2">
            <h3 className="font-bold text-2xl text-gray-800">Projects</h3>
          </div>
          <div className="flex items-center py-2">
            <button
              onClick={() => setShowAddModal(true)}
              className="inline-block px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-[#0b3470] focus:outline-none focus:shadow-outline"
            >
              Create New Project
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 justify-center content-center gap-6 mb-6">
        {/* {projects.map((project, index) => {
          return (
            <ProjectCard
              project={project}
              handleEditProjectClick={handleEditProjectClick}
              key={index}
              setShowEditModal={setShowEditModal}
              confirmDialog={confirmDialog}
              setConfirmDialog={setConfirmDialog}
              deleteProject={deleteProject}
            />
          );
        })} */}
        {projects.map((project, index) => (
          <ProjectCard project={project} key={index} />
        ))}
      </div>
      {showAddModal && <AddProject setShowAddModal={setShowAddModal} />}
      {/* {showAddModal ? (
        <AddProjectModal
          setShowAddModal={setShowAddModal}
          getProjects={getProjects}
          employeesOptions={employeesOptions}
        />
      ) : (
        <></>
      )} */}
      {/* {showEditModal ? (
        <EditProjectModal
          editProjectData={editProjectData}
          setEditProjectData={setEditProjectData}
          setShowEditModal={setShowEditModal}
          getProjects={getProjects}
          employeesOptions={employeesOptions}
        />
      ) : (
        <></>
      )} */}
      {/* {confirmDialog.isOpen ? (
        <DeleteProjectModal
          confirmDialog={confirmDialog}
          setConfirmDialog={setConfirmDialog}
        />
      ) : (
        <></>
      )} */}
    </div>
  );
};

export default Projects;

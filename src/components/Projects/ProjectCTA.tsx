import React from "react";

const ProjectCTA = ({ project }: any) => {
  return (
    <>
      <a
        className="text-blueGray-500 block"
        href="#pablo"
        //   ref={btnDropdownRef}
        //   onClick={(e) => {
        //     e.preventDefault();
        //     dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        //   }}
      >
        <div className="items-center flex">
          <span className="sr-only">Open dropdown</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
          </svg>
        </div>
      </a>
      <div
        // ref={popoverDropdownRef}
        className={
          //   (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48 user-dropdown"
        }
      >
        <span
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          //   onClick={() => {
          //     dropdownPopoverShow
          //       ? closeDropdownPopover()
          //       : openDropdownPopover();
          //     navigate(`/tasks/${project.projectId}`);
          //   }}
        >
          View Project
        </span>
        <span
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          //   onClick={() => {
          //     dropdownPopoverShow
          //       ? closeDropdownPopover()
          //       : openDropdownPopover();
          //     handleEditProjectClick(project);
          //     setShowEditModal(true);
          //   }}
        >
          Edit Project
        </span>
        <a
          href="#pablo"
          className={
            "text-sm text-red-400 py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          //   onClick={(e) => {
          //     dropdownPopoverShow
          //       ? closeDropdownPopover()
          //       : openDropdownPopover();
          //     setConfirmDialog({
          //       isOpen: true,
          //       title: "Are you sure?",
          //       subTitle: "This operation cannot be undo",
          //       onConfirm: () => {
          //         deleteProject(project.projectId);
          //       },
          //     });
          //   }}
        >
          Delete Project
        </a>
      </div>
    </>
  );
};

export default ProjectCTA;

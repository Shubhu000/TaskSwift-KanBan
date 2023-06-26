import React from "react";
import Select from "react-select";

const AddProject = ({ setShowAddModal }: any) => {
  return (
    <div className="fixed z-10 overflow-y-auto top-0 w-full left-0">
      <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-900 opacity-75" />
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
          &#8203;
        </span>
        <div className="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <form
            className="mb-4 p-5"
            //   onSubmit={handleAddProject}
          >
            <div className="mb-4 md:w-full">
              <label className="block text-xs mb-1">Project Title</label>
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="text"
                name="title"
                id="title"
                placeholder="Project Title"
                // onChange={(e) =>
                //   setProjectData({ ...projectData, title: e.target.value })
                // }
                required
              />
            </div>

            <div className="mb-4 md:w-full">
              <label className="block text-xs mb-1">Project Description</label>
              <textarea
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                id="description"
                name="description"
                rows={3}
                placeholder="Write some details about project"
                maxLength={150}
                // onChange={(e) =>
                //   setProjectData({
                //     ...projectData,
                //     description: e.target.value,
                //   })
                // }
              ></textarea>
            </div>

            <div className="mb-4 md:w-full">
              <label className="block text-xs mb-1">Add Members</label>
              <Select
                defaultValue={[]}
                isMulti
                name="members"
                // options={employeesOptions}
                className="basic-multi-select"
                classNamePrefix="select"
                // onChange={(e) => {
                //   setProjectData({ ...projectData, members: e });
                // }}
              />
            </div>

            <div
              className="mb-4 md:w-full"
              data-te-datepicker-init
              data-te-input-wrapper-init
            >
              <label className="block text-xs mb-1">Start Date</label>
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="date"
                name="startDate"
                id="startDate"
                placeholder="Start Date"
                // onChange={(e) =>
                //   setProjectData({ ...projectData, startDate: e.target.value })
                // }
                required
              />
            </div>

            <div
              className="mb-4 md:w-full"
              data-te-datepicker-init
              data-te-input-wrapper-init
            >
              <label className="block text-xs mb-1">Due Date</label>
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="date"
                name="endDate"
                id="endDate"
                placeholder="Due Date"
                // onChange={(e) =>
                //   setProjectData({ ...projectData, endDate: e.target.value })
                // }
                required
              />
            </div>

            <div className="flex items-center gap-3 mt-10">
              <button
                type="submit"
                className="bg-[#0b3470] text-white uppercase text-sm font-semibold px-4 py-2 rounded"
              >
                Add
              </button>
              <button
                type="reset"
                className="bg-[#0b3470] text-white uppercase text-sm font-semibold px-4 py-2 rounded"
                onClick={() => setShowAddModal(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProject;

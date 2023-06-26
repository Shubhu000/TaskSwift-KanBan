import React from "react";

const AddEmployee = ({ setShow, handleClose }: any) => {
  console.log("1");
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
            // onSubmit={handleAddEmployee}
          >
            <div className="mb-4 md:w-full">
              <label className="block text-xs mb-1">First Name</label>
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="text"
                name="firstname"
                id="firstname"
                placeholder="First Name"
                // onChange={(e) =>
                //   setNewEmployee({ ...newEmployee, firstName: e.target.value })
                // }
                required
              />
            </div>

            <div className="mb-4 md:w-full">
              <label className="block text-xs mb-1">Last Name</label>
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="text"
                name="lastname"
                id="lastname"
                placeholder="Last Name"
                // onChange={(e) =>
                //   setNewEmployee({ ...newEmployee, lastName: e.target.value })
                // }
                required
              />
            </div>

            <div className="mb-4 md:w-full">
              <label className="block text-xs mb-1">Email</label>
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                // onChange={(e) =>
                //   setNewEmployee({ ...newEmployee, email: e.target.value })
                // }
                required
              />
            </div>
            <div className="mb-6 md:w-full">
              <label className="block text-xs mb-1">Password</label>
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                // onChange={(e) =>
                //   setNewEmployee({ ...newEmployee, password: e.target.value })
                // }
              />
            </div>

            <div className="mb-4 md:w-full">
              <label className="block text-xs mb-1">Position</label>
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="text"
                name="position"
                id="position"
                placeholder="Position"
                // onChange={(e) =>
                //   setNewEmployee({ ...newEmployee, position: e.target.value })
                // }
                required
              />
            </div>

            <div className="mb-4 md:w-full">
              <label className="block text-xs mb-1">Select Role</label>
              <select
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                // onChange={(e) =>
                //   setNewEmployee({ ...newEmployee, role: e.target.value })
                // }
                required
              >
                <option selected disabled hidden value="">
                  Select Role
                </option>
                <option value="admin">Admin</option>
                <option value="employee">Employee</option>
              </select>
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
                onClick={handleClose}
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

export default AddEmployee;

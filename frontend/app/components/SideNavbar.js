"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFolder,
  faFolderOpen,
  faFile,
  faFileAlt,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

export default function SideNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSystemsOpen, setIsSystemsOpen] = useState(false);
  const [isUsersGroupOpen, setIsUsersGroupOpen] = useState(false);
  const [isCompetitionOpen, setIsCompetitionOpen] = useState(false);
  const [selectedFileName, setSelectedFileName] = useState("");
  const [activeMenu, setActiveMenu] = useState(""); // State for active menu

  const handleFileSelect = (file, menu) => {
    setSelectedFileName(file);
    setActiveMenu(menu); // Set the active menu
  };

  return (
    <div className="flex relative">
      <div
        className={`fixed top-4 left-0 h-[calc(100%-2rem)] bg-custom-bg p-4 transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:w-84 rounded-3xl shadow-lg z-20`}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-white text-2xl font-semibold">Menu</h2>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-xl focus:outline-none"
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>

        <nav className="space-y-4">
          {/* Systems Menu with Collapsible Submenu */}
          <div>
            <button
              className="text-gray-300 hover:bg-gray-700 p-2 block rounded w-full text-left flex items-center"
              onClick={() => setIsSystemsOpen(!isSystemsOpen)}
            >
              <FontAwesomeIcon
                icon={isSystemsOpen ? faFolderOpen : faFolder}
                className="w-6 h-6 mr-2"
              />
              Systems
            </button>
            {isSystemsOpen && (
              <div className="ml-8 space-y-2">
                <a
                  href="#system-code"
                  className={`p-2 block rounded flex items-center ${
                    activeMenu === "Systems: System Code"
                      ? "bg-[rgb(160,241,70)] text-black"
                      : "text-gray-300 hover:bg-gray-700"
                  }`}
                  onClick={() => handleFileSelect("System Code", "Systems: System Code")}
                >
                  <FontAwesomeIcon icon={faFile} className="w-4 h-4 mr-2" />
                  System Code
                </a>
                <a
                  href="#properties"
                  className={`p-2 block rounded flex items-center ${
                    activeMenu === "Systems: Properties"
                      ? "bg-[rgb(160,241,70)] text-black"
                      : "text-gray-300 hover:bg-gray-700"
                  }`}
                  onClick={() => handleFileSelect("Properties", "Systems: Properties")}
                >
                  <FontAwesomeIcon icon={faFileAlt} className="w-4 h-4 mr-2" />
                  Properties
                </a>
                <a
                  href="#menus"
                  className={`p-2 block rounded flex items-center ${
                    activeMenu === "Systems: Menus"
                      ? "bg-[rgb(160,241,70)] text-black"
                      : "text-gray-300 hover:bg-gray-700"
                  }`}
                  onClick={() => handleFileSelect("Menus", "Systems: Menus")}
                >
                  <FontAwesomeIcon icon={faFile} className="w-4 h-4 mr-2" />
                  Menus
                </a>
                <a
                  href="#api-list"
                  className={`p-2 block rounded flex items-center ${
                    activeMenu === "Systems: API List"
                      ? "bg-[rgb(160,241,70)] text-black"
                      : "text-gray-300 hover:bg-gray-700"
                  }`}
                  onClick={() => handleFileSelect("API List", "Systems: API List")}
                >
                  <FontAwesomeIcon icon={faFileAlt} className="w-4 h-4 mr-2" />
                  API List
                </a>
              </div>
            )}
          </div>

          {/* Users & Group Menu with Collapsible Submenu */}
          <div>
            <button
              className="text-gray-300 hover:bg-gray-700 p-2 block rounded w-full text-left flex items-center"
              onClick={() => setIsUsersGroupOpen(!isUsersGroupOpen)}
            >
              <FontAwesomeIcon
                icon={isUsersGroupOpen ? faFolderOpen : faFolder}
                className="w-6 h-6 mr-2"
              />
              Users & Group
            </button>
            {isUsersGroupOpen && (
              <div className="ml-8 space-y-2">
                <a
                  href="#user-list"
                  className={`p-2 block rounded ${
                    activeMenu === "Users & Group: User List"
                      ? "bg-[rgb(160,241,70)] text-black"
                      : "text-gray-300 hover:bg-gray-700"
                  }`}
                  onClick={() => handleFileSelect("User List", "Users & Group: User List")}
                >
                  User List
                </a>
                <a
                  href="#group-list"
                  className={`p-2 block rounded ${
                    activeMenu === "Users & Group: Group List"
                      ? "bg-[rgb(160,241,70)] text-black"
                      : "text-gray-300 hover:bg-gray-700"
                  }`}
                  onClick={() => handleFileSelect("Group List", "Users & Group: Group List")}
                >
                  Group List
                </a>
              </div>
            )}
          </div>

          {/* Competition Menu with Collapsible Submenu */}
          <div>
            <button
              className="text-gray-300 hover:bg-gray-700 p-2 block rounded w-full text-left flex items-center"
              onClick={() => setIsCompetitionOpen(!isCompetitionOpen)}
            >
              <FontAwesomeIcon
                icon={isCompetitionOpen ? faFolderOpen : faFolder}
                className="w-6 h-6 mr-2"
              />
              Competition
            </button>
            {isCompetitionOpen && (
              <div className="ml-8 space-y-2">
                <a
                  href="#competition-list"
                  className={`p-2 block rounded ${
                    activeMenu === "Competition: Competition List"
                      ? "bg-[rgb(160,241,70)] text-black"
                      : "text-gray-300 hover:bg-gray-700"
                  }`}
                  onClick={() => handleFileSelect("Competition List", "Competition: Competition List")}
                >
                  Competition List
                </a>
                <a
                  href="#competition-entries"
                  className={`p-2 block rounded ${
                    activeMenu === "Competition: Competition Entries"
                      ? "bg-[rgb(160,241,70)] text-black"
                      : "text-gray-300 hover:bg-gray-700"
                  }`}
                  onClick={() => handleFileSelect("Competition Entries", "Competition: Competition Entries")}
                >
                  Competition Entries
                </a>
              </div>
            )}
          </div>
        </nav>
      </div>

      <div
        className={`flex-1 ml-0 ${isOpen ? "md:ml-84" : "md:ml-0"} p-4 relative`}
      >
        {!isOpen && (
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden bg-custom-bg text-white px-4 py-2 rounded fixed top-4 left-4 z-30"
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        )}

        {/* Display selected file name and folder icon even when navbar is closed in mobile mode, moved lower */}
        <div className={`flex items-center mt-12 ${!isOpen ? "block" : "hidden"}`}>
          <FontAwesomeIcon icon={faFolder} className="w-5 h-5 mr-2" />
          {selectedFileName ? (
            <span className="text-black">/ {selectedFileName}</span>
          ) : (
            <span className="text-black"></span>
          )}
        </div>

        <div className="content">
          <h1 className="text-3xl font-bold">Welcome to the Dashboard</h1>
          <p className="mt-4">
            Here you can add your main page content. Resize the window to see the responsive sidebar.
          </p>
        </div>
      </div>
    </div>
  );
}

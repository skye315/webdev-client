
"use client";

import { useState } from "react";
import ModuleEditor from "./ModuleEditor";

export default function ModulesControls() {
  const [show, setShow] = useState(false);
  const [moduleName, setModuleName] = useState("");

  const handleClose = () => setShow(false);

  const addModule = () => {
    // We'll connect this to the module store if this component
    // is the one used by your Modules page.
  };

  return (
    <div
      id="wd-modules-controls"
      className="mb-3 flex flex-wrap items-center gap-2"
    >
      <button
        type="button"
        className="rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm"
      >
        Collapse All
      </button>

      <button
        type="button"
        className="rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm"
      >
        View Progress
      </button>

      <select
        defaultValue="publish-all"
        className="rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm"
      >
        <option value="publish-all">Publish All</option>
        <option value="unpublish-all">Unpublish All</option>
      </select>

      <button
        type="button"
        onClick={() => setShow(true)}
        className="rounded bg-red-600 px-3 py-1.5 text-sm text-white"
      >
        + Module
      </button>

      <ModuleEditor
        show={show}
        handleClose={handleClose}
        moduleName={moduleName}
        setModuleName={setModuleName}
        addModule={addModule}
      />
    </div>
  );
}

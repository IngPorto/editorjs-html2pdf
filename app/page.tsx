"use client";

import React from "react";
import { MenuOptions } from "../components/MenuOptions";
import { TextEditor } from "../components/TextEditor";
import { SavedProjectsPanel } from "../components/SavedProjectsPanel";

export default function Page() {

  return (
    <div>
      <MenuOptions />
      <div className="grid grid-cols-3 gap-4">
        <TextEditor />
        <SavedProjectsPanel />
      </div>
    </div>
  );
}

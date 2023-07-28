import React, { useEffect, useState } from "react";
import { createReactEditorJS } from "react-editor-js";
import {
  EDITOR_JS_TOOLS,
  defaultValues,
} from "../../data/components/TextEditor/constants";
import { useContentStore } from "../../store/config";
import { shallow } from "zustand/shallow";

const ReactEditorJS = createReactEditorJS();

export default function TextEditor() {
  const [stateContent, stateContentUpdate] = useContentStore(
    (state) => [state.content, state.updatecontent],
    shallow
  );

  useEffect(() => {
    if (stateContent) {
      console.log("stateContent ", stateContent);
    }
  }, [stateContent]);

  const handleOnChange = (api) => {
    api.saver.save().then((data) => {
      stateContentUpdate(data);
    });
  };

  return (
    <div className="col-span-2 p-4 border rounded-l">
      <p className="font-semibold">Área de edición</p>
      <div>
        {
          <ReactEditorJS
            tools={EDITOR_JS_TOOLS}
            defaultValue={defaultValues}
            onChange={handleOnChange}
          />
        }
      </div>
    </div>
  );
}

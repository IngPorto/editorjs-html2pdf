import { create } from "zustand";
import edjsHTML from "editorjs-html";
import { defaultValues } from "../data/components/TextEditor/constants";

const edjsParser = edjsHTML();

type State = {
  content: any;
  contentFormatted: string[];
};

type Action = {
  updatecontent: (content: State["content"]) => void;
};

;

export const useContentStore = create<State & Action>((set) => ({
  content: { content: "información por defecto" },
  contentFormatted: edjsParser.parse(defaultValues),
  updatecontent: (newContent) =>
    set((state) => {
      const html = edjsParser.parse(newContent);
      return { content: newContent, contentFormatted: html };
    }),
}));

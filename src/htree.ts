import type { HTMLAttributeNames, HTMLTagNames } from "./types";
export type HTMLAttributeType = Partial<
  Record<HTMLAttributeNames, string | string[]>
>;
export type HText = {
  type: "text";
  value: string;
};
export type HComment = {
  type: "comment";
  value: string;
};
export type HElement = {
  type: "element";
  tagName: HTMLTagNames;
  attributes?: HTMLAttributeType;
  children?: HElementContent[];
};
export type HRoot = {
  type: "root";
  children: HRootContent[];
};
export type HElementContent = HText | HComment | HElement;
export type HRootContent = HText | HComment | HElement | HRoot;
export type HNode = HText | HComment | HElement | HRoot;
export type HParent = HElement | HRoot;

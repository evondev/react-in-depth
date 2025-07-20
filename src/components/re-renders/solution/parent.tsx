import { useState } from "react";

export interface ParentProps {
  content: React.ReactNode;
}

export default function Parent({ content }: ParentProps) {
  const [counter, setCounter] = useState(0);
  return content;
}
/**
 * {type: Child}
 * Object.is
 */

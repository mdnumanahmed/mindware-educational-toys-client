import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `Mindware | ${title}`
  }, [title]);
};

export default useTitle

import React from 'react';
import {
    
    Link,
    useMatch,
    useResolvedPath,
  } from "react-router-dom";

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
      <div>
        <Link
          style={{ color: match ? "blue" : "#010101" }}
          to={to}
          {...props}
        >
          {children}
        </Link>
        {match && ""}
        {/* {match && " (active)"} */}
      </div>
    );
  }
export default CustomLink;
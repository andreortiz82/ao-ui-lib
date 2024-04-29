import React from "react";
import Breadcrumbs from "./Breadcrumbs";
import Link from "../Link/Link";

export default {
  title: "Atoms/Breadcrumbs",
  component: Breadcrumbs,
  tags: ["autodocs"],
};
export const Example = {
  args: {
    separator: <div>{"----"}</div>,
    ariaLabel: "breadcrumbs",
    children: (
      <>
        {["Home", "TV Shows", "Futurama", "Characters"].map((item) => (
          <Link key={item} color="neutral" href="#basics">
            {item}
          </Link>
        ))}
        Dr. Zoidberg
      </>
    ),
  },
};

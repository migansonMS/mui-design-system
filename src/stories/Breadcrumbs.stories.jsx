import React from "react";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import NavigateNext from "@mui/icons-material/NavigateNext";

export default {
  title: "Navigation/Breadcrumbs",
  component: Breadcrumbs,
  parameters: { layout: "centered" },
};

export const Basic = () => (
  <Breadcrumbs
    variant="breadcrumbs"
    aria-label="breadcrumb"
    separator={<NavigateNext fontSize="small" />}
  >
    <Link data-variant="crumb" href="#/">
      Home
    </Link>
    <Link data-variant="crumb" href="#/accounts/management">
      Manage Accounts Assignment
    </Link>
    <Typography color="text.primary">My Account</Typography>
  </Breadcrumbs>
);

export const LongPathCollapsed = () => (
  <Breadcrumbs
    variant="breadcrumbs"
    aria-label="breadcrumb"
    maxItems={3}
    itemsBeforeCollapse={1}
    itemsAfterCollapse={1}
    separator={<NavigateNext fontSize="small" />}
  >
    <Link data-variant="crumb" href="#/">
      Home
    </Link>
    <Link data-variant="crumb" href="#/admin">
      Admin
    </Link>
    <Link data-variant="crumb" href="#/admin/users">
      Users
    </Link>
    <Link data-variant="crumb" href="#/admin/users/123">
      Profiles
    </Link>
    <Link data-variant="crumb">Details</Link>
  </Breadcrumbs>
);

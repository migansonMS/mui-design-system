import React from "react";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import NavigateNext from "@mui/icons-material/NavigateNext";

export default {
  title: "Navigation/Breadcrumbs",
  component: Breadcrumbs,
  parameters: { layout: "centered" },
};

export const Basic = () => (
  <Breadcrumbs variant="breadcrumbs" aria-label="breadcrumb">
    <Link href="#/">Home</Link>
    <Link href="#/accounts/management">Manage Accounts Assignment</Link>
    <Link aria-current="page">My Account</Link>
  </Breadcrumbs>
);

export const WithIconSeparator = () => (
  <Breadcrumbs
    variant="breadcrumbs"
    aria-label="breadcrumb"
    separator={<NavigateNext fontSize="small" />}
  >
    <Link href="#/">Home</Link>
    <Link href="#/accounts/management">Manage Accounts Assignment</Link>
    <Link aria-current="page">Jenny Smith (12345)</Link>
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
    <Link href="#/">Home</Link>
    <Link href="#/admin">Admin</Link>
    <Link href="#/admin/users">Users</Link>
    <Link href="#/admin/users/123">Profiles</Link>
    <Link aria-current="page">Details</Link>
  </Breadcrumbs>
);

export const LastAsTypography = () => (
  <Breadcrumbs
    variant="breadcrumbs"
    aria-label="breadcrumb"
    separator={<NavigateNext fontSize="small" />}
  >
    <Link href="#/">Home</Link>
    <Link href="#/accounts/management">Manage Accounts Assignment</Link>
    <Typography color="text.primary">My Account</Typography>
  </Breadcrumbs>
);

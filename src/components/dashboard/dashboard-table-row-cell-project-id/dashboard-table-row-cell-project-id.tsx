/*
 * The AnVIL
 * https://www.anvilproject.org
 *
 * The AnVIL - dashboard table row cell project id component.
 * Renders projectId property from workspaces.
 */

// Core dependencies
import React from "react";

// Styles
import compStyles from "./dashboard-table-row-cell-project-id.module.css";

interface DashboardTableRowCellProjectIdProps {
  children: string;
  id: string;
}

function DashboardTableRowCellProjectId(
  props: DashboardTableRowCellProjectIdProps
) {
  const { children, id } = props;
  const href = `https://anvil.terra.bio/#workspaces/anvil-datastorage/${children}`;

  return (
    <td className={compStyles.projectId} id={id}>
      <a href={href} rel="noreferrer" target="_blank">
        {children}
      </a>
    </td>
  );
}

export default DashboardTableRowCellProjectId;
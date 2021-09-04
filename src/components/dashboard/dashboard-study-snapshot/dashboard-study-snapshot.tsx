/*
 * The AnVIL
 * https://www.anvilproject.org
 *
 * The AnVIL - dashboard study snapshot component.
 */

// Core dependencies
import React from "react";

// App dependencies
import DashboardStudyStats, {
  IStat,
} from "../dashboard-study-stats/dashboard-study-stats";
import DashboardStudySummary, {
  IStudySummary,
} from "../dashboard-study-summmary/dashboard-study-summary";

// Styles
import compStyles from "./dashboard-study-snapshot.module.css";

interface DashboardStudySnapshotProps {
  studyStat: IStat;
  studySummary: IStudySummary;
}

function DashboardStudySnapshot(
  props: DashboardStudySnapshotProps
): JSX.Element {
  const { studyStat, studySummary } = props;

  return (
    <div className={compStyles.studySnapshot}>
      {studyStat ? <DashboardStudyStats studyStat={studyStat} /> : null}
      <DashboardStudySummary studySummary={studySummary} />
    </div>
  );
}

export default DashboardStudySnapshot;
import React from "react";
import ContestTile from "./ContestTile";

const ContestList = ({ contests, updateContestStatus }) => {
  return (
    <>
      {contests.map((contest) => (
        <ContestTile
          contest={contest}
          key={contest.id}
          updateContestStatus={updateContestStatus}
        />
      ))}
    </>
  );
};

export default ContestList;

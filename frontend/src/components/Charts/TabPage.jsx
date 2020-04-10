import React, { useState } from "react";
import { Paper, Tabs, Tab } from "@material-ui/core";
import TabPanel from "./TabPanel";
import LottoChart from "./LottoChart";

function TabPage() {
  const [tabState, setTabState] = useState(0);

  function handleChange(event, newValue) {
    setTabState(newValue);
  }

  return (
    <Paper className="m-1 mt-5 mb-5" elevation={5}>
      <Tabs
        className="row m-0 p-0 col-12"
        value={tabState}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab className="col-4" label="Regular Number Rating" />
        <Tab className="col-4" label="Mega Number Rating" />
      </Tabs>

      <TabPanel value={tabState} index={0}>
        <LottoChart
          link="/getregulardata"
          title="Regular Number Rating"
          backgroundColor="rgba(255,0,0,0.3)"
        />
      </TabPanel>
      <TabPanel value={tabState} index={1}>
        <LottoChart
          link="/getmegadata"
          title="Mega Number Rating"
          backgroundColor="rgba(0,255,0,0.3)"
        />
      </TabPanel>
    </Paper>
  );
}

export default TabPage;

import React, { useState } from "react";
import { Paper, Tabs, Tab } from "@material-ui/core";
import TabPanel from "./util/TabPanel";
import LottoChart from "./Charts/LottoChart";
import Piechart from "./Charts/PieChart";


function TabPage() {
  const [tabState, setTabState] = useState(0);

  function handleChange(event, newValue) {
    setTabState(newValue);
  }

  return (
    <Paper className="mt-5 mb-5 mx-auto" elevation={5}>
      <Tabs
        className="row p-0 m-0 col-12"
        value={tabState}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab className="col-3" label="Regular Number by Appearance(Bar)" />
        <Tab className="col-3" label="Mega Number by Appearance(Bar)" />
        <Tab className="col-3" label="Regular Number by Appearance(Pie)" />
        <Tab className="col-3" label="Mega Number by Appearance(Pie)" />
      </Tabs>

      <TabPanel value={tabState} index={0}>
        <LottoChart
          link="/getregulardata"
          title="Regular Number by Appearance(Bar)"
          backgroundColor="rgba(255,0,0,0.3)"
        />
      </TabPanel>
      <TabPanel value={tabState} index={1}>
        <LottoChart
          link="/getmegadata"
          title="Mega Number by Appearance(Bar)"
          backgroundColor="rgba(0,255,0,0.3)"
        />
      </TabPanel>
      <TabPanel value={tabState} index={2}>
        <Piechart
           link="/getregulardata"
           title="Regular Number by Appearance(Pie)"
           
        />
      </TabPanel>
      <TabPanel value={tabState} index={3}>
        <Piechart
          link="/getmegadata"
          title="Mega Number by Appearance(Pie)"
         
        />
      </TabPanel>
    </Paper>
  );
}

export default TabPage;

import React, {useState} from "react";
import {Paper, Tabs, Tab} from "@material-ui/core"; 

function TabBar (){
const [tabState, setTabState] = useState(0);

function handleChange (event, newValue) { 
    setTabState(newValue);

}
return <Paper>
<Tabs
value={tabState}
onChange={handleChange}
indicatorColor="primary"
textColor="primary"
centered
>
<Tab label ="Regular Number Rank"/>
<Tab label ="Winning Amout by Date"/>
<Tab label ="Mega Number Rank"/>
</Tabs>

</Paper>


}

export default TabBar;
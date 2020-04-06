import React, {useState} from "react";
import {Paper, Tabs, Tab} from "@material-ui/core"; 

function TabBar (){
const [tabState, setTabState] = useState(0);

function handleChange (event, newValue) { 
    setTabState(newValue);

}
return <Paper >
<Tabs
className="row m-0 p-0 col-12"
value={tabState}
onChange={handleChange}
indicatorColor="primary"
textColor="primary"
centered
>
<Tab className="col-4" label ="Regular Number Rank"/>
<Tab className="col-4" label ="Winning Amout by Date"/>
<Tab className="col-4" label ="Mega Number Rank"/>
</Tabs>

</Paper>


}

export default TabBar;
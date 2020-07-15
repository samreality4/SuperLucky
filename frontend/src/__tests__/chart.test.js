import React from 'react';
import ReactDom from 'react-dom';
import LottoChart from "../components/Charts/LottoChart";

it('check if it avaiable', () => {
    const div = document.createElement("div");
    ReactDom.render(<LottoChart/>, div);
});

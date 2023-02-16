import React from "react";

import "./App.css";

const Tabs = ({ tab, setTab }) => {
	const tabList = ["Graph", "Grid", "Node", "Edge"];
	return (
		<ul className="tabs">
			{tabList.map((tabItem) => (
				<li key={tabItem} className={tab === tabItem ? "active" : ""} onClick={() => setTab(tabItem)}>{tabItem}</li>
			))}
		</ul>
	);
};

export default Tabs;

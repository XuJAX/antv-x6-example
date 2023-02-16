import React, { useCallback, useEffect, useMemo, useRef } from "react";
import init from "./init";
import { EdgeConfig, GraphConfig, GridConfig, NodeConfig, NodeList } from "./Panel";

import "./App.css";

const X6 = ({ tab }) => {
	const graph = useRef({});
	const data = useMemo(
		() => ({
			nodes: [
				{
					id: "node1",
					x: 40,
					y: 50,
					width: 80,
					height: 80,
					label: "hello",
				},
				{
					id: "node2",
					x: 160,
					y: 180,
					width: 80,
					height: 40,
					label: "world",
				},
			],
			edges: [
				{
					source: "node1",
					target: "node2",
					connector: 'rounded',
				},
			],
		}),
		[]
	);

	const pageInit = useCallback(() => {
		graph.current = init();
		graph.current.fromJSON(data);
	}, [data]);

	useEffect(() => {
		pageInit();
	}, [data]);

	return (
		<div className="content">
			{["Node", "Edge"].includes(tab) && <NodeList graph={graph} />}
			<div id="container"></div>
			<div className="config-panel">
				{tab === "Graph" && <GraphConfig graph={graph} />}
				{tab === "Grid" && <GridConfig graph={graph} />}
				{tab === "Node" && <NodeConfig graph={graph} />}
				{tab === "Edge" && <EdgeConfig graph={graph} />}
			</div>
		</div>
	);
};

export default X6;

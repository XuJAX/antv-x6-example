import React from "react";
import { Addon } from "@antv/x6";
// import { Dnd } from "@antv/x6/lib/addon";
import {
	circleNode,
	ellipseNode,
	imageNode,
	nodes,
	polygonNode,
	rectNode,
} from "./config";

import "../../App.css";

const { Dnd } = Addon;

const NodeList = ({ graph }) => {
	const dnd = new Dnd({
		target: graph.current,
		scaled: false,
		animation: true,
		validateNode(droppingNode, options) {
			console.log(droppingNode, options);
			return true;
		},
	});

	const startDrag = (e, item) => {
		let node = {};
		const {nodeType, nodeName} = item?.data;
		if (nodeType === "RECT") {
			const _rectNode = rectNode();
			node = graph.current.createNode(_rectNode);
		} else if (nodeType === "CIRCLE") {
			const _circleNode = circleNode();
			node = graph.current.createNode(_circleNode);
		} else if (nodeType === "ELLIPSE") {
			const _ellipseNode = ellipseNode();
			node = graph.current.createNode(_ellipseNode);
		} else if (nodeType === "POLYGON") {
			const _polygonNode = polygonNode();
			node = graph.current.createNode(_polygonNode);
		} else if (nodeType === "IMAGE") {
			const _imageNode = imageNode();
			node = graph.current.createNode(_imageNode);
		}
		node.setData(item?.data || {});
    node.attr('label/text', nodeName);
		dnd.start(node, e.nativeEvent);
	};

	return (
		<ul className="nodeList">
			{nodes.map((item) => (
				<li key={item.id} onMouseDown={(e) => startDrag(e, item)}>
					{item.data.nodeName}
				</li>
			))}
		</ul>
	);
};

export default NodeList;

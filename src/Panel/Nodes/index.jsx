import React, { useEffect, useState } from "react";

const GraphConfig = ({ graph }) => {
	const [, update] = useState(false);
	useEffect(() => {
		update((b) => !b);
	}, []);
	const [selectable, setSelectable] = useState(
		graph.current?.isSelectionEnabled?.()
	);

	const [selectedNode, setSelectedNode] = useState({});

	// 点选很卡，唉
  graph.current.on('node:selected', ({ cell }) => {
		console.log('selected');
		setSelectedNode(cell?.getData?.());
  });

	graph.current.on('node:unselected', () => {
		setSelectedNode({});
	});

	const handleChangeGraphSelectionEnable = (flag) => {
		console.log(flag);
		setSelectable(flag);
		if (flag) {
			graph.current?.enableSelection?.();
		} else {
			graph.current?.cleanSelection?.();
			graph.current?.disableSelection?.();
		}
	};

	return (
		<>
			<h2>{selectedNode?.nodeCode}</h2>
			<pre>
				{`
new Graph({
  selecting: {
    enabled: ${Boolean(selectable)},
    showNodeSelectionBox: true,
  },
})
      `}
			</pre>
			<label htmlFor="selectEnabled">
				点选
				<input
					type="checkbox"
					name="selectEnabled"
					value={selectable}
					onChange={() => handleChangeGraphSelectionEnable(!selectable)}
				/>
			</label>
		</>
	);
};

export default GraphConfig;

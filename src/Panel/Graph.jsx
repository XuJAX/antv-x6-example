import React, { useEffect, useState } from "react";

const GraphConfig = ({ graph }) => {
	const [, update] = useState(false);
	useEffect(() => {
    update((b) => !b);
  }, []);
  const [panning, setPanning] = useState(!!graph.current?.isPannable?.());
  const [background, setBg] = useState(graph?.current?.background?.options || { color: '#FFFFFF'});


	const handleChangeGraphColor = (options) => {
    console.log(graph.current);
		if (graph.current) {
      graph.current.drawBackground({
        ...background,
        ...options,
      });
    }
    setBg({
      ...background,
			...options,
    });
	};

	return (
		<>
    <pre>
      {`
      new Graph({
        panning: ${String(panning)}
        background: {
          color: '${background.color}',
        },
      })
      `}
    </pre>
			<button
				onClick={() => {
					if (panning) {
						graph.current?.disablePanning?.();
            setPanning(false);
					} else {
						graph.current?.enablePanning?.();
            setPanning(true);
					}
					update((b) => !b);
				}}
			>
				{`${graph.current.isPannable?.() ? "禁止" : "启用"}画布平移`}
			</button>
			<label htmlFor="color">
				背景颜色
				<input
					type="color"
					id="color"
					defaultValue={background?.color || '#FFFFFF'}
					onChange={(e) => handleChangeGraphColor({color: e.target.value})}
				/>
			</label>
		</>
	);
};

export default GraphConfig;

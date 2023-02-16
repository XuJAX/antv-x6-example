import React, { useEffect, useState } from "react";

const GraphConfig = () => {
	const [, update] = useState(false);
	useEffect(() => {
    update((b) => !b);
  }, []);

	return (
		<>
    <pre>
      {`
new Graph({
  connecting: {
    allowBlank: false,
    allowMulti: false, // 是否允许在相同的其实和终止节点间创建多条边
    allowLoop: false, // 是否允许创建循环连线
    allowNode: false, // 是否允许边连接到节点上
    router: 'manhattan',
    connector: {
      name: 'rounded',
      args: {
        radius: 8,
      },
    },
    anchor: 'center',
    connectionPoint: 'boundary',
    snap: {
      radius: 30,
    },
    createEdge() {
      return new Shape.Edge({
        attrs: {
          line: {
            stroke: '#000',
            strokeWidth: 2,
            targetMarker: {
              name: 'block',
              width: 12,
              height: 8,
            },
          },
        },
        zIndex: 0,
      });
    },
    validateConnection({ targetMagnet }) {
      return !!targetMagnet;
    },
  },
})
      `}
    </pre>
		</>
	);
};

export default GraphConfig;

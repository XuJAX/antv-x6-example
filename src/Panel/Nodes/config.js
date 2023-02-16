import Logo from "../../logo.svg";

const nodes = [
	{
		id: "node1",
		data: {
			nodeName: "矩形",
			nodeCode: "RECT",
			nodeType: "RECT",
		},
	},
	{
		id: "node2",
		data: {
			nodeName: "圆形",
			nodeCode: "CIRCLE",
			nodeType: "CIRCLE",
		},
	},
	{
		id: "node3",
		data: {
			nodeName: "椭圆",
			nodeCode: "ELLIPSE",
			nodeType: "ELLIPSE",
		},
	},
	{
		id: "node4",
		data: {
			nodeName: "多边形",
			nodeCode: "POLYGON",
			nodeType: "POLYGON",
		},
	},
	{
		id: "node5",
		data: {
			nodeName: "图片",
			nodeCode: "IMAGE",
			nodeType: "IMAGE",
		},
	},
];

const rectNode = () => ({
	width: 100,
	height: 40,
	data: {
		nodeCode: "",
		nodeName: "",
		nodeType: "",
	},
	shape: "rect",
	attrs: {
		label: {
			text: "Rect",
			fill: "#0840F8",
			fontSize: 12,
		},
		body: {
			fill: "#E6EBFE",
			stroke: "#9CB3FC",
			strokeWidth: 1,
			cursor: "pointer",
			rx: 0, // 圆角
			ry: 50,
		},
	},
	ports: {
		groups: {
			in: {
				position: "top",
				attrs: {
					circle: {
						r: 6,
						magnet: true,
						stroke: "#31d0c6",
						strokeWidth: 2,
						fill: "#fff",
					},
				},
			},
			out: {
				position: "bottom",
				attrs: {
					circle: {
						r: 6,
						magnet: true,
						stroke: "#31d0c6",
						strokeWidth: 2,
						fill: "#fff",
					},
				},
			},
		},
		items: [
			{
				id: "port1",
				group: "in",
			},
			{
				id: "port2",
				group: "out",
			},
		],
	},
});

const circleNode = () => ({
	width: 100,
	height: 40,
	data: { nodeCode: "", nodeName: "", nodeType: "" },
	shape: "circle",
	attrs: {
		label: {
			text: "Rect",
			fill: "#0840F8",
			fontSize: 12,
		},
		body: {
			fill: "#E6EBFE",
			stroke: "#9CB3FC",
			strokeWidth: 1,
			cursor: "pointer",
		},
	},
	ports: {
		groups: {
			in: {
				position: "top",
				attrs: {
					circle: {
						r: 6,
						magnet: true,
						stroke: "#31d0c6",
						strokeWidth: 2,
						fill: "#fff",
					},
				},
			},
			out: {
				position: "bottom",
				attrs: {
					circle: {
						r: 6,
						magnet: true,
						stroke: "#31d0c6",
						strokeWidth: 2,
						fill: "#fff",
					},
				},
			},
		},
    items: [
      {
        id: 'port1',
        group: 'in',
      },
    ],
	},
});

const ellipseNode = () => ({
	width: 100,
	height: 40,
	data: {
		nodeCode: "",
		nodeName: "",
		nodeType: "",
	},
	shape: "ellipse",
	attrs: {
		label: {
			text: "Rect",
			fill: "#0840F8",
			fontSize: 12,
		},
		body: {
			fill: "#E6EBFE",
			stroke: "#9CB3FC",
			strokeWidth: 1,
			cursor: "pointer",
		},
	},
	ports: {
		groups: {
			in: {
				position: "top",
				attrs: {
					circle: {
						r: 6,
						magnet: true,
						stroke: "#31d0c6",
						strokeWidth: 2,
						fill: "#fff",
					},
				},
			},
			out: {
				position: "bottom",
				attrs: {
					circle: {
						r: 6,
						magnet: true,
						stroke: "#31d0c6",
						strokeWidth: 2,
						fill: "#fff",
					},
				},
			},
		},
    items: [
      {
        id: 'port1',
        group: 'in',
      },
      {
        id: 'port2',
        group: 'out',
      },
    ],
	},
});

const polygonNode = () => ({
	width: 100,
	height: 40,
	data: {
		nodeCode: "",
		nodeName: "",
		nodeType: "",
	},
	shape: "polygon",
	markup: [
		{
			tagName: "polygon",
			selector: "body",
		},
		{
			tagName: "text",
			selector: "label",
		},
	],
	attrs: {
		label: {
			text: "Rect",
			fill: "#0840F8",
			fontSize: 12,
		},
		body: {
			fill: "#E6EBFE",
			stroke: "#9CB3FC",
			strokeWidth: 1,
			cursor: "pointer",
			refPoints: '0,10 10,0 20,10 10,20', // 坐标以空格分开
			// refPoints: '0,40 100,40 50,0', // 坐标以空格分开

		},
	},
	ports: {
    groups: {
      left: {
        position: {
					x: 10,
					y: 10,
				},
      },
      bottom: {
        position: 'bottom',
      },
      right: {
        position: 'right',
      },
      top: {
        position: 'top',
      },
    },
    items: [
      {
        id: 'pints1',
        group: 'left',
        attrs: {
          circle: {
            r: 5,
            magnet: true,
            stroke: '#0840F8',
            strokeWidth: 1,
            fill: '#fff',
          },
        },
      },
      {
        id: 'pints2',
        group: 'bottom',
        attrs: {
          circle: {
            r: 5,
            magnet: true,
            stroke: '#0840F8',
            strokeWidth: 1,
            fill: '#fff',
          },
        },
      },
      {
        id: 'pints3',
        group: 'right',
        attrs: {
          circle: {
            r: 5,
            magnet: true,
            stroke: '#0840F8',
            strokeWidth: 1,
            fill: '#fff',
          },
        },
      },
      {
        id: 'pints4',
        group: 'top',
        attrs: {
          circle: {
            r: 5,
            magnet: true,
            stroke: '#0840F8',
            strokeWidth: 1,
            fill: '#fff',
          },
        },
      },
    ],
  },
});

const imageNode = () => ({
	width: 100,
	height: 100,
	data: {
		nodeCode: "",
	},
	shape: "image",
	attrs: {
		image: {
			"xlink:href": Logo,
		},
	},
	ports: {
		groups: {
			in: {
				position: "top",
				attrs: {
					circle: {
						r: 6,
						magnet: true,
						stroke: "#31d0c6",
						strokeWidth: 2,
						fill: "#fff",
					},
				},
			},
			out: {
				position: "bottom",
				attrs: {
					circle: {
						r: 6,
						magnet: true,
						stroke: "#31d0c6",
						strokeWidth: 2,
						fill: "#fff",
					},
				},
			},
		},
    items: [
      {
        id: 'port1',
        group: 'in',
      },
    ],
	},
});

export { nodes, rectNode, circleNode, polygonNode, imageNode, ellipseNode };

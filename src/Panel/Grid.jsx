import React, { useEffect, useState } from "react";

const GraphConfig = ({ graph }) => {
	const [, update] = useState(false);
	useEffect(() => {
		update((b) => !b);
		console.log(graph.current);
	}, []);

	const [size, setSize] = useState(graph.current?.getGridSize?.());
	const [type, setType] = useState(graph.current?.options?.grid?.type);
	const [args, setArgs] = useState(graph.current?.options?.grid?.args || {});

	const handleDragGrid = (options) => {
		graph.current.drawGrid({ size, type, args, ...options });
	};

	return (
		<>
			<pre>
				{`
new Graph({
  grid: {
    size: ${size},
    type: ${type},
    args: ${
			type === "doubleMesh"
				? `[
      {
        color: ${args[0].color},
        thickness: ${args[0].color},
      },
      {
        color: ${args[1].color},
        thickness: ${args[1].color},
        factor: ${args[1].factor}, // 主次网格间距
      },
    ],`
				: `{
      color: ${args?.color},
      thickness: ${args?.thickness},
    },`
		}
  },
})
      `}
			</pre>
			<label htmlFor="gridSize">
				size:&nbsp;
				<input
					type="range"
					min={1}
					value={size}
					step={1}
					id="gridSize"
					onChange={(e) => {
						const value = e.target.value;
						graph.current.setGridSize(value);
						setSize(value);
					}}
				/>
			</label>
			<label htmlFor="gridType">
				type:&nbsp;
				<select
					name="gridType"
					value={type}
					onChange={(e) => {
						const value = e.target.value;
						handleDragGrid({ type: value });
						setType(value);
						if (value === "doubleMesh") {
							setArgs((obj) => [
								obj,
								{ color: "#000000", thickness: 1, factor: 4 },
							]);
						} else if (Array.isArray(args)){
							setArgs((arr) => arr[0]);
						}
					}}
				>
					<option value="dot">dot点状网格</option>
					<option value="fixedDot">固定网点大小的点状网格</option>
					<option value="mesh">网状网格</option>
					<option value="doubleMesh">双网线网状网格</option>
				</select>
			</label>
			<label htmlFor="color1">
				{type === "doubleMesh" && "主"}color:&nbsp;
				<input
					type="color"
					id="color1"
					value={type === "doubleMesh" ? args[0].color : args?.color}
					onChange={(e) => {
						const value = e.target.value;
						let _args;
						if (type === "doubleMesh") {
							_args = [...args];
							_args[0].color = value;
						} else {
							_args = { ...args };
							_args.color = value;
						}
						handleDragGrid({ args: _args });
						setArgs(_args);
					}}
				/>
			</label>
			<label htmlFor="gridThickness1">
				{type === "doubleMesh" && "主"}thickness:&nbsp;
				<input
					type="range"
					max={size}
					min={1}
					value={type === "doubleMesh" ? args[0].thickness : args.thickness}
					step={1}
					id="gridThickness1"
					onChange={(e) => {
						const value = e.target.value;
						let _args;
						if (type === "doubleMesh") {
							_args = [...args];
							_args[0].thickness = value;
						} else {
							_args = { ...args };
							_args.thickness = value;
						}
						handleDragGrid({ args: _args });
						setArgs(_args);
					}}
				/>
			</label>
			{type === "doubleMesh" && (
				<>
					<label htmlFor="color2">
						次color:&nbsp;
						<input
							type="color"
							id="color2"
							value={args[1].color}
							onChange={(e) => {
								const value = e.target.value;
								let _args = [...args];
								_args[1].color = value;
								handleDragGrid({ args: _args });
								setArgs(_args);
							}}
						/>
					</label>
					<label htmlFor="gridThickness2">
						次thickness:&nbsp;
						<input
							type="range"
							max={size}
							min={1}
							value={args[1].thickness}
							step={1}
							id="gridThickness2"
							onChange={(e) => {
								const value = e.target.value;
								let _args = [...args];
								_args[1].thickness = value;
								handleDragGrid({ args: _args });
								setArgs(_args);
							}}
						/>
					</label>
					<label htmlFor="gridFactor2">
						主次网格间距:&nbsp;
						<input
							type="range"
							max={size}
							min={1}
							value={args[1].factor}
							step={1}
							id="gridFactor2"
							onChange={(e) => {
								const value = e.target.value;
								let _args = [...args];
								_args[1].factor = value;
								handleDragGrid({ args: _args });
								setArgs(_args);
							}}
						/>
					</label>
				</>
			)}
		</>
	);
};

export default GraphConfig;

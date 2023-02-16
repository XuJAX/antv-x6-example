import { Graph, Shape } from '@antv/x6';

const init = () => {
  const graph = new Graph({
    container: document.getElementById('container'),
    // height: 600,
    panning: true,
    mousewheel: {
      enabled: true,
      modifiers: ['shift', 'meta'],
      minScale: 0.2,
    },
    grid: {
      size: 20,
      visible: true,
      type: 'dot', // 'dot' | 'fixedDot' | 'mesh' | 'doubleMesh'双线的args为数组
      args: {
        color: '#a0a0a0', // 网格线/点颜色
        thickness: 1, // 网格线宽度/网格点大小
        // factor: 4, // doubleMesh类型下主次网格线间隔
      },
    },
    selecting: {
      enabled: false,
      multiple: false,
      showNodeSelectionBox: true,
    },
    connecting: {
      allowBlank: false, // 是否允许连接到空白位置
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
  });

  return graph;
};

export default init;
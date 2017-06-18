// Drawing axes with labels

sigma.parsers.json( "axes.json", {
	container: 'network-graph',
	type: 'canvas',
	settings: {
		defaultLabelHoverColor: '#ec5148',
		defaultEdgeColor: 'default',
		sideMargin: 0.5,
		touchEnabled: false,
		mouseEnabled: false,
		labelThreshold: 0
	}
});

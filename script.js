
var cy = (window.cy = cytoscape({
  container: document.getElementById("cy"),
  style: [{
      selector: "node",
      css: {
        content: "data(id)",
        padding: 0,
        "text-valign": "center",
        "text-halign": "center",
        height: "60px",
        width: "60px"
      }
    },
    {
      selector: ":parent",
      css: {
        //shape: "rectangle"
        //shape: "barrel"
        //shape: 'cutrectangle',
        //shape: 'roundrectangle',
        // https://github.com/cytoscape/cytoscape.js/issues/925
        shape: 'polygon',
   // shape-polygon-points: '-1, -1,   1, -0.5,   1, 1,   -1, 0.5',
   "shape-polygon-points": [-0.33, -1, 0.33, -1, 0.33, -0.33, 1, -0.33, 1, 0.33, 0.33, 0.33, 0.33, 1, -0.33, 1, -0.33, 0.33, -1, 0.33, -1, -0.33, -0.33, -0.33],
          // shape: svg(M10 10 h 80 v 80 h -80 Z),
      }
    },
    {
      selector: "edge",
      css: {
        label: "\u2B24",
        "curve-style": "bezier",
        "target-arrow-shape": "data(arrow)"
      }
    },
    {
      selector: ".selectedNode",
      style: {
        "border-width": 8,
        "border-color": "#5da963"
      }
    }
  ],

  elements: {
    nodes: [{
        data: {
          id: "n0",
          parent: "n4"
        }
      },
      {
        data: {
          id: "n1",
          parent: "n5"
        }
      },
      {
        data: {
          id: "n2",
          parent: "n5"
        }
      },
      {
        data: {
          id: "n3",
          parent: "n5"
        }
      },
      {
        data: {
          id: "n4",
          parent: "n5"
        }
      },
      {
        data: {
          id: "n5"
        }
      }
    ],
    edges: [{
        data: {
          source: "n0",
          target: "n1",
          arrow: "triangle"
        }
      },
      {
        data: {
          source: "n1",
          target: "n2",
          arrow: "triangle"
        }
      },
      {
        data: {
          source: "n1",
          target: "n3",
          arrow: "triangle"
        }
      }
    ]
  },

  layout: {
    name: "concentric",
    minNodeSpacing: 140
  }
}));

cy.unbind("click");
cy.bind("click", "nodes", (evt) => {
  cy.elements().removeClass("selectedNode");
  evt.target.addClass("selectedNode");
});

cy.bind("click", "edge", function() {
  console.log("clone:");
  console.log(cy.elements().clone());
  console.log("json:");
  console.log(cy.elements().jsons());
});



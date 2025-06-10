var APP_DATA = {
  "scenes": [
    {
      "id": "0-exterior",
      "name": "EXTERIOR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.07057883736575477,
          "pitch": 3.419251370928578e-8,
          "rotation": 0,
          "target": "1-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-living-room",
      "name": "LIVING-ROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.36377418814416984,
          "pitch": 0.1436578875792467,
          "rotation": 0,
          "target": "2-kitchen"
        },
        {
          "yaw": -3.132212545559467,
          "pitch": 0.28793181426607006,
          "rotation": 0,
          "target": "0-exterior"
        },
        {
          "yaw": 0.2039181663795553,
          "pitch": 0.11047365813137766,
          "rotation": 0,
          "target": "3-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-kitchen",
      "name": "KITCHEN",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.5833796857990396,
          "pitch": 0.2802504046277967,
          "rotation": 0,
          "target": "3-corridor"
        },
        {
          "yaw": -2.8073696120821516,
          "pitch": 0.21336079742762593,
          "rotation": 0,
          "target": "1-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-corridor",
      "name": "CORRIDOR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.5267154770550864,
          "pitch": 0.23475934962830003,
          "rotation": 0,
          "target": "5-bedroom"
        },
        {
          "yaw": 0.7244701578425694,
          "pitch": 0.25808009229372075,
          "rotation": 0,
          "target": "4-bathroom"
        },
        {
          "yaw": 1.4384220023130183,
          "pitch": 0.1699027804432518,
          "rotation": 0,
          "target": "6-master-bedroom"
        },
        {
          "yaw": -2.0914552688988834,
          "pitch": 0.27945510136725105,
          "rotation": 0,
          "target": "1-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-bathroom",
      "name": "BATHROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.0645335292040237,
          "pitch": 0.3219050084932693,
          "rotation": 0,
          "target": "3-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-bedroom",
      "name": "BEDROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.04764506626263,
          "pitch": 0.31875133922150667,
          "rotation": 0,
          "target": "3-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-master-bedroom",
      "name": "MASTER-BEDROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.6615481083175876,
          "pitch": 0.34634788391489835,
          "rotation": 0,
          "target": "3-corridor"
        },
        {
          "yaw": 0.27617438318408105,
          "pitch": 0.2927336874899549,
          "rotation": 0,
          "target": "7-master-bathroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-master-bathroom",
      "name": "MASTER-BATHROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.4839931314420163,
          "pitch": 0.3896432444335307,
          "rotation": 0,
          "target": "6-master-bedroom"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};

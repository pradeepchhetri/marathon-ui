const dockerRowSchemes = {
  dockerPortMappings: {
    containerPort: null,
    hostPort: null,
    servicePort: null,
    protocol: "tcp"
  },
  dockerParameters: {
    key: null,
    value: null
  },
  containerVolumes: {
    containerPath: null,
    hostPath: null,
    mode: null
  }
};

module.exports = Object.freeze(dockerRowSchemes);

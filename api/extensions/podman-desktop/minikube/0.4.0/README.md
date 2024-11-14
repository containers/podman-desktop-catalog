# Minikube Extension

The Minikube extension adds support for https://minikube.sigs.k8s.io/docs/. It allows users to create Kubernetes clusters running on top of the container engine.

## Topics
- [Installation](#installation)
- [Contributing](#contributing)
- [Feedback](#feedback)

## Installation

You can install the Minikube extension directly inside Podman Desktop.

Go to Extensions > Catalog > Install minikube.

![](https://github.com/containers/podman-desktop-media/raw/minikube/gifs/install_minikube_extension.gif)

## Contributing

Want to help develop and contribute to the Minikube extension?

You can use `pnpm watch --extension-folder` from the Podman Desktop directory to automatically rebuild and test the Minikube extension:

```sh
git clone https://github.com/podman-desktop/podman-desktop
git clone https://github.com/podman-desktop/podman-desktop-extension-minikube
cd podman-desktop-extension-minikube
pnpm install
pnpm watch
cd ../podman-desktop
pnpm watch --extension-folder ../podman-desktop-extension-minikube
```

## Feedback

You can provide your feedback on the extension by creating [an issue on this repository](https://github.com/containers/podman-desktop-extension-minikube/issues).

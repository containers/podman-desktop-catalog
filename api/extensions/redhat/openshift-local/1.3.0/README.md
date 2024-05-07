![](icon.png)

# Red Hat OpenShift Local extension

## About

Integration for [Red Hat OpenShift Local][product page] clusters. It will help you install and set up the environment. and allows you to control the lifecycle and configuration from [Podman Desktop][podman-desktop].

## Usage

Once installed you can configure your local OpenShift instance parameters in OpenShift Local Extension settings page. The values set in the page are used when you create new OpenShift Local cluster.

![1](https://raw.githubusercontent.com/containers/podman-desktop-media/openshift-local/readme/1-crc-ext-settings.png)

To create new OpenShift Local Cluster switch to Resources Settings page and use `Create new ...` button to create new cluster.

![2](https://raw.githubusercontent.com/containers/podman-desktop-media/openshift-local/readme/2-crc-ext-create-new-resource.png)

When new cluser has created there should be new connection visible in OpenShift Local section.

![3](https://raw.githubusercontent.com/containers/podman-desktop-media/openshift-local/readme/3-crc-ext-connection.png)

There is also system tray menu for OpenShift Local where you can run cluster related commands.

![4](https://raw.githubusercontent.com/containers/podman-desktop-media/openshift-local/readme/4-crc-ext-tray-menu.png)

To deploy your first application to OpenShift pull `httpd-24` image from public Red Hat image registry. Open `Images` page using activity bar and press `Pull` button in upper right corner of the page.

![5](https://raw.githubusercontent.com/containers/podman-desktop-media/openshift-local/readme/5-crc-ext-open-pull-page.png)

Paste `registry.access.redhat.com/ubi8/httpd-24` into `Image to pull` field and press `Pull Image` button.

![6](https://raw.githubusercontent.com/containers/podman-desktop-media/openshift-local/readme/6-crc-ext-pull-image-form.png)

After the image sucessfully pulled from the registry press `Done` button to navigate to `Images` page.

![7](https://raw.githubusercontent.com/containers/podman-desktop-media/openshift-local/readme/7-crc-ext-pull-image-result.png)

Show context menu for `httpd-24` image you just pulled by clicking on right most button in the image row. Then select `Push to OpenSift Local` menu item.

![8](https://raw.githubusercontent.com/containers/podman-desktop-media/openshift-local/readme/8-crc-ext-push-image-to-cluster.png)

You can watch progress for `Push` command it Podman Tesktop task view.

![9](https://raw.githubusercontent.com/containers/podman-desktop-media/openshift-local/readme/9-crc-ext-push-image-progress.png)

When `Push` command finished successfully you are ready to deploy your image to OpenShift Local cluster. First start local container from `httpd-24` image using `Run` button for the image.

![10](https://raw.githubusercontent.com/containers/podman-desktop-media/openshift-local/readme/10-crc-ext-run-container-button.png)



![11](https://raw.githubusercontent.com/containers/podman-desktop-media/openshift-local/readme/11-crc-ext-run-container-form.png)
![12](https://raw.githubusercontent.com/containers/podman-desktop-media/openshift-local/readme/12-crc-ext-open-deploy-to-kube-form.png)
![13](https://raw.githubusercontent.com/containers/podman-desktop-media/openshift-local/readme/13-crc-ext-deploy-to-kube-form.png)
![14](https://raw.githubusercontent.com/containers/podman-desktop-media/openshift-local/readme/14-crc-ext-deploy-to-kube-form-result.png)
![14](https://raw.githubusercontent.com/containers/podman-desktop-media/openshift-local/readme/15-crc-ext-browser-view.png)

## Requirements

You are required to have a working [Podman Desktop][podman-desktop] installation.
Each preset of OpenShift Local has their own requirements, please check the [documentation][documentation page] for more information.


### Preset types
  * Microshift (experimental)  
    provides a lightweight and optimized environment with a limited set of services.
  * OpenShift  
    provides a single node OpenShift cluster with a fuller set of services, including a web console (requires more resources).


### Pull-secret
To pull container images from the registry, a pull secret is necessary. You can get a pull secret by navigating to the dashboard and clicking the "Obtain pull-secret" or opening the [Red Hat OpenShift Local download page][download page] in your browser.


## Installation

#### Prerequisites

* The extension is not already installed.

#### Procedure

1. Open Podman Desktop dashboard.
1. Go to the **Settings > Extensions > Install a new extension from OCI Image**.
1. **Name of the image**: Enter

   ```
   quay.io/redhat-developer/openshift-local-extension:latest
   ```

1. Click on the **Install extension from the OCI image** button.


## Features

  * Start/Stop/Delete OpenShift Local presets
  * Change the OpenShift Local preset
  * Change basic configuration


## Extension Settings

  * Memory, in MiB
  * CPUs, number of cores
  * Preset, Microshift or OpenShift
  * Disksize, in GiB
  * Pull secret file, pull secret for OpenShift


## Known limitation
Currently, we do not support the Podman preset of OpenShift Local. Please use preferences to change this:

Settings > Preferences > Red Hat OpenShift Local > Preset


[product page]: https://developers.redhat.com/products/openshift/local
[download page]: https://cloud.redhat.com/openshift/create/local
[documentation page]: https://cloud.redhat.com/openshift/local/documentation
[podman-desktop]: https://podman-desktop.io/

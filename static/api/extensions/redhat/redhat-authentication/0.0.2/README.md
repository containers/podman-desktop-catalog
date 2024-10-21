# Podman Desktop Red Hat SSO Extension

An extension for Podman Desktop to simplify logging into and creating a Red Hat account.  The extension opens sso.redhat.com in the browser to retrieve an SSO token upon successful login.  The SSO token is then used to log into the [registry.redhat.io](https://catalog.redhat.com/) Container Registry and to register the Linux virtual machine powering Podman Desktop via subscription-manager to grant the containers access to protected Red Hat content such as RHEL repositories.

# Installation

The extension is currently available in an Alpha version but ready to test.  Extension for Podman Desktop are shipped as OCI container images.  Please refer to the [Podman Desktop documentation](https://podman-desktop.io/docs/extensions/install) for installation instructions and to [Quay.io](https://quay.io/repository/redhat-developer/podman-desktop-redhat-account-ext?tab=tags) for available tags.

The latest available image is `quay.io/redhat-developer/podman-desktop-redhat-account-ext:0.0.2`.

Starting with Podman 5.0, subscription-manager will be shipped by default.  For prior versions, the extension will take care of installing subscription-manager which may take a short while and requires a reboot.

# Usage

Once installed, you can find the extension in the Settings menu which you can find in the bottom left corner of Podman Desktop:

![image](https://raw.githubusercontent.com/redhat-developer/podman-desktop-redhat-account-ext/v0.0.2/screenshots/settings.png)

To sign into your Red Hat account, open the Authentication menu and click on the drop-down button:

![image](https://raw.githubusercontent.com/redhat-developer/podman-desktop-redhat-account-ext/v0.0.2/screenshots/authentication-menu.png)

To sign into your Red Had account, Podman Desktop will open Red Hat SSO in your browser of choice.  The SSO form will make sure that each user has accepted the terms and conditions, and has a valid Red Hat [developers subscription](https://developers.redhat.com/about?source=sso). If needed, you may also create a new Red Hat account and further use social login via an existing Google, Microsoft or GitHub account:

![image](https://raw.githubusercontent.com/redhat-developer/podman-desktop-redhat-account-ext/v0.0.2/screenshots/sso.png)

Once signed in, there is nothing further to be done. Podman Desktop will automatically use the SSO token to log into the Red Hat container registry and to register the Linux virtual machine (i.e., podman machine) via subscription-manager. The two tasks are listed in the Tasks menu which you can open on the bottom right of Podman Desktop:

![image](https://raw.githubusercontent.com/redhat-developer/podman-desktop-redhat-account-ext/v0.0.2/screenshots/tasks.png)

To verify that the sign-in process was successful, you may build the following Dockerfile:
```Dockerfile
FROM registry.redhat.io/rhel9/toolbox
RUN  dnf install -y kernel
````

Pulling the container image `registry.redhat.io/rhel9/toolbox` requires having logged into the Red Hat container registry.  Installing the `kernel` package requires access to protected content.

# Local Development

To rebuild Podman Desktop and the extension run:

```shell
  yarn build
```

To execute the extension in Podman Desktop, use one of the following to options.

With a pre-installed version of Podman Desktop:
```shell
podman-desktop --extension-folder this_folder
```

In a local git tree of Podman Desktop:
```shell
yarn watch --extension-folder this_folder
```

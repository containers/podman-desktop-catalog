# OpenShift Checker

The OpenShift checker is a tool whose goal is to analyze a Containerfile and highlight the directives and commands which could cause an unexpected behavior when running on an OpenShift cluster.

In many cases a Containerfile could work fine on a Kubernetes cluster and fail on OpenShift because of its security restrictions. This tool should help finding what is wrong and driving users to update their Containerfiles to make them OpenShift compliant.

The Containerfile's directives and commands currently supported are listed below.

### User directive

In OpenShift, a container is run using an arbitrarily assigned user ID. For this reason setting the runtime user to `root` would not have any effect and it could lead to unexpected results.

An example of a wrong instruction that the tool would detect is
```
USER root
```

with this printed message 
```
USER directive set to root at line 28 could cause an unexpected behavior. In OpenShift, containers are run using arbitrarily assigned user ID
```

### Run Directive

The RUN instruction executes any commands in a new layer on top of the current image and commit the results. Because of the unlimited number of different commands that can be executed, this tool only focuses on those related to permissions settings.

#### chmod

In Openshift, directories and files need to be read/writable by the root group and files that must be executed should have group execute permissions.
Anything that does not give the right group permissions could lead to unexpected results.

An example of a wrong instruction that the tool would detect is
```
RUN chmod 700 /app
```

with this printed message 
```
permission set on chmod 700 /app   at line 10-18 could cause an unexpected behavior. Is it an executable file? Try updating permissions to 770 otherwise set it to 760
Explanation - in Openshift, directories and files need to be read/writable by the root group and files that must be executed should have group execute permissions
```

#### chown

Although OpenShift runs containers using an arbitrarily assigned user ID, the group ID must always be set to the root group (0). Therefore, the directories and files that the processes running in the image need to access should have their group ownership set to the root group. 

An example of a wrong instruction that the tool would detect is
```
RUN chown -R node:node /app
```

with this printed message 
```
owner set on  chown -R node:node /app at line 10-18 could cause an unexpected behavior. 
In OpenShift the group ID must always be set to the root group (0)
```

#### sudo/su

If you use `sudo` or `su` as the prefix for any Linux command, this will be executed with elevated privileges. However in OpenShift a container is run using an arbitrarily assigned user ID and therefore the command outcome could be not the one expected.

An example of a wrong instruction that the tool would detect is
```
RUN sudo node -v
```

with this printed message 
```
sudo/su command used in 'sudo node -v' at line 26 could cause an unexpected behavior. 
In OpenShift, containers are run using arbitrarily assigned user ID and elevating privileges could lead 
to an unexpected behavior
```

### Expose directive

By default ports 1-1023 are privileged ports that only the root user can bind. When running a container on OpenShift, it is then needed to use ports greater than 1023.

An example of a wrong instruction that the tool would detect is
```
EXPOSE 80
```

with this printed message 
```
port 80 exposed at line 28 could be wrong. TCP/IP port numbers below 1024 are privileged port numbers
```

Cli
===

To build and use the cli, execute

```
go build -o doa[.exe]
doa[.exe] analyze -f /your/local/project/path[/Containerfile_name]
```

Podman Desktop Extension
========================

To install the extension on Podman Desktop, you can click on the "Extensions" icon in the left sidebar and search for "Checker".

Contributing
============
This is an open source project open to anyone. This project welcomes contributions and suggestions!

For information on getting started, refer to the [CONTRIBUTING instructions](https://github.com/redhat-developer/podman-desktop-image-checker-openshift-ext/blob/main/CONTRIBUTING.md).


Feedback & Questions
====================
If you discover an issue please file a bug and we will fix it as soon as possible.
* File a bug in [GitHub Issues](https://github.com/redhat-developer/podman-desktop-image-checker-openshift-ext/issues).

License
=======
Apache 2.0, See [LICENSE](https://github.com/redhat-developer/podman-desktop-image-checker-openshift-ext/blob/main/LICENSE) for more information.

Acknowledgments
===============

This tool was born thanks to the awesome article written by Michael Greenberg "Adapting Docker and Kubernetes containers to run on Red Hat OpenShift Container Platform" [link](https://developers.redhat.com/blog/2020/10/26/adapting-docker-and-kubernetes-containers-to-run-on-red-hat-openshift-container-platform).
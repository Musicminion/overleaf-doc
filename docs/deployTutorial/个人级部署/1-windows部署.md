# Windows部署

:::caution 警告
「Windows部署」适用于运行Windows的PC。通过本地部署Overleaf，供您自己使用(当然如果你适当配置，和你在同一个网络的人如果知道你的电脑IP和你Overleaf的监听端口也可以使用)。由于Overleaf部署后相当于让电脑增加了一个作为服务器的负载压力，所以推荐较高配置的电脑考虑这种部署方案。如果您发现部署后您的电脑压力明显增加、出现卡顿，建议不要采用这种部署。（推荐配置8核 16G内存以上）
:::
:::info 说明
部署完成后，**您并不能直接使用Xelatex编译器，也不能编译任何中文的latex文档。**您需要参考个人级部署的第五节：[安装TexLive宏包](5-TexLive宏包的安装.md)，配置完成后你才可以使用中文Latex。
:::
:::caution 提示
请不要在M1/M2系列的Mac中通过虚拟机Windows进行本教程（虚拟机并不能改变CPU的架构）。如果你是macOS用户请前往对应的章节，如果你是Intel mac用户，但是在电脑上安装了Windows并一直使用，你应该可以继续本部分Windows部署。
:::

## 安装Docker
使用Windows部署下，您首先需要安装Docker。请打开链接，[Docker desktop for Windows](https://docs.docker.com/desktop/install/windows-install/)然后下载安装好Docker。



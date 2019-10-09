#!/usr/bin/env python
# -*-coding:utf-8-*-
import paramiko
import os

__author__ = "zhengshaojie"


def connect_host(ip, port, username, password):
    """
    连接远程主机
    """
    client = paramiko.SSHClient()
    client.set_missing_host_key_policy(paramiko.AutoAddPolicy())

    client.connect(ip, port=port,
                   username=username,
                   password=password)

    return client


client = connect_host('39.97.109.152', 22, 'root', '63252773.xuan')
stdin, stdout, stderr = client.exec_command('cat /etc/redhat-release')
print(stdout.read())

for parent, dirs, files in os.walk('../ssh'):
    # 输出文件夹信息
    for dir in dirs:
        print('parent is :', parent)
        print('dirname is ', dir)
    # 输出文件信息
    for file in files:
        print('parent is :', parent)
        print('filename is :', file)
        # 文件的完整路径
        fullname = os.path.join(parent, file)
        print('the full name of the file is :', fullname)
        file_size = os.path.getsize(fullname)/1024/1024
        print('the file size is : %.2f MB' % file_size)



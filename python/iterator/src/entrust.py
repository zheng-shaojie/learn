# 委托迭代
# 使自定义容器也可以进行迭代操作，解决方法:定义一个__iter__()方法


class Node:

    def __init__(self, value):
        self.value = value
        self.children = []

    def __repr__(self):
        return 'Node {!r}'.format(self.value)

    def add_child(self, node):
        self.children.append(node)

    def __iter__(self):
        return iter(self.children)

    # 实现自定义对象的迭代协议
    def depth_first(self):
        yield self
        for c in self:
            yield from c.depth_first()


if __name__ == '__main__':
    root = Node(0)
    children1 = Node(1)
    children2 = Node(2)
    root.add_child(children1)
    root.add_child(children2)
    children2.add_child(Node(3))
    children1.add_child(Node(4))
    children2.add_child(Node(5))
    for ch in root.depth_first():
        print(ch, end='\n')

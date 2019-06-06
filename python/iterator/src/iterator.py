
# 不使用for循环来处理可迭代对象中的元素的解决方案

with open('/etc/passwd') as f:
    try:
        while True:
            line = next(f)
            # print(line, end='')
    except StopIteration:
        # StopIteration一般来说，抛出这个异常是通知我们迭代结束
        pass

# 若是通过手动使用next函数，可以命令这个函数返回一个结束值，代码如下

with open('/etc/passwd') as f:
    while True:
        line = next(f, None)
        if line is None:
            break


# 反向迭代:reversed
# 需要注意的是，若要反向迭代则对象需要确定的大小，或者实现了__reversed__()的方法时才可以。
# 若是两个条件都不满足，可以先将对象转换为列表，但是这样可能会消耗大量内存

a = [1, 2, 3, 4]
for x in reversed(a):
    print(x)


# 实现__reversed__()
class Countdown:
    def __init__(self, start):
        self.start = start

    def __iter__(self):
        n = self.start
        while n > 0:
            yield n
            n -= 1

    def __reversed__(self):
        n = 1
        while n < self.start:
            yield n
            n += 1


num = Countdown(5)
for n in num:
    print(n)

for n in reversed(num):
    print(n)

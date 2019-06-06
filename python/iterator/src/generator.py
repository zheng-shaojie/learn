from collections import deque


# 使用生成器创建迭代模式
# 函数中出现yield就会把它变为一个生成器


def float_range(start, stop, increment):
    x = start
    while x < stop:
        yield x
        x += increment


for n in float_range(0, 4, 0.5):
    # print(n)
    pass


# yield底层机制,生成器函数只有在使用next的时候才会响应


def count_down(n):
    print('Staring to count from', n)
    while n > 0:
        yield n
        n -= 1
    print('Done')


c = count_down(3)
print(next(c))
print(next(c))
print(next(c))


# 定义带有额外状态的生成器函数


class LineHistory:

    def __init__(self, lines, histlen=3):
        self.lines = lines
        self.history = deque(maxlen=histlen)

    def __iter__(self):
        for line_no, line in enumerate(self.lines, 1):
            self.history.append((line_no, len()))
            yield line

    def clear(self):
        self.history.clear()


# 迭代器进行切片,普通的切片操作并不适用，itertools.islice函数是个不错的选择
# 需要注意的时islice函数会消耗迭代数据
# itertools.dropwhile将返回true全部跳过，注意直到某个元素不在满足条件为止

def count(num):
    while True:
        yield num
        num += 1


import itertools

for x in itertools.islice(count(0), 10, 20):
    print(x)

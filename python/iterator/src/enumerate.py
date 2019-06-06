from itertools import zip_longest
# 以索引-值的方式迭代序列


# enumerate函数可以指定其实索引
my_list = ['a', 'b', 'c']

for index, value in enumerate(my_list, 1):
    print(index, value)

with open('/etc/passwd') as f:
    for line_no, line in enumerate(f):
        print(line_no, line)


# 若要同时迭代多个序列则需要使用zip函数
# 循环的长度取决于最短的那个数组

xpts = [1, 5, 4, 2, 10, 7]
ypts = [101, 78, 37, 15, 62, 99]

for x, y in zip(xpts, ypts):
    print(x, y)

# 若是这种行为不是你所期望的可以使用itertools.zip_longest进行替代
# 可以通过可选参数fillvalue来设置填充值
# zip函数返回的为迭代器，若是重复使用请使用list保存为列表

a = [1, 2, 3]
b = ['a', 'b', 'c', 'd', 'e']

for x, y in zip_longest(a, b):
    print(x, y)
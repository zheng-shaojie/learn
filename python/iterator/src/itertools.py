from itertools import permutations, combinations, combinations_with_replacement, chain
import heapq

# itertools使用

# permutations函数将集合中的元素重新排列，以元组方式返回
# 此函数还提供一个可选的长度参数

items = ['a', 'b', 'c']

for p in permutations(items):
    print(p)


for p in permutations(items, 2):
    print(p)

# combinations这个函数可以将序列中的所有元素进行组合,不关心元素之间的顺序，(a,b)和(b,a)认为是一致的

for c in combinations(items, 3):
    print(c)


# combinations_with_replacement去除了这个限制

for c in combinations_with_replacement(items, 3):
    print(c)


# 使用chain函数可以在不同的容器中进行迭代

a = [1, 2, 3, 4]
b = ['a', 'b', 'c']
for ch in chain(a, b):
    print(ch, end=' ')


# 合并两个有序序列，并且合并完后也是有序的

z = [1, 4, 6]
m = [2, 5, 9]

for ch in heapq.merge(z, m):
    print(ch, end=' ')

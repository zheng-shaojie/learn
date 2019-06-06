import io
# 读写文本数据
# rt读写文本文件，wt写入文本文件若是文件存在则覆盖，at是追加,encoding指定编码
# 一般来说t代表的时文本文件，b代表二进制文件

with open('somefile.text', 'rt', encoding='utf8') as f:
    pass

# 在Windows和Linux中存在换行符的问题，在读取时会将换行符转换为\n，输出换行符时则替换为系统默认的换行符，若是你想取消这种翻译的话，可以指定newline参数

with open('somefile.text', 'rt', encoding='utf8', newline=' ') as f:
    pass

# 输出重定向到文件中

with open('somefile.text', 'rt', encoding='utf8', newline=' ') as f:
    # print('hello', file=f)
    pass

# 使用不同的分隔符和行尾结束符完成打印
# sep='，' end='\n'
# 相比较来说str.join函数就比较鸡肋，这个只能用来处理字符串

print(1, 2, 3, sep=' ', end='||\n')

# 对不存在的文件进行读写操作,使用x模式来代替w模式
with open('somefile', 'wt') as f:
    f.write('hello')

with open('somefile', 'xt') as f:
    f.write('hello')


# 将一段文本或者二进制字符串写入类似文件的对象中
# 使用io.StringIO()读写文本，io.BytesIO()读写二进制

s = io.StringIO()
s.write('hello')


def P():
    def B():
        print(c)
    def A():
        print(j)
        c = 10
        B()

    for j in range(5):
        A()
'''
print("abcd")
'''
P()
a = None
print(!a)

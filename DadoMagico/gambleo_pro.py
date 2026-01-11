import numpy as np


def tiradados(n):

    # n=np.random.randint(6, size=5)+1

    counts=[('ones', 0), ('twos',0), ('threes',0), ('fours',0), ('fives',0), ('sixes',0)]

    i=1
    for nakero77 in counts:
        for j in n:
             if j==i:
                counts[i-1]=(counts[i-1][0], counts[i-1][1]+1)
        i+=1
    evilCounts=np.array([counts[0][1], counts[1][1], counts[2][1], counts[3][1], counts[4][1], counts[5][1]])

    evilEvilCounts=[]
    for i in evilCounts:
        if i!=0:
            evilEvilCounts.append(int(i))

    return evilEvilCounts


def CombiDados(counts):
    moves=0
    if len(counts)==5:
        print('escalera')
        moves=0

    if len(counts)==4:
        print('Pareja')
        moves=1

    if len(counts)==3:
        if 3 in counts:
            print('Trio')
            moves=3
        else:
            print('Doble Pareja')
            moves=2

    if len(counts)==2:
        if 4 in counts:
            print('Poker')
            moves=5
        else:
            print('Full')
        moves=4

    if len(counts)==1:

        print('Repoker')
        
        moves=6

    return moves

# 
# counts=tiradados()
# moves=CombiDados(counts)
# 
# print('numero de movimientos: ', moves)
# 
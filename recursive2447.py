# ***
# * *
# ***



def printPattern(n) : 
  point = n/3
  if n==3 : 
    for row in range(int(n)) :
      for col in range(int(n)):
        if col==(n-1) : 
          print("*")
        elif point <= row < point+point and point <=col < point+point:
          print(" ", end ="")
        else :
          print("*", end="")
  else:
    for row in range(int(n/3)):
      for col in range(int(n/3)):
        printPattern(n/3)

    
    

printPattern(27)
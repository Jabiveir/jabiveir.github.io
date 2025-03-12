import sys

def exit():
  sys.exit(0)

def unscramble(L):
  A = L
  Res = []
  for b in A:
    Res.append(b[0])
    Res.append(b[len(b)-1])
  if len(A) % 2 == 1:
    Res.pop(len(Res)-1)
  else:
    Res.pop(len(Res)-3)
    Res.pop(len(Res)-2)
    
  return Res

def get_flag():
  flag = open('flag.txt', 'r').read()
  flag = flag.strip()
  hex_flag = []
  for c in flag:
    hex_flag.append([str(hex(ord(c)))])

  return hex_flag

def main():
  flag = eval(input("Input data: "))
  cypher = unscramble(flag)
  for i in cypher:
    print(i, end=" ")

if __name__ == '__main__':
  main()

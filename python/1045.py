def main():
    c, b, a = sorted(map(float, input().split()))

    if (a>=b+c):
        print("NAO FORMA TRIANGULO")
        return
    if a**2==b**2+c**2:
        print("TRIANGULO RETANGULO")
    if a**2>b**2+c**2:
        print("TRIANGULO OBTUSANGULO")
    if a**2<b**2+c**2:
        print("TRIANGULO ACUTANGULO")
    if a==b and b==c:
        print("TRIANGULO EQUILATERO")
    elif a==b or b==c or a==c:
        print("TRIANGULO ISOSCELES")

if __name__=='__main__':
    main()
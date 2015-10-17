def kozos_oos (szam1, szam2):
    osztok = ()
    for i in range (1, min (szam1, szam2) + 1):
        if szam1 % i == 0 and szam2 % i == 0:
            osztok = osztok + (i,)
    return osztok

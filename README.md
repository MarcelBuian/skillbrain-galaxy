# skillbrain-galaxy

## comenzi utile de linux

- "cd skillbrain-galaxy" - schimbam folderul in folderul "git"
- "cd .." - schimbam folderul parinte
- "ls" - vedem ce se afla in interiorul dosarului curent
- "pwd" - vedem path (locatia) directoriul curent
- "CTRL + C" - abandonam comanda

## GIT: cum incepem o tema noua?

- opt `git status` - o comanda importanta, inofensiva (optionala), care ne arata statutul git-ului
- `git checkout main` - ne mutam in branch-ul de baza cu numele `main`
- opt `git fetch` - sincronizeaza codul de pe github cu dosarul local. Nu modifica nimic local, doar este sincronizat.
- opt `git pull origin main` - actualizam branchul main din github in local
- `git checkout -b sprint2` - se creeaza un branch nou cu numele sprint2
- Incepem lucru: cream un dosar nou "sprint2" si punem acolo toate fisierele necesare
- Cand terminam lucru:
- `git add .`
- `git commit -m "Am adaugat dosarul tema2 cu tema facuta"`
- `git push origin sprint2`
- cream un nou Pull Request (PR)
- Cream un ticket pe notion cu linkul la PR
- Asteptam PR sa fie confirmat
- Apasam pe Merge la PR

## Cum sa cream un proiect nou de react?

1. Instalam nodejs (daca nu este deja instalat)
2. Scriem comanda `npx create-react-app aplicatia-mea` - inlocuiti `aplicatia-mea` cu un nume mai potrivit
3. Intram in aplicatie cu comanda: `cd aplicatia-mea` - inlocuiti `aplicatia-mea` cu numele aplicatiei
4. Modificati codul si creati componentele necesare (js + css) + Structurati componentele in dosarele potrivite
5. Cand vrem sa rulam proiectul apelam `npm start`

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

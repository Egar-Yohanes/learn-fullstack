/* Dalam suatu desa akan dipilih seseorang ketua desa terdapat 3 orang kandidat, bernama viincent, Ncent, Admin,
Hitung masing masing suara yang di dapat per kandidat

contoh:
let votes = ["Vincent", "Ncent", "Vincent", "Admin", "Admin", "Vincent"]

result:
[
    ["Vincent",3]
    ["Ncent",1]
    ["Admin", 2]
]
*/

let votes = ["Vincent", "Ncent", "Vincent", "Admin", "Admin", "Vincent"];
let voteVincent = 0;
let voteNcent = 0;
let voteAdmin = 0;

for (let i = 0; i < votes.length; i++) {
    if (votes[i] === "Vincent") {
        voteVincent++;
    } else if (votes[i] === "Ncent") {
        voteNcent++;
    } else if (votes[i] === "Admin") {
        voteAdmin++;
    }
}

let result = [
    ["Vincent", voteVincent],
    ["Ncent", voteNcent],
    ["Admin", voteAdmin]
];

console.log(result);
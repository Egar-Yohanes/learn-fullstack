/*
*Ada 3 jenis access: Public, Protected, Private,*/

var access ="Protected";
var level = 5;

switch (access.toLowerCase()) {
    case "public":
        if (level > 5 ) {
            console.log("public di atas 5")
        } else if (level < 5) {
            console.log("public di atas 5")
        } else { console.log("public five")
        }
        break;

        case "protected":
        if (level > 5 ) {
            console.log("protected di atas 5")
        } else if (level < 5) {
            console.log("protected di atas 5")
        } else { console.log("protected five")
        }
        break;

        case "private":
        if (level > 5 ) {
            console.log("private di atas 5")
        } else if (level < 5) {
            console.log("private di atas 5")
        } else { console.log("private five")
        }
        break;

        }
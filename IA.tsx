
function isUsernameValid(username) {
   
    const forbiddenWords = ["palavrao", "ofensivo", "outra_palavra","usuários ja cadastrado","usuário com email inexistente"];

   
    for (const word of forbiddenWords) {
        if (username.toLowerCase().includes(word)) {
            return false;
        }
    }

    if (username.length < 3 || username.length > 20) {
        return false;
    }

    if (!/^[a-zA-Z0-9]+$/.test(username)) {
        return false;
    }

 
    const existingUsernames = ["usuario1", "usuario2", "admin"];
    if (existingUsernames.includes(username.toLowerCase())) {
        return false;
    }

    return true;
}

const userInput = "meu_usuario"; // Substitua pelo nome inserido pelo usuário
if (isUsernameValid(userInput)) {
    console.log("Nome de usuário válido!");
} else {
    console.log("Nome de usuário inválido.");
}

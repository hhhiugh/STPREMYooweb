<!DOCTYPE html>
<html lang="pt-br">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Login Z8HX</title><link rel="stylesheet" href="css/loginStyle.css"></head>
<body>
<form onsubmit="event.preventDefault(); validarLogin();">
    <h1>LOGIN Z8HX</h1>
    <div class="login">
        <input type="text" id="user" placeholder="Username: " required>
        <input type="password" id="pass" placeholder="Password: " required>
        <button type="submit" class="btn">Login</button>
    </div>
</form>
<script>
function validarLogin() {
    const u = document.getElementById('user').value;
    const p = document.getElementById('pass').value;
    if (u === "PIROCA" && p === "ADMIN") {
        alert("Logado com sucesso!");
        window.location.href = "dashboard.php";
    } else { alert("Usuário ou senha incorretos!"); }
}
</script>
</body>
</html>

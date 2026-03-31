<!DOCTYPE html>
<html lang="pt-br">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Dashboard Z8HX</title><link rel="stylesheet" href="css/dashStyle.css"></head>
<body style="display:none;" id="content">
<div class="toolbar"><a class="sair" href="index.html"> Sair </a><h1 class="title">Painel Z8HX - ADMIN</h1></div>
<div class="users"><img src="img/ViewUser100.png" width="50"><small id="user-count">...</small></div>
<script>
if (location.protocol !== 'https:' && location.hostname !== 'localhost') {
    location.replace('https:' + location.href.substring(location.protocol.length));
} else { document.getElementById('content').style.display = 'block'; }
async function carregar() {
    try {
        const res = await fetch('fullUser.json?t=' + new Date().getTime());
        const dados = await res.json();
        document.getElementById('user-count').innerText = Array.isArray(dados) ? dados.length : Object.keys(dados).length;
    } catch (e) { document.getElementById('user-count').innerText = "0"; }
}
carregar();
</script>
</body>
</html>

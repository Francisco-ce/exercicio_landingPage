

const dataDoEvento = new Date("aug 18 2024 19:00:00");
const timeStampEvento = dataDoEvento.getTime();

const cantaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAgora = agora.getTime();

    const distanciaAteEvento = timeStampEvento-timeStampAgora;

    const diasEmMs = 1000*60*60*24;
    const horasEmMs = 1000*60*60;
    const minutossEmMs = 1000*60;

    const diaDoEvento = Math.floor(distanciaAteEvento/diasEmMs);
    const horaDoEvento = Math.floor(distanciaAteEvento%diasEmMs/horasEmMs);
    const minutoDoEvento = Math.floor(distanciaAteEvento%horasEmMs/minutossEmMs);

    document.getElementById('dia').innerHTML = diaDoEvento;
    document.getElementById('hora').innerHTML = horaDoEvento;
    document.getElementById('min').innerHTML = minutoDoEvento;
})
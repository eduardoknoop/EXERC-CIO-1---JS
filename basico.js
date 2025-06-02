let dias = prompt('qual é o dia da semana?').toLocaleLowerCase();
let sabadoDomingo = ['sabado', 'domingo'];
if (sabadoDomingo.includes(dias)) {
    alert('Bom final de semana!');
} else {
    alert('Boa semana!');
}

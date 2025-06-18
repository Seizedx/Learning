// COLLISION WITH RECTANGLES
// Define o primeiro retângulo com posição (x, y) e dimensões (width, height)
const rectangle1 = {
    x: 5, // Posição x do canto superior esquerdo
    y: 5, // Posição y do canto superior esquerdo
    width: 50, // Largura do retângulo
    height: 50 // Altura do retângulo
};

// Define o segundo retângulo com posição (x, y) e dimensões (width, height)
const rectangle2 = {
    x: 5, // Posição x do canto superior esquerdo
    y: 5, // Posição y do canto superior esquerdo
    width: 50, // Largura do retângulo
    height: 50 // Altura do retângulo
};

// Verifica se não há colisão entre os retângulos usando a lógica de AABB (Axis-Aligned Bounding Box)
if (
    rectangle1.x > rectangle2.x + rectangle2.width || // Verifica se rectangle1 está à direita de rectangle2
    rectangle1.x + rectangle1.width < rectangle2.x || // Verifica se rectangle1 está à esquerda de rectangle2
    rectangle1.y > rectangle2.y + rectangle2.height || // Verifica se rectangle1 está abaixo de rectangle2
    rectangle1.y + rectangle1.height < rectangle2.y // Verifica se rectangle1 está acima de rectangle2
) {
    //NO COLLISION
    // Caso qualquer uma das condições seja verdadeira, os retângulos não se sobrepõem
} else {
    //COLLISION
    // Se nenhuma das condições acima for verdadeira, os retângulos colidem
}

// COLLISION WITH CIRCLES
// Define o primeiro círculo com posição central (x, y) e raio
const circle1 = {
    x: 10, // Posição x do centro do círculo
    y: 10, // Posição y do centro do círculo
    radius: 300 // Raio do círculo
};

// Define o segundo círculo com posição central (x, y) e raio
const circle2 = {
    x: 500, // Posição x do centro do círculo
    y: 500, // Posição y do centro do círculo
    radius: 150 // Raio do círculo
};

// Calcula a diferença entre as coordenadas x dos centros dos círculos
let dx = circle2.x - circle1.x;
// Calcula a diferença entre as coordenadas y dos centros dos círculos
let dy = circle2.y - circle1.y;
// Calcula a distância euclidiana entre os centros dos círculos usando o teorema de Pitágoras
let distance = Math.sqrt(dx * dx + dy * dy);
// Calcula a soma dos raios dos dois círculos
let sumOfRadius = circle1.radius + circle2.radius;

// Verifica as condições de colisão entre os círculos
if (distance < sumOfRadius) {
    //CIRCLES COLLIDE
    // Se a distância entre os centros é menor que a soma dos raios, os círculos se sobrepõem
} else if (distance === sumOfRadius) {
    //CIRCLES ARE TOUCHING
    // Se a distância é exatamente igual à soma dos raios, os círculos estão se tocando nas bordas
} else if (distance > sumOfRadius) {
    //NO COLLISION
    // Se a distância é maior que a soma dos raios, os círculos não se tocam
}